function encriptar(){

     // utilizo esta variable para obtener lo que se digite en el campo text area
    let texto = document.getElementById("texto").value;
     // utilizo esta variable para obtener el titulo a lo cual voy a reemplazar segun se cumpla la condicion
    let tituloMensaje = document.getElementById("titulo");
     // utilizo esta variable para mostrar mensaje de encriptar o desencriptar
    let parrafo = document.getElementById("mensajeEncriptacion");
     // utilizo esta variable para obtener la imagen que voy a reemplazar segun se cumpla la condicion
    let imagen = document.getElementById("imagen");

    let textoCifrado = texto
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat"); 

    if (texto.length != 0) {

        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./imagenes/goku.png";

    }else{
        imagen.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("debe ingresar algun texto");
    }
}

function desencriptar(){

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo");
    let parrafo = document.getElementById("mensajeEncriptacion");
    let imagen = document.getElementById("imagen");

    let textoCifrado = texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u"); 

    if (texto.length != 0) {

        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto desencriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./imagenes/vegueta.png";

    }else{
        imagen.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("debe ingresar algun texto");
    }
}