document.addEventListener("DOMContentLoaded", ready);
function ready(){
  //burger
  let burger = document.getElementsByClassName('burger');
  let menu = document.getElementsByClassName('menu');
  burger[0].onclick= function(event){
    event.preventDefault();
    console.log('test');
    this.classList.toggle('burger_cross'); 
    menu[0].classList.toggle('menu_show'); 
  }

  //pop-up
  let linkMain = document.getElementsByClassName('link_main');
  let welcome = document.getElementById('welcome');
  linkMain[0].onclick = function (){
    welcome.classList.toggle('hide');
  }
}
