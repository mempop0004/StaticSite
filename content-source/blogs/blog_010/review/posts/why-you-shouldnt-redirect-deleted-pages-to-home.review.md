# Review Summary

Core decisions:
- Separate user impact and crawler signal impact.
- Redirect only when a true replacement exists; otherwise 404/410.
- Provide an immediate action: pick one URL group and stop home redirects.

Key risks checked:
- Avoid masking deletion with a misleading redirect.
- Prevent mixed signals that delay indexing decisions.
- Keep the rule simple enough to apply consistently.
