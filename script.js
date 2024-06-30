const btn = document.getElementById('btn');
const tbl = document.getElementById('tabela');

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    tbl.style.display = 'block';
});

let jogador = 'X';

function verificarVencedor() {
    const bloco = document.querySelectorAll('.bloco');
    const combinacoes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ];

    let vencedorEncontrado = false;

    // Verifica se há um vencedor
    for (const combinacao of combinacoes) {
        const [a, b, c] = combinacao;
        if (bloco[a].innerHTML !== '' && bloco[a].innerHTML === bloco[b].innerHTML && bloco[a].innerHTML === bloco[c].innerHTML) {
            setTimeout(() => {
                alert(`O jogador '${bloco[a].innerHTML}' venceu o jogo!`);
                reiniciarJogo();
            }, 100);
            vencedorEncontrado = true;
            break; // Sai do loop assim que encontrar um vencedor
        }
    }

    // Se não houver vencedor e todos os blocos estiverem preenchidos, é empate
    if (!vencedorEncontrado && [...bloco].every(b => b.innerHTML !== '')) {
        setTimeout(() => {
            alert('Empate!');
            reiniciarJogo();
        }, 100);
    }
}

function jogar(celula) {
    if (celula.innerHTML === '') {
        celula.innerHTML = jogador;
        jogador = jogador === 'X' ? 'O' : 'X'; // Alternância entre 'X' e 'O'
        verificarVencedor();
    }
}
 
function reiniciarJogo() {
    const bloco = document.querySelectorAll('.bloco');
    btn.style.display = 'block';
    tbl.style.display = 'none';
    jogador = 'X';
    bloco.forEach(bloco => bloco.innerHTML = '');
}