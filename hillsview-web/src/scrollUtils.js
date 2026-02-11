// simple smooth scroll that will work with your React navbar
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80; // navbar offset
  window.scrollTo({ top: y, behavior: 'smooth' });
}
