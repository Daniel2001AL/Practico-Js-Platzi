
function generarDescuento(precioOriginal, descuento) {
    var precioFinal = (precioOriginal * (100-descuento))/100;
    return precioFinal;
}

function calcularDescuento() {
    let resultado = document.getElementById("resultado");
    let precioOriginal = Number(document.getElementById("precioOriginal").value);
    let descuento = Number(document.getElementById("descuento").value);
    let precioDescuento = Number(generarDescuento(precioOriginal, descuento));
    resultado.innerText = precioDescuento;
}