document.addEventListener("DOMContentLoaded", ready);
function ready(){
  let burger = document.getElementsByClassName('burger');
  let menu = document.getElementsByClassName('menu');
  let link_main = document.getElementsByClassName('link_main');
  let welcome = document.getElementsById('welcome');
  burger[0].onclick= function(event){
    event.preventDefault();
    console.log('test');
    this.classList.toggle('burger_cross'); 
    menu[0].classList.toggle('menu_show'); 
link_main[0].onclick= function () {
  consol.log ('welcome')
  }

}
