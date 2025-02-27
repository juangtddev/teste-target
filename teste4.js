// Dados de faturamento por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentualRepresentacao(dados) {
    // Calcula o valor total mensal
    const totalMensal = Object.values(dados).reduce((soma, valor) => soma + valor, 0);

    // Calcula o percentual de representação de cada estado
    const percentuais = {};
    for (const estado in dados) {
        percentuais[estado] = (dados[estado] / totalMensal) * 100;
    }

    // Exibe os resultados
    for (const estado in percentuais) {
        console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
    }
}

// Executa o cálculo
calcularPercentualRepresentacao(faturamentoPorEstado);