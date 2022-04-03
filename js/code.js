
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

function completa_nav(){
    let form_nav_user = document.querySelector("#form_user")
    if (localStorage.getItem("nombre_nav")!=null) {
        form_nav_user.innerHTML = `
        <h1 class="text-white">Hola ${localStorage.getItem("nombre_nav")}</h1>
        <button class="btn btn-danger" onclick="borrarStorage()">Cerrar Sesión</button>
        `
    }else{
        form_nav_user.innerHTML = `
        <button class="btn btn-outline-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar Sesión</button>
        `
    }
}

function borrarStorage() {
    localStorage.clear()
    completa_nav()
}


function cambio_boton() {
    const checkiado = document.querySelector("#exampleCheck1").checked
    var div_alerta = document.querySelector(".alerta_pass")
    if (checkiado == true) {
        div_alerta.innerHTML = `
        <div class="alert alert-warning" role="alert">
            <b>Su contrasena será recordada en proximos inicios de sesión</b> 
        </div>
        `
    } else {
        div_alerta.innerHTML = ``
    }

}



function autenticacion() {
    const data_login_nombre = [
        "Zulma",
        "Juan",
        "Ricardo"
    ]
    const data_login_correo = [
        "zulmarocio@gmail.com",
        "jsebg.ruedat@gmail.com",
        "ricardo021716@gmail.com",
    ]

    const data_login_contrasena = [
        "Bit123",
        "Bit123",
        "Bit123",
        
    ]

    var nombre = document.querySelector("#exampleInputnombre1").value
    var correo = document.querySelector("#exampleInputEmail1").value
    var contrasena = document.querySelector("#exampleInputPassword1").value
    const checkiado = document.querySelector("#exampleCheck2").checked
        nombre = nombre.trim()
        correo = correo.trim()
        contrasena = contrasena.trim()
    let verif_nombre = data_login_nombre.indexOf(nombre)
    let verif_correo = data_login_correo.indexOf(correo)
    let verif_contrasena = data_login_contrasena.indexOf(contrasena)
    
    if(nombre != "" && correo != "" && contrasena != ""){
        if(checkiado == true){
        if (verif_nombre != -1 && verif_correo != -1 && verif_contrasena != -1)   {

            localStorage.setItem("nombre_nav", data_login_nombre[verif_nombre])
            myModal.hide();
    
            completa_nav()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'datos de acceso incorrectos',
                showConfirmButton: false,
                timer: 1500
            })
        }
    } else{
        Swal.fire({
            icon: 'error',
            title: 'No se puede continuar sin aceptar terminos y condiciones',
            showConfirmButton: false,
            timer: 1500
        })
    }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'llene todos los campos',
            showConfirmButton: false,
            timer: 1500
        })
    }

}

completa_nav()
