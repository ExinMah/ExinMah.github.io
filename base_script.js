let menubar = document.querySelector('.menu-bar');

document.querySelector('#menu-btn').onclick = () =>{
  menubar.classList.toggle('active');
}

window.onscroll = () =>{
  menubar.classList.remove('active');
}