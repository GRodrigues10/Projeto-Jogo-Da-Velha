const btn = document.getElementById('btn');
const tbl = document.getElementById('tabela');

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    tbl.style.display = 'block';
});

let jogador = 'X';

function verificarVencedor() {
    const blocos = document.querySelectorAll('.bloco');
    const combinacoes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combinacao of combinacoes) {
        const [a, b, c] = combinacao;
        if (blocos[a].innerHTML && 
            blocos[a].innerHTML === blocos[b].innerHTML && 
            blocos[a].innerHTML === blocos[c].innerHTML) {
            setTimeout(() => {
                alert(`Jogador ${blocos[a].innerHTML} venceu!`);
                reiniciarJogo();
            }, 100);
            return;
        }
    }

    if ([...blocos].every(bloco => bloco.innerHTML !== '')) {
        setTimeout(() => {
            alert('Empate!');
            reiniciarJogo();
        }, 100);
    }
}

function jogar(celula) {
    if (celula.innerHTML === '') {
        celula.innerHTML = jogador;
        verificarVencedor();
        jogador = jogador === 'X' ? 'O' : 'X';
    }
}

function reiniciarJogo() {
    const blocos = document.querySelectorAll('.bloco');
    blocos.forEach(bloco => bloco.innerHTML = '');
    jogador = 'X';
    btn.style.display = 'block';
    tbl.style.display = 'none';
}