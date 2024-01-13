const numero1 = window.document.getElementById("numero1")
const numero2 = window.document.getElementById("numero2")
const numero3 = window.document.getElementById("numero3")
const resultado = window.document.getElementById("resultado")
const botao = window.document.getElementById("botao")

botao.addEventListener("click", (evt) => {
    // converte em float, trocando vírgula por ponto antes
    const int1 = Number.parseInt( numero1.value);
    const int2 = Number.parseInt( numero2.value);
    const int3 = Number.parseInt( numero3.value);

    // dados enviados para a API (a, b, c)
    const dados = {
        valor1: int1,
        valor2: int2,
        valor3: int3
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
