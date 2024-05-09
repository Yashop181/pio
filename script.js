const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const btn = item.querySelector('.accordion-btn');

  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    accordionItems.forEach(item => {
      item.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }
  });
});


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});