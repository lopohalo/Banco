function pad_numerico(dato) {
    let input_pad = document.querySelector("#casilla_pad")
    if (dato == "ok") {
        Swal.fire({
            title: '<strong>Cuotas en la cual usted desea cotizar</u></strong>',
            icon: 'info',
            html:
                '<b>Recuerde que manejamos el 2% de tasa de interes a prestamos a cualquier plazo</b>' +
                `
                    <br>
                    <br>
            <button class="btn btn-dark botonesjs" onclick="calcular_venta_diblo(6)" id="1">6</button>
            <button class="btn btn-dark botonesjs" onclick="calcular_venta_diblo(12)" id="2">12</button>
            <button class="btn btn-dark botonesjs" onclick="calcular_venta_diblo(18)" id="3">18</button>
            <button class="btn btn-dark botonesjs" onclick="calcular_venta_diblo(24)" id="4">24</button>
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Genial!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i> Cancelar',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    } else if (dato == "borrar") {
        input_pad.value = input_pad.value.slice(0, -1)
    } else {
        input_pad.value += dato
    }
}


function calcular_venta_diblo(cuotas) {
    let valor_prestamo = document.querySelector("#casilla_pad").value
    valor_prestamo = parseInt(valor_prestamo)
    cuotas = parseInt(cuotas)
    if (cuotas == 6 && valor_prestamo > 499999) {
        var resultado1 = (valor_prestamo * 0.2)
        var resultado3 = (resultado1 + valor_prestamo)
        var resultado2 = (resultado1 + valor_prestamo) / 6
        resultado2 = Math.round(resultado2)
        resultado2 = new Intl.NumberFormat().format(resultado2)
        resultado3 = new Intl.NumberFormat().format(resultado3)
        Swal.fire({
            title: '<strong>ATENTO <u><br>Su credito se aprobaria con las siguientes espeficaciones</u></strong>',
            icon: 'info',
            html:
                `tu credito de un valor de  <b>${valor_prestamo = new Intl.NumberFormat().format(valor_prestamo)}</b> se podria aprovar, ` +
                `<br><br>con intereses del 2% usted pagaria al mes durante ${cuotas} meses de <b>${resultado2}</b>. ` +
                `<br><br>Con un total de  <b>${resultado3}</b> al finalizar. `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Genial!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i> Cancelar!',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    } else if (cuotas == 12 && valor_prestamo > 499999) {
        var resultado1 = (valor_prestamo * 0.2)
        var resultado3 = (resultado1 + valor_prestamo)
        var resultado2 = (resultado1 + valor_prestamo) / 6
        resultado2 = Math.round(resultado2)
        resultado2 = new Intl.NumberFormat().format(resultado2)
        resultado3 = new Intl.NumberFormat().format(resultado3)
        Swal.fire({
            title: '<strong>ATENTO <u><br>Su credito se aprobaria con las siguientes espeficaciones</u></strong>',
            icon: 'info',
            html:
                `tu credito de un valor de  <b>${valor_prestamo = new Intl.NumberFormat().format(valor_prestamo)}</b> se podria aprovar, ` +
                `<br><br>con intereses del 2% usted pagaria al mes durante ${cuotas} meses de <b>${resultado2}</b>. ` +
                `<br><br>Con un total de  <b>${resultado3}</b> al finalizar. `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Genial!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i> Cancelar!',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    } else if (cuotas == 18 && valor_prestamo > 499999) {
        var resultado1 = (valor_prestamo * 0.2)
        var resultado3 = (resultado1 + valor_prestamo)
        var resultado2 = (resultado1 + valor_prestamo) / 6
        resultado2 = Math.round(resultado2)
        resultado2 = new Intl.NumberFormat().format(resultado2)
        resultado3 = new Intl.NumberFormat().format(resultado3)
        Swal.fire({
            title: '<strong>ATENTO <u><br>Su credito se aprobaria con las siguientes espeficaciones</u></strong>',
            icon: 'info',
            html:
                `tu credito de un valor de  <b>${valor_prestamo = new Intl.NumberFormat().format(valor_prestamo)}</b> se podria aprovar, ` +
                `<br><br>con intereses del 2% usted pagaria al mes durante ${cuotas} meses de <b>${resultado2}</b>. ` +
                `<br><br>Con un total de  <b>${resultado3}</b> al finalizar. `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Genial!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i> Cancelar!',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    } else if (cuotas == 24 && valor_prestamo > 499999) {
        var resultado1 = (valor_prestamo * 0.2)
        var resultado3 = (resultado1 + valor_prestamo)
        var resultado2 = (resultado1 + valor_prestamo) / 6
        resultado2 = Math.round(resultado2)
        resultado2 = new Intl.NumberFormat().format(resultado2)
        resultado3 = new Intl.NumberFormat().format(resultado3)
        Swal.fire({
            title: '<strong>ATENTO <u><br>Su credito se aprobaria con las siguientes espeficaciones</u></strong>',
            icon: 'info',
            html:
                `tu credito de un valor de  <b>${valor_prestamo = new Intl.NumberFormat().format(valor_prestamo)}</b> se podria aprovar, ` +
                `<br><br>con intereses del 2% usted pagaria al mes durante ${cuotas} meses de <b>${resultado2}</b>. ` +
                `<br><br>Con un total de  <b>${resultado3}</b> al finalizar. `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Genial!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i> Cancelar!',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'El valor del credito debe ser mayor a 500.000!',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

