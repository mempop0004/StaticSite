(function () {
	const copyLabel = document.documentElement.lang === 'ko' ? '복사' : 'Copy';
	const copiedLabel = document.documentElement.lang === 'ko' ? '복사됨' : 'Copied';

	async function writeToClipboard(text) {
		if (navigator.clipboard?.writeText) {
			await navigator.clipboard.writeText(text);
			return;
		}

		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.setAttribute('readonly', '');
		textarea.style.position = 'absolute';
		textarea.style.left = '-9999px';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);
	}

	function attachCopyButton(pre) {
		if (pre.dataset.copyReady === 'true') {
			return;
		}

		const code = pre.querySelector('code');
		if (!code) {
			return;
		}

		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'code-copy-button';
		button.textContent = copyLabel;
		button.setAttribute('aria-label', copyLabel);

		button.addEventListener('click', async () => {
			try {
				await writeToClipboard(code.innerText);
				button.textContent = copiedLabel;
				window.setTimeout(() => {
					button.textContent = copyLabel;
				}, 1600);
			} catch {
				button.textContent = copyLabel;
			}
		});

		pre.dataset.copyReady = 'true';
		pre.appendChild(button);
	}

	function init() {
		document.querySelectorAll('pre.astro-code').forEach(attachCopyButton);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init, { once: true });
	} else {
		init();
	}
})();
