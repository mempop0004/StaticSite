const sourceTemplate = document.querySelector('#post-source');
const slotGuideTemplate = document.querySelector('#slot-guides');
const preview = document.querySelector('[data-preview]');
const slotList = document.querySelector('[data-slot-list]');
const tagList = document.querySelector('[data-tag-list]');
const titleTarget = document.querySelector('[data-title]');
const dateTarget = document.querySelector('[data-date]');
const localeButtons = [...document.querySelectorAll('[data-locale]')];
const tabButtons = [...document.querySelectorAll('[data-tab]')];
const previewPanels = [...document.querySelectorAll('[data-panel]')];

let currentLocale = 'ko';

function parseSlotGuides() {
  if (!slotGuideTemplate) {
    return {};
  }

  try {
    return JSON.parse(slotGuideTemplate.textContent?.trim() ?? '{}');
  } catch {
    return {};
  }
}

function parsePostSource() {
  const source = sourceTemplate.textContent?.trim() ?? '';

  const parseSingleTag = (tag, lang) => {
    const pattern = new RegExp(`<${tag}\\s+lang="${lang}">([\\s\\S]*?)<\\/${tag}>`);
    const match = source.match(pattern);
    return match ? match[1].trim() : '';
  };

  const parseBody = (lang) => {
    const pattern = new RegExp(`<body\\s+lang="${lang}"><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/body>`);
    const match = source.match(pattern);
    return match ? match[1].trim() : '';
  };

  const postAttrsMatch = source.match(/<post\s+([\s\S]*?)>/);
  const rawAttrs = postAttrsMatch?.[1] ?? '';
  const attrs = Object.fromEntries(
    [...rawAttrs.matchAll(/([a-z-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]),
  );

  return {
    title: {
      en: parseSingleTag('title', 'en'),
      ko: parseSingleTag('title', 'ko'),
    },
    tags: {
      en: parseSingleTag('tags', 'en').split(',').map(v => v.trim()).filter(Boolean),
      ko: parseSingleTag('tags', 'ko').split(',').map(v => v.trim()).filter(Boolean),
    },
    pubDate: attrs.timestamp ?? attrs['pub-date'] ?? '',
    body: {
      en: parseBody('en'),
      ko: parseBody('ko'),
    },
    slots: [...source.matchAll(/<slot\s+code="(\d{3})"\s+role="([^"]+)">[\s\S]*?<prompt>([\s\S]*?)<\/prompt>[\s\S]*?<\/slot>/g)].map(
      ([, code, role, prompt]) => ({
        code,
        role,
        prompt: prompt.trim(),
      }),
    ),
  };
}

const post = parsePostSource();
const slotGuides = parseSlotGuides();

function renderLocale(locale) {
  currentLocale = locale;
  titleTarget.textContent = post.title[locale];
  dateTarget.textContent = `작성 ${post.pubDate}`;
  preview.innerHTML = post.body[locale];
  tagList.innerHTML = '';
  post.tags[locale].forEach((tag) => {
    const item = document.createElement('span');
    item.className = 'pill';
    item.textContent = tag;
    tagList.appendChild(item);
  });
  localeButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.locale === locale);
  });
}

function renderSlots() {
  slotList.innerHTML = '';
  if (post.slots.length === 0) {
    slotList.innerHTML = '<p class="side-empty">이미지 슬롯 없음</p>';
    return;
  }

  post.slots.forEach((slot) => {
    const guide = slotGuides[slot.role] ?? null;
    const card = document.createElement('div');
    card.className = 'slot-card';
    card.innerHTML = `
      <div class="slot-head">
        <div>
          <div class="slot-code">IMAGE_${slot.code}</div>
          <div class="slot-filehint">${slot.code}.png / ${slot.code}.webp / ${slot.code}.sel.png</div>
        </div>
        <div class="slot-role">${slot.role}</div>
      </div>
      ${guide ? `
      <div class="slot-guide">
        <div class="slot-guide-summary">
          <div>
            <div class="slot-guide-label">${guide.label}</div>
            <p class="slot-guide-goal"><strong>권장 출력:</strong> ${guide.visualType ?? ''}</p>
            <p class="slot-guide-goal">${guide.goal}</p>
          </div>
          <button class="btn slot-toggle" type="button" data-toggle-guide="${slot.code}" aria-expanded="false">가이드 펼치기</button>
        </div>
        <div class="slot-guide-body" data-guide-body="${slot.code}" hidden>
          <div class="slot-guide-group">
            <div class="slot-guide-title">언제 쓰나</div>
            <ul>${guide.useWhen.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="slot-guide-group">
            <div class="slot-guide-title">반드시 지킬 것</div>
            <ul>${guide.must.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="slot-guide-group">
            <div class="slot-guide-title">피할 것</div>
            <ul>${guide.avoid.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div class="slot-guide-output">${guide.outputHint}</div>
        </div>
      </div>` : ''}
      <textarea class="slot-prompt" readonly>${slot.prompt}</textarea>
      <div class="slot-actions">
        <button class="btn" data-copy-slot="${slot.code}">복사</button>
      </div>
    `;
    slotList.appendChild(card);
  });

  slotList.querySelectorAll('[data-copy-slot]').forEach((button) => {
    button.addEventListener('click', async () => {
      const code = button.getAttribute('data-copy-slot');
      const slot = post.slots.find((entry) => entry.code === code);
      if (!slot) return;
      await navigator.clipboard.writeText(slot.prompt);
      button.classList.add('is-done');
      button.textContent = '복사됨';
      window.setTimeout(() => {
        button.classList.remove('is-done');
        button.textContent = '복사';
      }, 1200);
    });
  });

  slotList.querySelectorAll('[data-toggle-guide]').forEach((button) => {
    button.addEventListener('click', () => {
      const code = button.getAttribute('data-toggle-guide');
      const body = slotList.querySelector(`[data-guide-body="${code}"]`);
      if (!(body instanceof HTMLElement)) return;
      const nextHidden = !body.hidden;
      body.hidden = nextHidden;
      button.setAttribute('aria-expanded', String(!nextHidden));
      button.textContent = nextHidden ? '가이드 펼치기' : '가이드 접기';
    });
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    tabButtons.forEach((entry) => entry.classList.toggle('is-active', entry === button));
    previewPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.panel === target);
    });
  });
});

localeButtons.forEach((button) => {
  button.addEventListener('click', () => renderLocale(button.dataset.locale));
});

document.querySelector('[data-copy-title]')?.addEventListener('click', async () => {
  const button = document.querySelector('[data-copy-title]');
  await navigator.clipboard.writeText(post.title[currentLocale]);
  if (!(button instanceof HTMLElement)) return;
  button.classList.add('is-done');
  button.textContent = '제목 복사됨';
  window.setTimeout(() => {
    button.classList.remove('is-done');
    button.textContent = '제목 복사';
  }, 1200);
});

renderSlots();
renderLocale(currentLocale);
