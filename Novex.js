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
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observerOptions = {
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        // Reset animation when the element goes out of view
        entry.target.classList.remove("in-view");
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => observer.observe(el));
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

window.addEventListener("scroll", () => {

    if(backToTop && window.scrollY > 400){

        backToTop.classList.add("show");

    }

    else if (backToTop) {

        backToTop.classList.remove("show");

    }

});

if (backToTop) backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
