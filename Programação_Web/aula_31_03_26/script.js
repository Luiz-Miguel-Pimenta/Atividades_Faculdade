const form = document.querySelector("form");
const selectCombustivel = document.getElementById("selectCombustivel");
const inputQuantidade = document.getElementById("inputQuantidade");
const resultado = document.getElementById("resultado");


// Preço dos combustíveis.
const precoGasolina = 6.69;
const precoEtanol = 5.89;
const precoDiesel = 6.20;

const formatarMoeda = (valor) => {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function atualizarValor() {

    const valorInput = inputQuantidade.value;
    const valorLitro = Number(valorInput);

    if (valorInput === "") {
        alert("O campo de quantidade não pode estar vazio!");
        return;
    }

    if (isNaN(valorLitro) || valorLitro <= 0) {
        alert("Por favor, insira um número válido e maior que zero.");
        inputQuantidade.value = "";
        return;
    }

    if (selectCombustivel.value === "") {
        alert("Por favor, selecione um tipo de combustível.");
        return;
    }

    let calculo = 0;
    switch (selectCombustivel.value) {
        case "G":
            calculo = valorLitro * precoGasolina;
            break;
        case "E":
            calculo = valorLitro * precoEtanol;
            break;
        case "D":
            calculo = valorLitro * precoDiesel;
            break;
        default:
            alert("Escolha uma opção");
            inputQuantidade.value = "";
            return;
    }

    resultado.textContent = formatarMoeda(calculo);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    atualizarValor();
})

form.addEventListener("input", () => {
    atualizarValor();
})