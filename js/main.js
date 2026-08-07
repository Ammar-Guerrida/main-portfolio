(function () {
  "use strict";

  /* ----- Theme ----- */
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;
  const themeIcon = themeToggle.querySelector("i");

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeIcon.className = theme === "dark" ? "fas fa-moon" : "fas fa-sun";
  }

  const saved = localStorage.getItem("theme");
  if (saved) {
    setTheme(saved);
  } else {
    const prefers = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    setTheme(prefers);
  }

  themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  /* ----- Hamburger ----- */
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const navOverlay = document.getElementById("navOverlay");
  const body = document.body;

  function openNav() {
    hamburger.classList.add("active");
    nav.classList.add("open");
    navOverlay.classList.add("active");
    body.classList.add("no-scroll");
  }

  function closeNav() {
    hamburger.classList.remove("active");
    nav.classList.remove("open");
    navOverlay.classList.remove("active");
    body.classList.remove("no-scroll");
  }

  hamburger.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  navOverlay.addEventListener("click", closeNav);

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  /* ----- Header scroll effect ----- */
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  /* ----- Active nav link on scroll ----- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    let current = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("load", updateActiveLink);

  /* ----- Scroll reveal ----- */
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => observer.observe(el));

  /* ----- Stat counter animation ----- */
  const statNumbers = document.querySelectorAll(".stat-number");

  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10);
          animateCounter(el, target);
          statObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => statObserver.observe(el));

  function animateCounter(el, target) {
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current;
    }, 20);
  }

  /* ----- Contact form ----- */
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const message = document.getElementById("formMessage").value.trim();

    if (!name || !email || !message) {
      const btn = contactForm.querySelector("button[type='submit']");
      btn.textContent = "Please fill all fields";
      btn.style.background = "#ef4444";
      btn.style.borderColor = "#ef4444";
      setTimeout(() => {
        btn.textContent = "Send Message";
        btn.style.background = "";
        btn.style.borderColor = "";
      }, 2500);
      return;
    }

    const btn = contactForm.querySelector("button[type='submit']");
    const original = btn.textContent;
    btn.textContent = "Sending...";
    btn.style.background = "#22c55e";
    btn.style.borderColor = "#22c55e";

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = "";
      btn.style.borderColor = "";
      contactForm.submit();
    }, 800);
  });
})();

/* Scroll to top */
const scrollTopBtn = document.getElementById("scrollTop");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 300);
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
