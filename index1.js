const min = 1;
const max = 7;
let roll = document.querySelector('button')
let result = document.querySelector('.score')
let dice = document.querySelector('.dice')
let p1score = document.querySelector('.p1score')
let p2score = document.querySelector('.p2score')
let element = document.querySelector('.dice')
let one = document.querySelector('.one')
let two = document.querySelector('.two')


function getRandom() {
    one.classList.toggle('shadow')
    two.classList.toggle('shadow')
    let rndm = Math.floor(Math.random() * (max - min) + min);
    result.innerHTML = rndm

    console.log(rndm)

    score(rndm);
    dice.classList.toggle('dice')
   


    element.src = `images/${rndm}.png`

}


let i = 1;

function score(rndm) {
    if (i > 5) {
        winner();
        alert("Game Over!")
        restart();
    } else {
        if (i % 2 != 0) {
            p1score.innerHTML = parseInt(p1score.textContent) + rndm;

        } else {
            p2score.innerHTML = parseInt(p2score.textContent) + rndm;
        }
        i++;
    }

}



roll.addEventListener('click', getRandom)



function winner() {
    p1 = parseInt(p1score.textContent)
    p2 = parseInt(p2score.textContent)
    if (p1 > p2) {
        alert('Player one wins!')
    } else if (p1 == p2) {
        alert(' Tie!')
    } else if (p1 < p2) {
        alert('Player two wins!')


    }

}
function restart(){
    location.reload();

}