//Elementos//
const encriptarbtn = document.querySelector(".encriptar-btn");
const encriptartxt = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-alerta");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".contenedor-tarjeta");
const copiarbtn = document.querySelector(".copiar-btn");
const desencriptarbtn = document.querySelector(".desencriptar-btn");

//Encriptar-btn//
encriptarbtn.addEventListener("click", e=>{
    e.preventDefault();
    let texto = encriptartxt.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#CDA434";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío."
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto!==txt){
        aviso.style.background = "#CDA434";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales."
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto!==texto.toLowerCase()){
        aviso.style.background = "#CDA434";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúsculas."
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        copiarbtn.style.visibility = "inherit";
        contenido.remove();
    }
});

//Desencriptar-btn//
desencriptarbtn.addEventListener("click", e=>{
    e.preventDefault();
    let texto = encriptartxt.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#CDA434";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío."
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto!==txt){
        aviso.style.background = "#CDA434";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales."
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto!==texto.toLowerCase()){
        aviso.style.background = "#CDA434";
        aviso.style.color = "#0a3871";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúsculas."
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e"); // Reemplazar "enter" por "e" primero
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ufat/mg, "u");
        texto = texto.replace(/ai/mg, "a"); // Reemplazar "ai" por "a" al final

        respuesta.innerHTML = texto;
        copiarbtn.style.visibility = "inherit";
        contenido.remove();
    }
});

//Copiar-btn//
copiarbtn.addEventListener("click", e => {
    e.preventDefault();
    respuesta.select();
    navigator.clipboard.writeText(respuesta.value).then(() => {
        console.log("Texto copiado al portapapeles");
    }, () => {
        console.log("Error al copiar texto al portapapeles");
    });
    encriptartxt.value = "";
});