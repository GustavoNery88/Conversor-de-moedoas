function Converter() {
    let valorDoElemento = document.getElementById("valor")
    let valorEmDolar = Number(valorDoElemento.value);
    let valorEmReal = valorEmDolar * 5;
    let valorConvertido = "O resultado em real é R$ " + valorEmReal;
    let resultadoNaTela = document.getElementById("valorConvertido")
    resultadoNaTela.innerHTML = valorConvertido;
}
