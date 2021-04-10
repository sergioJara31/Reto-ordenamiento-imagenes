/* dudas:
como hago para pasar los valores ingresados a una lista

como hago para que la lista se imprima 


*/
let listaDefault="1,5,9,13,17";
document.getElementById("listaPorDefault").innerHTML=listaDefault;

const capturaValorInputAnonima = function() {
    let valoresNodos = document.getElementById("nodos").value;
    document.getElementById("nodosIngresados").innerHTML = valoresNodos;
    /* dividir o separa cada valor por coma */
};

/* const capturaValorInputFlecha = () => {
    let valoresNodos = document.getElementById("nodos").value;
    document.getElementById("nodosIngresados").innerHTML = valoresNodos;
};
function funcionEstandar() {
    let valoresNodos = document.getElementById("nodos").value;
    document.getElementById("nodosIngresados").innerHTML = valoresNodos;
} */



function cargueImagenes(eventoSeleccionar) {
    let files = eventoSeleccionar.target.files;
    for (let i = 0, f; f = files[i]; i++) {
        /* Cargue de sólo imagenes */
        if (!f.type.match('image.*')) {
            continue;
        }
        let CargarImagenes = new FileReader;
        /* Capturar información de la imagen: tipo, nombre, tamaño */
        
        CargarImagenes.onload = (function(imagenSeleccionada) {
            return function(imagen) {
                /* Crear etiqueta HTML en el DOM */
                let span = document.createElement('span');
                /* Escribimos en la etiqueta span: cargamos la imagen */
                span.innerHTML = ['<img class ="thumb" width ="100px" heigth="100px" src= " ',
                    imagen.target.result, ' "title=" ', escape(imagenSeleccionada.name),
                    ' "/> '
                ].join('');
                document.getElementById("list").insertBefore(span, null);
            };
        })(f);
        /* Función de la API FileReader
        Hace la lectura del contenido de un objeto Blob
        Trabaja con el atributo result que devuelve los datos del fichero, en este caso la imagen seleccionada */
        CargarImagenes.readAsDataURL(f);
    }
}


document.getElementById('files').addEventListener('change', cargueImagenes, false);
/* cargue de archivo txt */
let input= myInput;
let infoArchivo= new FileReader;
input.addEventListener('change',onchange); 

/* cargue del archivo */
function onchange(event){
    /* event es el evento cliclk de seleccion */
    /* target es el tipo de archivo seleciconado
    files[0] solo permite el cargue de un archivo */
    let archivo= event.target.files[0];
    /* readAsText se utiliza para leer el contenido de los archivos */
    infoArchivo.readAsText(archivo);
    /* permite ejecutar la funcion onLoad despues de cargar el archivo */
    infoArchivo.onload = onLoad;

}
/* lectura del contenido del archivo */

function onLoad(){
    let contenidoTxt= infoArchivo.result;
    let lecturaLineaPorLinea = contenidoTxt.split('\n');
    let contenido= '';
    contenido += lecturaLineaPorLinea;
    document.getElementById("ver").innerHTML = contenido;
}






/* estas son las clases y las formulas para modificar la lista */
class NodeClass {

    constructor(valor) {
        this.valor = valor;
        this.next = null;
    }
}


class listasSimples {
    constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        /* Métodos de la lista: añadir, eliminar, buscar, actualizar valor */
    añadirNodoF(valor) {
        /* Instancia de la clase NodeClass */
        let newNode = new NodeClass(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    añadirNodoI(valor) {
        let newNode = new NodeClass(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    eliminarNodoF() {
        if (!this.head) return undefined;
        let nodoVisitado = this.head;
        let nuevaColaLista = nodoVisitado;
        while (nodoVisitado.next) {
            nuevaColaLista = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        this.tail = nuevaColaLista;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return nodoVisitado;
    }
    eliminarNodoI() {
        if (!this.head) return undefined;
        let cabezaactual = this.head;
        this.head = cabezaactual.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return cabezaactual;
    }

    getPosicionPuntero(index) {
        if (index < 0 || index >= this.length){
            return null;
        }
        let contadorPuntero = 0;
        let nodoVisitado = this.head;
        while (contadorPuntero !== index) {
            nodoVisitado = nodoVisitado.next;
            contadorPuntero++;
        }
        return nodoVisitado;
    }

    modificarValorNodo(index, valor) {
        /* let encontrarNodo = this.getPosicionPuntero(index);
        if (encontrarNodo) {
            encontrarNodo.valor = valor;
            return true;
        }
        return false; */
        lista.removerNodoPorPosicion(index);
        lista.insertarNodoPorPosicion(valor,index);
    }

    removerNodoPorPosicion(index) {
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado = null;
        if (index < 0 || index >= this.length) return null;
        if (index === 0) this.head = nodoVisitado.next;
        else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitado;
                nodoVisitado = nodoVisitado.next;
            };
            nodoAnteriorAlVisitado.next = nodoVisitado.next;
        };
        this.length--;
        return nodoVisitado.valor;
    }

    insertarNodoPorPosicion(valor, index) {
        let newNode = new NodeClass(valor);
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado;
        if (index < 0 || index >= this.length) return null;
        if (index === 0) this.añadirNodoI(valor);
        else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitado;
                nodoVisitado = nodoVisitado.next;
            }
            newNode.next = nodoVisitado;
            nodoAnteriorAlVisitado.next = newNode;
        }
        this.length++;
    }
    removerNodoPorValor(valor) {
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado = null;
        while (nodoVisitado !== null) {
            if (nodoVisitado.valor === valor) {
                if (!nodoAnteriorAlVisitado)
                    this.head = nodoVisitado.next;
                else
                    nodoAnteriorAlVisitado.next = nodoVisitado.next;
                this.length--;
                return nodoVisitado.valor;
            }
            nodoAnteriorAlVisitado = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        return null;
    }

    imprimirArrayList() {
        let arregloNodos = [];
        let nodoVisitado = this.head;
        while (nodoVisitado) {
            arregloNodos.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
        }
        document.getElementById("listaFinal").innerHTML = arregloNodos;
    }


    /* alguno de los dos ha de funcionar para invertir una lista  */
    reverseList (){
        let prev =null;
        let siguiente=null;
        let actual=this.head;
        while(actual !== null){
            siguiente=actual.next;
            actual.next=prev;
            prev=actual;
            actual=siguiente;
            this.head=prev;
        }
    }

/* implmentar funcion para llmar metodos segun seleccion del user en la lista desplegable */

}


let lista=new listasSimples();


function juntarElementosLista(){
      let listaCompleta=listaDefault ;      
      let nodosIngresados = document.getElementById("nodos").value;
      let noin=new Array;
      let def=new Array;
      noin=nodosIngresados.split(",");
      def=listaCompleta.split(",");
      let conjunto= new Array;
      conjunto=def.concat(noin);

    let nombreimg= new Array;
    let nom=document.getElementById("nombreImagenes").value;
    /* let nom=document.getElementById("list").innerHTML; */
    nombreimg=nom.split(",");
    let im= new Array;
    im=conjunto.concat(nombreimg);

    let text= new Array;
    text=document.getElementById("ver").innerHTML;
    let listaFinal=new Array;

    listaFinal=im.concat(text);
    document.getElementById("lista").innerHTML=listaFinal;

    let informacion=document.getElementById("lista").value;
    
        let array= new Array;
    
        array=informacion.split(",");
        console.log(array);
    
        for(let i=0;i<array.length;i++){
            lista.añadirNodoF(array[i]);
        } 

}

function showSelected(){
    document.getElementById("inicioLista").disabled=false;
        document.getElementById("finalLista").disabled=false;
        document.getElementById("valorN").disabled=false;
        document.getElementById("posicionN").disabled=false;
    let valor= document.getElementById("functionSelected").value;

        if(valor==="1"){
            document.getElementById("posicionN").disabled=true;

        }else if(valor==="2"){

            document.getElementById("valorN").disabled=true;
            document.getElementById("posicionN").disabled=true;
            

        }else if(valor==="3"){

            document.getElementById("inicioLista").disabled=true;
            document.getElementById("finalLista").disabled=true;
            document.getElementById("valorN").disabled=true;
            

        }else if(valor==="4"){

            document.getElementById("inicioLista").disabled=true;
            document.getElementById("finalLista").disabled=true;
            document.getElementById("valorN").disabled=true;
            

        }else if(valor==="5"){

            document.getElementById("inicioLista").disabled=true;
            document.getElementById("finalLista").disabled=true;
            document.getElementById("valorN").disabled=false;
           

        }else if(valor==="6"){
            document.getElementById("inicioLista").disabled=true;
            document.getElementById("finalLista").disabled=true;
            document.getElementById("valorN").disabled=false;

        }
        
}


function organizarListaFinal(){

    
    let valor= document.getElementById("functionSelected").value;

        if(valor==="1"){
                let valorNodo= document.getElementById("valorN").value;
                if(document.getElementById("inicioLista").checked){
                    document.getElementById("finalLista").checked=false;
                    lista.añadirNodoI (valorNodo);
                }else if (document.getElementById("finalLista").checked){
                    document.getElementById("inicioLista").checked=false;
                    lista.añadirNodoF(valorNodo);
                }
        }else if(valor==="2"){            
            if(document.getElementById("inicioLista").checked){
                document.getElementById("finalLista").checked=false;
                lista.eliminarNodoI();
            }else if (document.getElementById("finalLista").checked){
                document.getElementById("inicioLista").checked=false;
                lista.eliminarNodoF();
            }
        }else if(valor==="3"){
            let pos= document.getElementById("posicionN").value;
            if(pos!==null){
                let posicion=lista.getPosicionPuntero(pos);
                document.getElementById("listaFinal").innerHTML= "El valor de la posicion es "+ posicion;
            }else{
                alert("Ingrese los valores requeridos");
            }
        }else if(valor==="4"){
            let pos=document.getElementById("posicionN").value;
            if(pos!==null){
                lista.removerNodoPorPosicion(pos);
            }else{
                alert("Ingrese los valores requeridos");
            }
        }else if(valor==="5"){
            let pos= document.getElementById("posicionN").value;
            let val=document.getElementById("valorN").value;
            if(pos!==null && val!==null){
                lista.modificarValorNodo(pos,val);
            }else{
                alert("Ingrese los valores requeridos");
            }
        }else if(valor==="6"){
            let pos= document.getElementById("posicionN").value;
            let val=document.getElementById("valorN").value;
            if(pos!==null && val!==null){
                lista.insertarNodoPorPosicion(val ,pos);
            }else{
                alert("Ingrese los valores requeridos");
            }
        }else if(valor==="7"){
            lista.reverseList();
            
        }else{
            alert("por favor seleccione una opcion");
        }

        console.log(lista.length);
        console.log(lista);
        
        if(valor!=="3"){
            lista.imprimirArrayList();
        }

}


let instClass = new listasSimples();
instClass.añadirNodoF(5);
instClass.añadirNodoI(4);
instClass.añadirNodoI(3);
instClass.añadirNodoI(2);
instClass.añadirNodoI(1);
instClass.añadirNodoI(7);
instClass.añadirNodoI(8);
instClass.añadirNodoI(9);


console.log(instClass);
/* instClass.eliminarNodoI();
instClass.eliminarNodoF(); 
instClass.modificarValorNodo(1, "Dos");*/
instClass.removerNodoPorPosicion(1); /* Elimina nodo con valor 3 */
console.log(instClass);

instClass.insertarNodoPorPosicion("Nuevo nodo", 0);
instClass.removerNodoPorValor(3);




instClass.reverseList();
console.log("esta es la operacion de inversa"+instClass);
console.log(instClass);





instClass.imprimirArrayList();







