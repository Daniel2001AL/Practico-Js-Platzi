'use strict';

console.group("Estatico");
    //Código Cuadrado
    console.group("Cuadrado");
        const ladoCuadrado = 5;
        const perimetroCuadrado= ladoCuadrado*4;
        const areaCuadrado = Math.pow(ladoCuadrado, 2);

        console.log("El lado del cuadrado es: " + ladoCuadrado);
        console.log("El périmetro del cuadrado es: " + perimetroCuadrado);
        console.log("El área del cuadrado es: " + areaCuadrado);
    console.groupEnd();

    //Código Triángulo
    console.group("Triángulo");
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
    console.group("Circulo");
        const radioCirculo = 8;
        const diametroCirculo = radioCirculo*2;
        const perimetroCirculo =  diametroCirculo*Math.PI;
        const areaCirculo = Math.PI*Math.pow(radioCirculo, 2);

        console.log("El périmetro del circulo es: " + perimetroCirculo);
        console.log("El área del circulo es: " + areaCirculo);
    console.groupEnd();

console.groupEnd();

console.group("Funciones");

    //Código Cuadrado
    console.group("Cuadrado");
        var lado;
        function perimetroCuadradoFunction(lado) {
            return lado*4;
        }
        function areaCuadradoFunction(lado) {
            return Math.pow(lado, 2);
        } 
    console.groupEnd();

     //Código Triángulo
    console.group("Triángulo");
        var lado1;
        var lado2;
        var base;
        var altura;
        function perimetroTrianguloFunction(lado1, lado2, base) {
            return lado1+lado2+base;
        }
        function areaTrianguloFunction(altura, base) {
            return (base*altura)/2;
        }
    console.groupEnd();

    //Código Circulo
    console.group("Circulo");
        var radio;
        function diametroCirculoFunction(radio) {
            return radio*2;
        }
        function perimetroCirculoFunction(radio) {
            const diametro = diametroCirculoFunction(radio);
            return diametro*Math.PI;
        }
        function areaCirculoFunction(radio) {
            return Math.PI*Math.pow(radio, 2);
        }
    console.groupEnd();
console.groupEnd();

//Interaccion con HTML

function calcularPerimetro(option) {

    let perimetro

    switch(option){
        case 'cuadrado':
            let input =  Number(document.getElementById("ladoCuadrado").value);
            perimetro = perimetroCuadradoFunction(input);
            break;
        case 'triangulo':
            let ladoTriangulo1= Number(document.getElementById("ladoTriangulo1").value); 
            let ladoTriangulo2 = Number(document.getElementById("ladoTriangulo2").value);
            let base = Number(document.getElementById("base").value);
            perimetro = perimetroTrianguloFunction(ladoTriangulo1, ladoTriangulo2, base );
            break;
        case 'circulo':
            let radioInput = Number(document.getElementById("radio").value);
            perimetro = perimetroCirculoFunction(radioInput);
            break
        default:
            console.log("error")
    }
    alert(perimetro)
}
function calcularArea(option) {
    
    let area

    switch(option){
        case 'cuadrado':
            let input =  Number(document.getElementById("ladoCuadrado").value);
            area = areaCuadradoFunction(input);
            break;
        case 'triangulo':
            let altura = Number(document.getElementById("altura").value); 
            let base = Number(document.getElementById("base").value);
            area = areaTrianguloFunction(altura, base);
            break;
        case 'circulo':
            let radioInput = Number(document.getElementById("radio").value);
            area = areaCirculoFunction(radioInput);
            break
        default:
            console.log("error")
    }
    alert(area);
}