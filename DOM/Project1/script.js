const result = document.querySelector('#result')
const btn = document.getElementById('btn')

let flag = 0

btn.addEventListener('click',()=>{
   if(flag === 0){
      result.textContent = 'Friends'
      btn.textContent = 'Remove friend'
      result.style.backgorundColor = 'Green'
      console.log('hola')
      flag = 1 
   }else{
      result.textContent = 'Strangers'
      btn.textContent = 'Add friend'
      result.style.backgorundColor = 'lightCoral'
      flag = 0
   }   
})