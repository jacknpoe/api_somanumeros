//***********************************************************************************************
// AUTOR: Ricardo Erick Rebêlo
// Objetivo: consome a API de retorno de JSON com o resultado da soma de três números
// Alterações:
// 0.1   13/01/2024 - primeira implementação

const numero1 = window.document.getElementById("numero1")
const numero2 = window.document.getElementById("numero2")
const numero3 = window.document.getElementById("numero3")
const resultado = window.document.getElementById("resultado")
const botao = window.document.getElementById("botao")

botao.addEventListener("click", (evt) => {
    // converte em float, trocando vírgula por ponto antes
    var float1 = Number.parseFloat( numero1.value.replace(",", "."));
    var float2 = Number.parseFloat( numero2.value.replace(",", "."));
    var float3 = Number.parseFloat( numero3.value.replace(",", "."));

    // avalia se a, b e c são realmente números, para não travar o script
    if( isNaN(float1)) {
        alert("O valor de a não é um número!");
        tn1.focus();
        return;
    }

    if( isNaN(float2)) {
        alert("O valor de b não é um número!");
        tn2.focus();
        return;
    }

    if( isNaN(float3)) {
        alert("O valor de c não é um número!");
        tn3.focus();
        return;
    }

    // dados enviados para a API (a, b, c)
    const dados = {
        valor1: float1,
        valor2: float2,
        valor3: float3
    }

    // cabeçalho indica que é post e os dados no corpo
    const cabecalho = {
        method: "post",
        body: JSON.stringify(dados)
    }

    // chama a API
    fetch("api_somanumeros.php", cabecalho)
    .then(res => res.json())
    .then(res => {
        resultado.innerHTML = `Resultado: ${res}`;
    })
})
