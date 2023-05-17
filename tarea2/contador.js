function contadorCaracteres() {
    
    let valor = document.getElementById('contador');
    let cantidad = valor.value.length;

    document.getElementById('respuesta').innerHTML = cantidad;

}