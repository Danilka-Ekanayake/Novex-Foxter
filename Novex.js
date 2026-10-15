const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (nav) {
  const currentPage = decodeURIComponent(window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const currentLink = Array.from(nav.querySelectorAll('a[href]')).find((link) => {
    const targetPage = decodeURIComponent(link.getAttribute('href').split('/').pop()).toLowerCase();
    return targetPage === currentPage;
  });

  if (currentLink) currentLink.setAttribute('aria-current', 'page');
}

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    nav.classList.toggle('nav-active', !isExpanded);
    hamburger.classList.toggle('toggle', !isExpanded);
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    hamburger.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('nav-active');
      hamburger.classList.remove('toggle');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open navigation');
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasIntersectionObserver = "IntersectionObserver" in window;

  if (!prefersReducedMotion && hasIntersectionObserver) {
    const revealTargets = document.querySelectorAll([
      "main > section",
      "body > section",
      ".content-wrapper",
      ".wrapper",
      ".footer-top",
      ".footer",
      "main article",
      ".service-card",
      ".portfolio-item",
      ".team-card",
      ".about-person",
      ".role-card",
      ".journal-card"
    ].join(", "));
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("site-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach((element, index) => {
      element.classList.add("site-reveal");
      if (element.matches("article, .service-card, .portfolio-item, .team-card, .about-person, .role-card, .journal-card")) {
        element.classList.add("site-reveal-item");
        element.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
      }
      revealObserver.observe(element);
    });

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-view", entry.isIntersecting);
      });
    }, { threshold: 0.2 });

    animatedElements.forEach((element) => animationObserver.observe(element));
  }
});


console.log("Team section loaded");

const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
  applicationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value;
    const resume = document.getElementById('resume').files.length;

    if (fullName && email && role && resume) {
      applicationForm.classList.add('hidden');
      document.getElementById('successMessage').classList.remove('hidden');
    } else {
      alert('Please fill out all required fields and upload your resume.');
    }
  });
}

// ================= Back To Top =================

const backToTop = document.getElementById("backToTop");

if (backToTop) {
  const updateBackToTopVisibility = () => {
    backToTop.classList.toggle("show", window.scrollY > 300);
  };

  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
