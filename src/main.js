const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

menuBtn.addEventListener('click', function () {
  this.classList.toggle('open')
  menu.classList.toggle('translate-x-full')
  menu.classList.toggle('translate-x-0')
})
