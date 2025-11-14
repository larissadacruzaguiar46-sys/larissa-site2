// Simulação de dados de avaliação iniciais
let somaAvaliacoes = 450;
let totalVotos = 100;

/**
 * Função 1: Mostra uma dica específica na tela.
 * @param {string} tipoDica - O identificador da dica a ser mostrada.
 */
function mostrarDica(tipoDica) {
    const elementoDica = document.getElementById('dica_do_dia');
    let textoDica = "";

    if (tipoDica === 'fermento') {
        textoDica = "Dica de Chef: Peneire o fermento com a farinha. Isso garante que ele se distribua uniformemente e seu bolo cresça por igual!";
    } else {
        textoDica = "Nenhuma dica específica encontrada. Tente mais tarde.";
    }

    elementoDica.textContent = textoDica;
    console.log(`Dica exibida: ${textoDica}`);
}

/*** Função 2: Processa a avaliação do usuário e recalcula a média.*/
function enviarAvaliacao() {
    const nota = parseInt(document.getElementById('nota_receita').value);
    
    if (isNaN(nota) || nota < 1 || nota > 5) {
        alert("Por favor, insira uma nota válida entre 1 e 5.");
        return;
    }

    somaAvaliacoes += nota;
    totalVotos++;

    const novaMedia = somaAvaliacoes / totalVotos;

    document.getElementById('media_avaliacao').textContent = 
        `Média Atual: ${novaMedia.toFixed(1)} (Baseado em ${totalVotos} votos)`;

    alert(`Obrigado pelo seu voto! Você deu nota ${nota}.`);
    console.log(`Nova média: ${novaMedia.toFixed(1)}`);
}

