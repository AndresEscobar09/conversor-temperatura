
// Obtener elementos input del DOM
const temperatura = document.getElementById('ingresar-temperatura');
//obtenemos el botón
const botonConvertir = document.querySelector('button');
//obtenemos el elemento donde se mostrará el resultado
const resultado = document.getElementById('resultado');

// Agregar evento click al botón
botonConvertir.addEventListener('click', function() {
    // Obtener el valor ingresado por el usuario
    const celsius = parseFloat(temperatura.value);
    //console.log(`temperatura ${celsius}`);
    // Validar que el valor ingresado sea un número
    if (isNaN(celsius)) {
        resultado.textContent = 'Por favor, ingresa un número válido.';
        return;
    }
    
    // Realizar la conversión a Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    //console.log(fahrenheit,kelvin);
    resultado.innerText = `La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)} ºF\nLa temperatura en Kelvin es: ${kelvin.toFixed(2)} K`;  
});

