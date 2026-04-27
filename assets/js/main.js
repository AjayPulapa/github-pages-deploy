// Hamburger toggle (mobile header nav)
const hamburger = document.getElementById('hamburger');
const headerNav = document.getElementById('headerNav');

if (hamburger && headerNav) {
  hamburger.addEventListener('click', () => {
    headerNav.classList.toggle('open');
  });
}

// Sidebar toggle on mobile (tap logo area or add sidebar toggle btn)
// Auto-close sidebar on link click (mobile)
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('sidebar')?.classList.remove('open');
    headerNav?.classList.remove('open');
  });
});

// Copy code button
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}

// Highlight active quick-nav link on scroll
const sections = document.querySelectorAll('.content-section[id]');
const quickLinks = document.querySelectorAll('.quick-nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      quickLinks.forEach(a => {
        a.style.color = '';
        a.style.background = '';
        a.style.borderColor = '';
      });
      const active = document.querySelector(`.quick-nav a[href="#${entry.target.id}"]`);
      if (active) {
        active.style.color = 'var(--accent)';
        active.style.background = 'var(--accent-glow)';
        active.style.borderColor = 'var(--border-accent)';
      }
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Mark current page in sidebar
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.sidebar-link, .nav-link').forEach(link => {
  const href = link.getAttribute('href')?.split('/').pop();
  if (href === currentPath) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
