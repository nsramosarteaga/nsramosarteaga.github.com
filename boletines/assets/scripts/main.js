
// //DOM
//
// let links = document.querySelectorAll("a");
//
// links.forEach(function(link){
//   console.log(link);
// });

// let celdas = document.querySelectorAll("td");
//
// celdas.forEach(function(td){
//   td.addEventListener('click',function(){
//     console.log(this);
//   })
// });

// let iconos = document.querySelectorAll("i");
//
// iconos.forEach(function(icono){
//   icono.classList.remove("fa-star");
// });

let links = document.querySelectorAll(".close");

links.forEach(function(link){
  link.addEventListener('click',function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');

    //quitar las clases de animaciónex
    content.classList.remove("slideInDown");
    content.classList.remove("animated");

    //agregar las clases
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    //retardar redireccionamiento
    setTimeout(function(){
      location.href="/boletines";
    },700)

  });
});
