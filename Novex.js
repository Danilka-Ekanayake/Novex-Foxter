const titleText = "Innovative Solutions with the Novex Foxter Team";
const subtitleText = "Collaborative Creativity Limitless Possibilities ";

function typeText(elementId, text, speed) {
  let i = 0;
  const element = document.getElementById(elementId);
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", () => {
  typeText("hero-title", titleText, 40); // Faster typing for the title
  setTimeout(() => {
    typeText("hero-subtitle", subtitleText, 45); // Faster typing for the subtitle
  }, titleText.length * 40 + 500); // Delay after title finishes
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  hamburger.classList.toggle('toggle');
});
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

document.getElementById('applicationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Basic check (add AJAX or backend logic here later)
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const role = document.getElementById('role').value;
  const resume = document.getElementById('resume').files.length;

  if (fullName && email && role && resume) {
    document.getElementById('applicationForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
  } else {
    alert('Please fill out all required fields and upload your resume.');
  }
});


