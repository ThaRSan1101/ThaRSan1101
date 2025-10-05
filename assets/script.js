(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');

  themeToggle?.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.setAttribute('aria-pressed', String(isLight));
  });

  // Typing effect
  const typedEl = document.getElementById('typed');
  const phrases = ['Software Developer', 'Full‑Stack Developer', 'AI/ML Enthusiast'];
  let pIndex = 0, charIndex = 0, deleting = false;

  function type() {
    if (!typedEl) return;
    const current = phrases[pIndex];
    if (!deleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 900);
        return;
      }
      setTimeout(type, 80);
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        pIndex = (pIndex + 1) % phrases.length;
      }
      setTimeout(type, 45);
    }
  }
  type();

  // Active nav on scroll (simple)
  const navLinks = document.querySelectorAll('nav.links a');
  const sections = Array.from(document.querySelectorAll('main section'));
  function onScroll() {
    const y = window.scrollY + 120;
    for (const link of navLinks) link.classList.remove('active');
    for (const sec of sections) {
      if (sec.offsetTop <= y && (sec.offsetTop + sec.offsetHeight) > y) {
        const id = sec.getAttribute('id');
        const match = document.querySelector(`nav.links a[href="#${id}"]`);
        match?.classList.add('active');
      }
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
})();
