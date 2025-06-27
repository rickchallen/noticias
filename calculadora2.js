const PI = 3.14159;

function areaDoCirculo(raio) {
    return PI * raio * raio;
}

function areaDoQuadrado(lado) {
    return lado * lado;
}

const media = (...array) =>{
     
    let media = 0
    let soma = 0
    let i = 0

    for (const num of array){
        if (typeof num !== "number"){
            throw Error("a função só aceita numeros!")
        }
        soma += num
        i++
    }
    return media = soma /i



}

export { areaDoCirculo, areaDoQuadrado ,media };
