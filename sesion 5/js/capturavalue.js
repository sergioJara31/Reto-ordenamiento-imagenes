function seleccionImagen(){
    /* capturar un evento de selcceion  por el id del checkbox */
    const img1= document.getElementById("1").checked;
    const img2= document.getElementById("2").checked;
    const img3= document.getElementById("3").checked;
    const img4= document.getElementById("4").checked;
    const img5= document.getElementById("5").checked;
    const img6= document.getElementById("6").checked;
/* capturar un evento de seleccion por el name del checkbox */
const nombre1= document.getElementById("1")[0].checked;
const nombre2= document.getElementById("2")[0].checked;
const nombre3= document.getElementById("3")[0].checked;
const nombre4= document.getElementById("4")[0].checked;
const nombre5= document.getElementById("5")[0].checked;
const nombre6= document.getElementById("6")[0].checked;

let arrayImgSelected= new Array();
arrayImgSelected.push(img1,img2,img3,img4,img5,img6);
console.log(arrayImgSelected);
}



