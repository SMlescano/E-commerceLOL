const categoriasValidas = ["LEGENDARIA", "DEFINITIVA", "EPICA", "COMUN", "MITICA"];
const precios = [1820, 3250, 1350, 975, 0];

let carrito = [];

let Bienvenido = alert("Bienvenido a la tienda online de League of legends, tenemos disponibles las siguientes skins con diferentes valores.\n LEGENDARIO: 1820 RP \n DEFINITIVA 3250 RP \n EPICA 1350 RP: \n COMUN 975 RP")
function agregarAlCarrito() {
    while (true) {
        let categoria = prompt("Ingrese la categoría de skin que desea agregar al carrito (LEGENDARIA, DEFINITIVA, EPICA, COMUN o MITICA)").toUpperCase();

        const index = categoriasValidas.indexOf(categoria);

        if (index !== -1) {
            const precioSeleccionado = precios[index];
            carrito.push({ categoria, precio: precioSeleccionado });

            if (!confirm("¿Desea agregar otra skin al carrito?")) {
                break;
            }
        } else {
            alert("Categoría no válida. Por favor, ingrese una categoría válida.");
        }
    }
}

function PromocionEpica() {
    let contadorLegendarias = 0;

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].categoria === "LEGENDARIA") {
            contadorLegendarias++;
        }
    }

    if (contadorLegendarias >= 2) {
        carrito.push({ categoria: "MITICA", precio: 0 });
        alert("POR UNA PROMOCION usted ha recibido una skin mítica de regalo por comprar 2 skins legendarias!!!.");
    } else if (contadorLegendarias >= 2) {
        const descuento = 0.25;
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].categoria === "LEGENDARIA") {
                carrito[i].precio *= (1 - descuento);
            }
        }
        alert("GENIAL! Se le ha aplicado un 25% de descuento a las skins legendarias en su carrito.");
    }
}

function confirmarCompra() {
    PromocionEpica();

    const confirmacion = confirm("Desea confirmar la compra?");
    
    if (confirmacion) {
        alert("Compra realizada con éxito!");

    } else {
        alert("Compra cancelada.");
    }
}

function ResumenCarrito() {
    let valorTotal = 0;

    let mensajeCarrito = "Resumen del carrito:\n";

    for (let i = 0; i < carrito.length; i++) {
        mensajeCarrito += `${carrito[i].categoria}: ${carrito[i].precio} RP\n`;
        valorTotal += carrito[i].precio;
    }

    mensajeCarrito += `\nValor total de la compra: ${valorTotal} RP`;

    console.log(mensajeCarrito);
}
agregarAlCarrito();
ResumenCarrito();
confirmarCompra();
