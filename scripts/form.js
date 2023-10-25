const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    //Datos
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const source = document.getElementById('source').value; 
    const comment = document.getElementById('comment').value.trim();


    if(!fullname.includes(" ")){
        alert("Ingresa tu nombre y apellido")
        return
    }

    if(!email.includes("@")){
        alert("Ingresa un mail valido")
        return
    }

    if(comment == ""){
        alert("Escribí tu consulta/comentario")
        return
    }

    console.log("Nombre:", fullname);
    console.log("Correo:", email);
    console.log("Número de teléfono:", phoneNumber);
    console.log("Comentario/Consulta", comment);
    console.log("Como nos conoció:", source);

});