
var menu = document.getElementById("products");
var logoMenu = document.getElementById("logo-menu");

console.log(menu,logoMenu);

menu.addEventListener("click", function(){

     var menuEstendido = document.getElementById("menu-products");
     if(menuEstendido.style.display === "block"){
         menuEstendido.style.display = "none";
        
     }else{
         menuEstendido.style.display = "block";
     }
 })

 logoMenu.addEventListener("click", function(){
    var aside =  document.getElementById("aside");
    var img = document.getElementById("logo-menu");
    if(aside.style.display === "block"){
        aside.style.display = "none";
        img.src="./Assets/Menu.svg"
    }else{
        aside.style.display = "block";
        img.src="./Assets/Close.svg"
    }

 })
