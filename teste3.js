const fs = require('fs'); // Importa o módulo fs para manipular arquivos

// Função para carregar os dados do arquivo JSON
function carregarDadosJson(caminhoArquivo) {
    try {
        const dadosBrutos = fs.readFileSync(caminhoArquivo, 'utf-8'); // Lê o conteúdo do arquivo
        return JSON.parse(dadosBrutos); // Converte o conteúdo para um objeto JavaScript
    } catch (erro) {
        console.error('Erro ao carregar o arquivo JSON:', erro.message);
        return [];
    }
}

function analisarFaturamento(dados) {
    // Filtra os dias com faturamento maior que 0
    const faturamentoValido = dados.filter(item => item.valor > 0).map(item => item.valor);

    // 1. Menor valor de faturamento
    const menorFaturamento = Math.min(...faturamentoValido);

    // 2. Maior valor de faturamento
    const maiorFaturamento = Math.max(...faturamentoValido);

    // 3. Média mensal de faturamento
    const mediaMensal = faturamentoValido.reduce((soma, valor) => soma + valor, 0) / faturamentoValido.length;

    // 4. Número de dias com faturamento acima da média
    const diasAcimaDaMedia = faturamentoValido.filter(valor => valor > mediaMensal).length;

    // Exibe os resultados
    console.log(`Menor faturamento diário: ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento diário: ${maiorFaturamento.toFixed(2)}`);
    console.log(`Média mensal de faturamento: ${mediaMensal.toFixed(2)}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

// Carrega os dados do arquivo 'dados.json' no mesmo diretório
const caminhoArquivo = './dados.json';
const faturamentoDiario = carregarDadosJson(caminhoArquivo);

// Executa a análise se os dados foram carregados corretamente
if (faturamentoDiario.length > 0) {
    analisarFaturamento(faturamentoDiario);
}
