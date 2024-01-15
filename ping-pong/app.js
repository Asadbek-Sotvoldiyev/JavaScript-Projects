const gameLavel = document.getElementById('gameLavel');
const btnPlayer1 = document.getElementById('btnPlayer1');
const btnPlayer2 = document.getElementById('btnPlayer2');
const reset  = document.getElementById('reset');
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2');


const player1Func = () => {
    let numb = Number(player1.textContent);
    numb = numb +1;
    player1.textContent = numb;
}

const player2Func = () => {
    let numb = Number(player2.textContent);
    numb = numb +1;
    player2.textContent = numb;
}

const gameLavelFunc = gameLavel.addEventListener('change', () => {
    player1.classList.remove(player1.classList.value);
    player2.classList.remove(player2.classList.value);
    player1.textContent = 0;
    player2.textContent = 0;
})

const btnPlayer1Func = btnPlayer1.addEventListener('click', () => {
    if(gameLavel.value === player1.textContent){
        player1.classList.add('winner');
        player2.classList.add('loser');
        return ;
    }else if(gameLavel.value === player2.textContent){
        return;
    }else{
        player1Func();
    }
    
})

const btnPlayer2Func = btnPlayer2.addEventListener('click', () => {
    if(gameLavel.value === player2.textContent ){
        player2.classList.add('winner');
        player1.classList.add('loser');
        return ;
    }else if(gameLavel.value === player1.textContent){
        return;
    }else{
        player2Func();
    }   
})

const resetFunc = reset.addEventListener('click', () => {
    player1.classList.remove(player1.classList.value);
    player2.classList.remove(player2.classList.value);
    player1.textContent = 0;
    player2.textContent = 0;
})