(function() {
    const PI = 3.14159;

    function areaDoCirculo(raio) {
        return PI * raio * raio;
    }

    function areaDoQuadrado(lado) {
        return lado * lado;
    }

    console.log("Área do círculo (raio 5):", areaDoCirculo(5));
    console.log("Área do quadrado (lado 4):", areaDoQuadrado(4));
})();
