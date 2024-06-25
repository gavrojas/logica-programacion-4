// *Declarar variable n
let n = Number(prompt("Escribe la cantidad de números que quieres calcular de la serie fibonacci: "));
let num1=0, num2=1, num3;
let array =[num1, num2];
//* Validar que sea un número
while (!isFinite(n)){n = Number(prompt("Ingrese un número válido"))}

//* Calcular factorial
fibonacci = n => {
  for (i=2; i<n; i++){
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    array.push(num3);
  }
}

fibonacci(n);

//* Imprimir por consola el resultado, con algunos detallitos de color.
console.log(`%cResultado fibonacci de ${n} números es:`, `color: #c87ee8; font-size: 16px; font-weight: bold`);
console.log(`%c-->${array.join(", ")}`, `color: #2092b6; font-size: 14px; font-weight: bold; font-style: italic`); 
