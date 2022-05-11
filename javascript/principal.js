let nombre = document.getElementById("nombre")
let direccion = document.getElementById("direccion")
let telefono =  document.getElementById("telefono")
let correo =  document.getElementById("email")
let ciudad =  document.getElementById("ciudad")
let edad =  document.getElementById("edad")
let botonValidar =  document.getElementById("btn-enviar")



botonValidar.addEventListener("click",()=>{
    
    if (nombre.value === "") {
        alert("Por favor, escribe tu nombre.");
        nombre.focus();
        return false;
    }    
    if (direccion.value === "") {
        alert("Por favor, escribe tu direccion.");
        direccion.focus();
        return false;
    }    
    if(telefono.value===""){
        alert("Por favor, escribe tu teléfonoo.");
        telefono.focus();
        return false;   
    }
    if(correo.value===""){
        alert("Por favor, escribe tu correo.");
        correo.focus();
        return false;   
    }
    if(ciudad.value===""){
        alert("Por favor, escribe tu ciudad.");
        ciudad.focus();
        return false;   
    }
    if(edad.value===""){
        alert("Por favor, escribe tu edad.");
        edad.focus();
        return false;   
    }else 
    {
        alert("Registro exitoso");
        nombre.value="";
        direccion.value="";
        telefono.value="";
        correo.value="";
        ciudad.value="";
        edad.value="";
    }

})


