const links = Array.from(document.querySelectorAll('.nav__link'));
const sections = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActive = () => {
  const offset = window.scrollY + 120;
  let activeIndex = 0;
  sections.forEach((section, index) => {
    if (section.offsetTop <= offset) {
      activeIndex = index;
    }
  });
  links.forEach((link, index) => {
    link.classList.toggle('nav__link--active', index === activeIndex);
  });
};

window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);
