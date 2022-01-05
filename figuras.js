
//Código Cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
const perimetroCuadrado= ladoCuadrado*4;
const areaCuadrado = Math.pow(ladoCuadrado, 2);

console.log("El lado del cuadrado es: " + ladoCuadrado);
console.log("El périmetro del cuadrado es: " + perimetroCuadrado);
console.log("El área del cuadrado es: " + areaCuadrado);
console.groupEnd();

//Código Triángulo
console.group("Triángulo")
const ladoTriangulo1 = 2;
const ladoTriangulo2 = 4;
const ladoTriangulo3 = 8;
const alturaTriangulo = 10;
const perimetroTriangulo= ladoTriangulo1+ladoTriangulo2+ladoTriangulo3;
const areaTriangulo = (ladoTriangulo3*alturaTriangulo)/2;

console.log("El périmetro del triángulo es: " + perimetroTriangulo);
console.log("El área del triángulo es: " + areaTriangulo);
console.groupEnd();

//Código Circulo
console.group("Circulo")
const radioCirculo = 8;
const diametroCirculo = radioCirculo*2;
const perimetroCirculo =  diametroCirculo*Math.PI
const areaCirculo = Math.PI*Math.pow(radioCirculo, 2);

console.log("El périmetro del circulo es: " + perimetroCirculo);
console.log("El área del circulo es: " + areaCirculo);
console.groupEnd();
