const themesRoot = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', ()=>{
  if(document.documentElement.classList.contains('light')){
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme','dark');
  } else {
    document.documentElement.classList.add('light');
    localStorage.setItem('theme','light');
  }
});

// initialize theme
const saved = localStorage.getItem('theme');
if(saved === 'light') document.documentElement.classList.add('light');

// small typing effect
const typedEl = document.getElementById('typed');
const phrases = ['Software Developer', 'Full-Stack Developer', 'AI/ML Enthusiast'];
let pi = 0, ci = 0;
function tick(){
  const p = phrases[pi];
  typedEl.textContent = p.slice(0, ci);
  ci++;
  if(ci > p.length){
    ci = 0; pi = (pi + 1) % phrases.length;
    setTimeout(tick, 900);
  } else {
    setTimeout(tick, 120);
  }
}
if(typedEl) tick();
