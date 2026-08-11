let instance = null;

export const setLenis = (i) => { instance = i; };
export const getLenis = () => instance;

export function scrollToTopNow() {
  const lenis = instance;
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
}

export function scrollToHash(hash, opts = {}) {
  const el = document.querySelector(hash);
  if (!el) return false;
  const lenis = instance;
  if (lenis) lenis.scrollTo(el, { duration: 1.1, ...opts });
  else el.scrollIntoView({ behavior: "smooth" });
  return true;
}