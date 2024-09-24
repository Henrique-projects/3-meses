const algodao = document.querySelector('.algodao');
const agua = document.querySelector('.agua');
const algodao_morto = document.querySelector('.sumir');
const morreu_audio = document.querySelector('#morreu-audio');
const game_over = document.querySelector('#game-over');
const over_sim = document.querySelector('#over-sim');
const over_nao = document.querySelector('#over-nao');
const start_game = document.querySelector('#play');
const tela_start = document.querySelector('.start');
let morreu_bool = 0;
let sim_bool = 0;
let repeat = 0;

morreu_audio.muted = false;

const jump = () =>{

    algodao.classList.add('jump');

    setTimeout(() =>{
        algodao.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{
 
    const aguaPosition = agua.offsetLeft;
    const algodaoPosition = +window.getComputedStyle(algodao).bottom.replace('px', '');

    if(aguaPosition <= 110 && aguaPosition > -88 && algodaoPosition < 100){

        if(repeat === 0){

            morreu_bool = 0;

            agua.style.animation = 'none';
            agua.style.left = `${aguaPosition}px`;

            algodao.style.display = 'none';
            algodao_morto.style.display = 'block';

            game_over.style.display = 'flex';

            if(morreu_bool === 0){

                morreu_audio.play();
            
            }
    
            setTimeout(() =>{
    
                morreu_bool = 1;
    
            }, 3000);
        
            repeat = 1;

        }else if(sim_bool === 1){

            agua.style.animation = 'agua infinite 2s linear';
            agua.style.left = '';

            algodao.style.display = 'block';
            algodao_morto.style.display = 'none';

            game_over.style.display = 'none';

            repeat = 0;
            sim_bool = 0;
        }
    }

}, 10)

document.addEventListener('click', jump);
document.addEventListener('keydown', jump);

over_sim.addEventListener('click', () =>{

    sim_bool = 1;

})

over_nao.addEventListener('click', () =>{

    agua.style.animation = '';
    agua.style.left = '';

    tela_start.style.display = 'inline';

    game_over.style.display = 'none';

    algodao.style.display = 'block';
    algodao_morto.style.display = 'none';
    
    repeat = 0;
    sim_bool = 0;

})

start_game.addEventListener('click', () =>{

    agua.style.animation = 'agua infinite 2s linear';

    tela_start.style.display = 'none';

})