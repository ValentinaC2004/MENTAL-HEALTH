


function continuar_sesion() {
    var mensaje;
    var opcion = confirm("Seguro que no quieres continuar con el inicio de sesion?");
    if (opcion == True) {
        mensaje = "saliendo";
    } else {
        mensaje = "continuar";
    }
    alert(mensaje);
}

function salir() {
    var mensaje = "Seguro que quieres Cerrar la sesion?";
    alert(mensaje);
    if (mensaje = True) {
        window.location="../pantallas/info.html";
    }else{
        window.location="../pantallas/principalUs.html";
    }
    
}

function ingreso() {
    var ua = "admin";
    var ca = "123456789";
    var us = "user";
    var cs = "123";

    if (document.form.contraseña.value==ca && document.form.usuario.value==ua) {
        alert("Bienvenido!! a iniciado sesion como administrador");
        window.location="../pantallas/PrincipalA.html";
    }else{
        
        if (document.form.contraseña.value==cs && document.form.usuario.value==us) {
            alert("Bienvenido a iniciado sesion en Mental Health");
            window.location="../pantallas/PrincipalUs.html";
        } else{
            alert("Pro favor ingresar usuario y contraseña correctos")
        }
        
    }


    

    
}




