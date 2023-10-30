const start = document.querySelector('#start')
const stopped = document.querySelector('#stop')


const randomColor =()=>{
    let color = "#"
    const hex = "0123456789ABCDEF"
    for(i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let changeColor 
function startChangingColor(){
    changeColor = setInterval(colorChanged,1000)
    function colorChanged(){
        console.log(randomColor())
        document.body.style.backgroundColor = randomColor() 
    }
}

start.addEventListener('click',()=>{
    startChangingColor()
})

stopped.addEventListener('click',()=>{
    // console.log(changeColor)
    clearInterval(changeColor)
    changeColor = ""
})