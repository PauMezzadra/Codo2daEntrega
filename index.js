function resumen(){
    var valorEntrada = 200;
    var totalAPagar;
    var cantidad = document.getElementById('cantidad').value;
    var descuento = document.getElementById('categoria').value;
    if(descuento == 80){
        totalAPagar = (cantidad * valorEntrada) * 0.2;
    }
    else if(descuento == 50){
        totalAPagar = (cantidad * valorEntrada) * 0.5;
    }
    else if(descuento == 15){
        totalAPagar = (cantidad * valorEntrada) * 0.85;
    }
    console.log(totalAPagar);
    document.getElementById('totalCompra').innerHTML = "Total a Pagar: $ " + totalAPagar;
}





