const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const reveals = document.querySelectorAll(".reveal");
const copyButton = document.querySelector(".copy-ip");
const copyStatus = document.querySelector(".copy-status");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

menuToggle?.addEventListener("click", () => {
  const open = navbar.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", open);
});

navLinks.forEach(link => {
  link.addEventListener("click", () => navbar.classList.remove("menu-open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

const sections = document.querySelectorAll("main section[id]");
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

copyButton?.addEventListener("click", async () => {
  const ip = copyButton.dataset.ip;
  try {
    await navigator.clipboard.writeText(ip);
    copyStatus.textContent = `Copied ${ip}`;
  } catch {
    copyStatus.textContent = `Server IP: ${ip}`;
  }
  setTimeout(() => copyStatus.textContent = "", 3000);
});

document.getElementById("year").textContent = new Date().getFullYear();
