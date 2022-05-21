/*Sumar Dos Arreglos
• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
54
Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9*/

let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let sumav: number[] = new Array(6);
let indice: number;

for (indice = 0; indice < 6; indice++) {
  v1[indice] = Number(prompt("Ingrese el valor v1 [" + indice + "]"));
  
}  
for (indice = 0; indice < 6; indice++) {
    v2[indice] = Number(prompt("Ingrese el valor v2 [" + indice + "]"));
}

    for (indice= 0; indice <6; indice++){
      sumav[indice]=v1[indice]+v2[indice];

      console.log("suma["+indice+"]="+sumav[indice]);
    }
}

