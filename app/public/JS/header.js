//MENU DESKTOP
window.addEventListener("scroll", function(){
    let header = this.document.querySelector("#header")
    header.classList.toggle('rolagem', window.scrollY > 0)
})


//BURGER MENU
const menuToggle = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('close-btn');

  closeBtn.addEventListener('click', () => {
    menuToggle.checked = false;
  });