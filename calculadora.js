function pad_numerico(dato) {
    let input_pad = document.querySelector("#casilla_pad")


    if (dato == "ok") {
        Swal.fire({
            title: '<strong>Datos del credito</u></strong>',
            icon: 'info',
            html:
                `
        <button class="btn btn-dark" onclick="calcular_venta_diblo(6)" id="1">6</button>
        <button class="btn btn-dark" id="2">12</button>
        <button class="btn btn-dark" id="3">18</button>
        <button class="btn btn-dark" id="4">24</button>
        `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    } else {
        input_pad.value += dato
    }

}

function calcular_venta_diblo(cuotas) {
    let valor_prestamo = document.querySelector("#casilla_pad").value
    valor_prestamo = parseInt(valor_prestamo)
    cuotas = parseInt(cuotas)
    switch (cuotas) {
        case 6:
            console.log(valor_prestamo / cuotas)
            break;
    }
}