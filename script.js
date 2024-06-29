const btn = document.getElementById('btn');
const tbl = document.getElementById('tabela');

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    tbl.style.display = 'block';
});

let jogador = 'X';


function verificarVencedor(){
    const bloco = document.querySelectorAll('.bloco');
    const combinações = [
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [2,4,6],
                        [0,4,8]
                        ]
    for(const combinação of combinações){
        const [a, b, c] = combinação;
        if(bloco[a].innerHTML != '' && bloco[a].innerHTML === bloco[b].innerHTML && bloco[a].innerHTML === bloco[c].innerHTML){
            setTimeout(()=>{
                alert(`O jogador ' ${bloco[a].innerHTML} ' venceu o jogo!`);
                reiniciarJogo();
            },100);
        }
    }

    if([...bloco].every(b => b.innerHTML !== '')){
        setTimeout(()=>{
            alert('Empate!');
            reiniciarJogo();
        },100);
    }


    
}

function jogar(célula){
    if(célula.innerHTML === ''){
        célula.innerHTML = jogador;
        if(jogador === 'X'){
            jogador = 'O';
        }
        else{
            jogador = 'X';
        }
        verificarVencedor()
    }
}



function reiniciarJogo(){
    const bloco = document.querySelectorAll('.bloco')
    btn.style.display = 'block';
    tbl.style.display = 'none';
    jogador = 'X';
    bloco.forEach(bloco => bloco.innerHTML = '');

}