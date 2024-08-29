//Valores 
let numeros3 = [5, 12, 8, 130, 44];

// Filtro
let vfiltro = 10;


//Forma para filtrar numeros mayores
let nfiltrados = numeros3.filter(function (numero) {
  return numero > vfiltro;
});


// Mostrar los elementos filtrados en la consola
console.log('Números mayores que ' + vfiltro + ': ' + nfiltrados);
