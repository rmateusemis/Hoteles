var hoteles = [];

// AltaHotel()
function altaHotel() {
    let nombre = prompt("Nombre hotel:");
    let encontrado = false;
    let i;
    
    while (nombre == "" || nombre == null) {
        alert("Introduce el nombre del hotel");
        nombre = prompt("Nombre hotel:");
    }
   
    for (i = 0; i < hoteles.length; i++) {
        if (hoteles[i].nombre == nombre) {
            encontrado = true;
        } 
    }
    if (encontrado) {
        alert("El hotel " + nombre + " ya está en la base de datos");
    } else {
        var habitaciones = prompt("Número habitaciones:");
        var plantas = prompt("Número plantas:")
        var superficie = prompt("Superfície:");

        hotel = new Hotel(nombre, habitaciones, plantas, superficie);

        hoteles.push(hotel);
        console.log(hoteles);
        alert("El Hotel " + nombre + " ha sido dado de alta correctamente");
    }
}


// EliminarHotel()
function eliminarHotel() {
    let nombre = prompt("Nombre hotel:");
    let encontrado = false;
    let i;
    
    while (nombre == "" || nombre == null) {
        alert("Introduce el nombre del hotel");
        nombre = prompt("Nombre hotel:");
    }

    for (i = 0; i < hoteles.length; i++) {
        if (nombre == hoteles[i].nombre) {
            hoteles.splice(i, 1);
            encontrado = true;
        }
    }
    if (encontrado) {
        alert("El Hotel " + nombre + " ha sido eliminado");
    } else {
        alert("El Hotel " + nombre + " no está en la base de datos")
    }
    console.log(hoteles);
}


// VerHotel()
function verHotel() {
    let nombre = prompt("Nombre hotel:");
    let encontrado = false;
    let i;
    
    while (nombre == "" || nombre == null) {
        alert("Introduce el nombre del hotel");
        nombre = prompt("Nombre hotel:");
    }

    for (i = 0; i < hoteles.length; i++) {
        if (nombre == hoteles[i].nombre) {
            alert(hoteles[i].toString());
            alert(hoteles[i].calcularMantenimiento());
            encontrado = true
        }
    }
    if (!encontrado) {
        alert("El Hotel " + nombre + " no está en la base de datos");
    }
    console.log(hoteles);
}


// Modificar Hotel
function modificarHotel() {
    let nombre = prompt("Nombre hotel:");
    let encontrado = false;
    let i;
    
    while (nombre == "" || nombre == null) {
        alert("Introduce el nombre del hotel");
        nombre = prompt("Nombre hotel:");
    }

    for (i = 0; i < hoteles.length; i++) {
        if (nombre == hoteles[i].nombre) {
            encontrado = true;
            let valorModificar = prompt("Modificar:\n1-Nº habitaciones\n2-Nº plantas\n3-Superficie");
            switch (valorModificar) {
                case "1":
                    let nuevoHabitaciones = prompt("Introduce el nuevo valor");
                    hoteles[i].habitaciones = nuevoHabitaciones;
                    break;
                case "2":
                    let nuevoPlantas = prompt("Introduce el nuevo valor");
                    hoteles[i].plantas = nuevoPlantas;
                    break;
                case "3":
                    let nuevoSuperficie = prompt("Introduce el nuevo valor");
                    hoteles[i].superficie = nuevoSuperficie;
                    break;

                default:
                    alert("Introduce una opción correcta");
                    break;
            }
        }
    }
        if (encontrado) {
            alert("Modificación realizada");
        } else {
            alert("El Hotel " + nombre + " no está en la base de datos");
        }
        console.log(hoteles);
    }
