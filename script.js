const opentBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sideNav = document.getElementById('side-nav');

opentBtn.addEventListener('click', () => {
  sideNav.style.width = '100%';
});
closeBtn.addEventListener('click', () => {
  sideNav.style.width = '0';
});
