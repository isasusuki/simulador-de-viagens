// 1. Banco de dados simulado (Objetos JavaScript)
const destinos = {
    "paris": { passagem: 4500, alimentacaoDiaria: 150 },
    "nova-york": { passagem: 3800, alimentacaoDiaria: 180 },
    "buenos-aires": { passagem: 1500, alimentacaoDiaria: 80 }
};

const hospedagens = {
    "economico": 80,
    "padrao": 250,
    "luxo": 600
};

// 2. Função principal do Back-end que calcula a simulação
function calcularOrcamentoViagem(dadosViagem) {
    const { destino, dias, viajantes, tipoHospedagem } = dadosViagem;

    // Busca os dados nos objetos
    const dadosDestino = destinos[destino.toLowerCase()];
    const custoHospedagemDiaria = hospedagens[tipoHospedagem.toLowerCase()];

    // Validação simples de segurança de dados
    if (!dadosDestino || !custoHospedagemDiaria) {
        return { erro: "Destino ou tipo de hospedagem inválido." };
    }

    // Regras de negócio (Cálculos)
    const custoPassagens = dadosDestino.passagem * viajantes;
    const custoHospedagemTotal = custoHospedagemDiaria * dias * viajantes;
    const custoAlimentacaoTotal = dadosDestino.alimentacaoDiaria * dias * viajantes;
    const valorTotal = custoPassagens + custoHospedagemTotal + custoAlimentacaoTotal;

    // Retorna um novo objeto com os resultados processados
    return {
        destino: destino,
        viajantes: viajantes,
        duracaoDias: dias,
        detalhes: {
            passagens: `R$ ${custoPassagens.toFixed(2)}`,
            hospedagem: `R$ ${custoHospedagemTotal.toFixed(2)}`,
            alimentacao: `R$ ${custoAlimentacaoTotal.toFixed(2)}`
        },
        totalGeral: `R$ ${valorTotal.toFixed(2)}`
    };
}

// 3. ENTRADA DE DADOS: Simulação de uma requisição enviada ao servidor
const novaRequisicao = {
    destino: "paris",
    dias: 10,
    viajantes: 2,
    tipoHospedagem: "padrao"
};

// 4. PROCESSAMENTO E SAÍDA DE DADOS
const resultado = calcularOrcamentoViagem(novaRequisicao);
console.log("=== RESULTADO DA SIMULAÇÃO BACK-END ===");
console.log(resultado);
