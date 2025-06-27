import {areaDoCirculo, areaDoQuadrado, media} from "./calculadora2.js"


console.log("A Área do Circulo (Raio 5)",areaDoCirculo(5))
console.log("Área do Quadrado (de Lado 10)",areaDoQuadrado(10))
try {
console.log("A Média dos Numeros eh: ",media(7.5,7.8,7.9))    
} catch (e) {
    console.log(e.message)  
}

