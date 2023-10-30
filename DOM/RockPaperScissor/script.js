const result = document.querySelector('#result')
const boxes = document.querySelectorAll('.boxes')
const end = document.querySelector('.end')

function computerPlay(){
    const num = Math.floor(Math.random()*3)
    if(num == 0){
        res = 'rock'
    }else if(num == 1){
        res = 'paper'
    }else{
        res = 'scissor'
    }
    return res
}

function decideWinner(com,human){
    if(com === human){
        result.innerHTML = `👨‍🦰${human} vs 🤖 ${com} it's a tie`
    }else if(com == 'rock' && human == 'scissor'){
        result.innerHTML = `👨‍🦰${human} vs 🤖 won ${com}`
    }else if(com == 'paper' && human == 'rock'){
        result.innerHTML = `👨‍🦰${human} vs 🤖 won ${com}`
    }else if(com == 'scissor' && human == 'paper'){
        result.innerHTML = `👨‍🦰${human} vs 🤖 won ${com} `
    }else{
        result.innerHTML = `👨‍🦰 won ${human} vs 🤖${com}`
    }
}

boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        decideWinner(computerPlay(),box.value)
    })
})


end.addEventListener('click',()=>{
    result.innerHTML = ""
})


