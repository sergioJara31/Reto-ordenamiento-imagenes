 
/* let arrayImagenes1= ["imagenes/imagenesgrupo1/1.png","imagenes/imagenesgrupo1/2.png","imagenes/imagenesgrupo1/3.png","imagenes/imagenesgrupo1/4.png","imagenes/imagenesgrupo1/5.png","imagenes/imagenesgrupo1/6.png","imagenes/imagenesgrupo1/7.png"];

let arrayImagenes2= ["imagenes/imagenesgrupo2/1.png","imagenes/imagenesgrupo2/2.png","imagenes/imagenesgrupo2/3.png","imagenes/imagenesgrupo2/4.png","imagenes/imagenesgrupo2/5.png","imagenes/imagenesgrupo2/6.png","imagenes/imagenesgrupo2/7.png"];

let arrayImagenes3= ["imagenes/imagenesgrupo3/1.png","imagenes/imagenesgrupo3/2.png","imagenes/imagenesgrupo3/3.png","imagenes/imagenesgrupo3/4.png","imagenes/imagenesgrupo3/5.png","imagenes/imagenesgrupo3/6.png","imagenes/imagenesgrupo3/7.png"];
 
esta es una de las mil manera que intente que me diera pero no se porque no me quiere dar
if(imgSelect === " 1"){
    document.getElementById("1.png")=arrayImagenes1=[4];
    document.getElementById("2.png")=arrayImagenes1=[5];
    document.getElementById("3.png")=arrayImagenes1=[3];
    document.getElementById("4.png")=arrayImagenes1=[1];
    document.getElementById("5.png")=arrayImagenes1=[0];
    document.getElementById("6.png")=arrayImagenes1=[2];

}else if (imgSelect===" 2 "){
    document.getElementById("1.png")=arrayImagenes2=[2];
    document.getElementById("2.png")=arrayImagenes2=[0];
    document.getElementById("3.png")=arrayImagenes2=[1];
    document.getElementById("4.png")=arrayImagenes2=[4];
    document.getElementById("5.png")=arrayImagenes2=[5];
    document.getElementById("6.png")=arrayImagenes2=[6];

     if (imgSelect===" 3 "){
        document.getElementById("1.png")=arrayImagenes3=[3];
        document.getElementById("2.png")=arrayImagenes3=[0];
        document.getElementById("3.png")=arrayImagenes3=[1];
        document.getElementById("4.png")=arrayImagenes3=[4];
        document.getElementById("5.png")=arrayImagenes3=[2];
        document.getElementById("6.png")=arrayImagenes3=[5];
    
}else if(imgSelect===" "){
    alert("no se ingreso nada");
    console.log("seleecione un grupo de imagenes");
}
 ******************************************************************************* */

function GruposImagenes(){
     
    let imgSelect=document.getElementById("imgSelect").value;
    console.log(imgSelect);

    if(imgSelect === " 1"){
        for(let i=0; i<7;i++){
            let nr = math.floor(math.random()*7);
            let source=document.getElementById(i+1+".png").innerHTML;
            source.src="imagenes/imagenes grupo 1/"+nr+".png";
        }
        
    }else if (imgSelect===" 2 "){
        for(let i=0; i<7;i++){
            let nr = math.floor(math.random()*7);
            let source=document.getElementById(i+1+".png").innerHTML;
            source.src="imagenes/imagenes grupo 2/"+nr+".png";
        }
    } else if (imgSelect===" 3 "){
        for(let i=0; i<7;i++){
            let nr = math.floor(math.random()*7);
            let source=document.getElementById(i+1+".png").innerHTML;
            source.src="imagenes/imagenes grupo 3/"+nr+".png";
        }
    }else if(imgSelect===" "){
        alert("no se ingreso nada");
        console.log("seleecione un grupo de imagenes");
    }
} 



/* ********************************************************************************************* */
/* sus estructuras continen ciclos anidados 
  bucle exterior: recorre cada uno de los elemntos
  bucle interno: los compara entre si
  */  
function algoritmoBurbujaAsc(){
    /* trabajo por conjunto de pares 
    cada elemento se ompara con el siguiente elemento
    El ultimo elemento de cada tupla se compara con el siguiente */
for (let i = 0; i < arrayImagenes.length; i++ ) {
    for (let j = 0; j < arrayImagenes.length - 1 - i; j++ ) {
      if (arrayImagenes[i+1] > arrayImagenes[j+1]) {
        let aux = document.getElementById(i+1+".png").src;
       arrayImagenes[i+1] = arrayImagenes[j+1];
        arrayImagenes[j+1]= aux;
      }
    }
  }

}
/* ejemplo  */



function algoritmoInsercionAsc(){
    for ( let i = 1; i < 7; i++ ) {
        j = i;
        while ( (j > 0) && (arrayImagenes[j-1] > arrayImagenes[i+1]) ) {
           arrayImagenes[i+1] = arrayImagenes[j-1];
          j--;
        }
        arrayImagenes[j-1] =arrayImagenes[i+1] ;
      }


}





function algoritmoSeleccionAsc(){
    for ( let j = 0; j < arrayImagenes.length; ++j ) {
        let i = minimo = j;
        for ( ++i; i < arrayImagenes.length; ++i ) {
          ( arrayImagenes[ i ] < arrayImagenes[ minimo ] ) && ( minimo = i );
        }
        let aux=arrayImagenes[ j ]
        arrayImagenes[ j ]  =  arrayImagenes[ minimo ];
        arrayImagenes[ minimo ] = aux;
      }


}


function algoritmoBurbujaD(){
 
    for (let i = 0; i < arrayImagenes; i++ ) {
        for (let j = 0; j < l - 1 - i; j++ ) {
          if (arrayImagenes[i+1] < arrayImagenes[j+1]) {
            let aux = arrayImagenes[j+1];
            arrayImagenes[j+1] =arrayImagenes[i+1];
           arrayImagenes[i+1]= aux;
          }
        }
      }
    }
    
    
    
    
function algoritmoInsercionD(){
    for ( let i = 1; i < 7; i++ ) {
        j = i;
        while ( (j > 0 )&&( arrayImagenes[j-1] < arrayImagenes[i+1]) ) {
            arrayImagenes[j-1] =arrayImagenes[i+1];
          j--;
        }
       arrayImagenes[i+1] = arrayImagenes[j-1] ;
      }


 }
    
    
    
    
    
function algoritmoSeleccionD(){
    for ( let j = 0; j < arrayImagenes.length; ++j ) {
        let i = minimo = j;
        for ( ++i; i < arrayImagenes.length; ++i ) {
          ( arrayImagenes[ i ] < arrayImagenes[ minimo ] ) && ( minimo = i );
        }
        let aux=arrayImagenes[ j ]
        arrayImagenes[ j ]  =  arrayImagenes[ minimo ];
        arrayImagenes[ minimo ] = aux;
      }


}


function showSelected(){
    let SeleccionAlgoritmo= document.getElementById("algoritmoSeleccionado").value;
   

    if((SeleccionAlgoritmo==="1")&&((document.getElementById("tipoOrdAlg").checked))){
        algoritmoBurbujaAsc();
    }else if((SeleccionAlgoritmo==="2")&&((document.getElementById("tipoOrdAlg").checked))){
        algoritmoInsercionAsc();
    }else if((SeleccionAlgoritmo==="3")&&((document.getElementById("tipoOrdAlg").checked))){
        algoritmoSeleccionAsc();
    }if((SeleccionAlgoritmo==="1")&&((document.getElementById("tipoOrdAlg2").checked))){
        algoritmoBurbujaD();
    }else if((SeleccionAlgoritmo==="2")&&((document.getElementById("tipoOrdAlg2").checked))){
        algoritmoInsercionD();
    }else if((SeleccionAlgoritmo==="3")&&((document.getElementById("tipoOrdAlg2").checked))){
        algoritmoSeleccionD();
    }

}




/* ****************************************************************************************************************** */

/* *************** */

/* const arrayImagenes1= [document.getElementById("1.png").src ,document.getElementById("2.png").src ,document.getElementById("3.png").src ,document.getElementById("4.png").src ,document.getElementById("5.png").src ,document.getElementById("6.png").src ,document.getElementById("7.png").src ];




const arrayImagenes2= [document.getElementById("1.png").src ,document.getElementById("2.png").src ,document.getElementById("3.png").src ,document.getElementById("4.png").src ,document.getElementById("5.png").src ,document.getElementById("6.png").src ,document.getElementById("7.png").src ];




const arrayImagenes3= [document.getElementById("1.png").src ,document.getElementById("2.png").src ,document.getElementById("3.png").src ,document.getElementById("4.png").src ,document.getElementById("5.png").src ,document.getElementById("6.png").src ,document.getElementById("7.png").src ];

 */


 function añadirElementoFinalArray(){
     let arrayFrameworks = new Array();

     arrayFrameworks.push('laravel', 'angular', 'symphony');

     arrayFrameworks.push('react', 'GO', 'ts');
 }

 function deleteFinalArray(){
    arrayFrameworks.pop();
    /* se borra el elmento que esta en la ultimo posicion, ts */
    console.log("se ha modificado el tamaño del array");

 }

 function añadirInicioArray(){
    arrayFrameworks.unshift('laravel', 'angular', 'symphony');
    
 }

 function eliminarInicioArray(){
    arrayFrameworks.unshift('laravel', 'angular', 'symphony');
    arrayFrameworks.shift();
    
 }

 console.log(añadirElementoFinalArray());
 console.log(deleteFinalArray());
 console.log(añadirInicioArray());
 console.log(eliminarInicioArray());