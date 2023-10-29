let arr= [
    {
        dp:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwwfDB8fHww",
        story:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
        story:"https://media.istockphoto.com/id/1442495175/photo/beauty-portrait-and-natural-face-of-black-woman-with-healthy-freckle-skin-texture-touch.webp?b=1&s=170667a&w=0&k=20&c=ROYbN_x6cYubTzSW3EzzaL_NCFjMzoXR2XXch9pXUCo="
    },
    {
        dp:"https://images.unsplash.com/photo-1523950704592-ee4866469b4c?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHwwfDB8fHww",
        story:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHwwfDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHwwfDB8fHww",
        story:"https://images.unsplash.com/photo-1615212049275-95561aebe1b4?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwwfDB8fHww",
        story:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
        story:"https://media.istockphoto.com/id/1442495175/photo/beauty-portrait-and-natural-face-of-black-woman-with-healthy-freckle-skin-texture-touch.webp?b=1&s=170667a&w=0&k=20&c=ROYbN_x6cYubTzSW3EzzaL_NCFjMzoXR2XXch9pXUCo="
    },
]

let clutter = ""
arr.forEach((value,index)=>{
    clutter += `<div class="story">
    <img id="${index}" src="${value.dp}" alt="${index}">
</div>`
})

document.querySelector('#stories').innerHTML = clutter 


document.querySelector('#stories').addEventListener('click',(dets)=>{
    // let storyValue = arr[dets.target.id].story
    document.querySelector('#full-screen').style.display = "block"
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(()=>{
        document.querySelector('#full-screen').style.display = "none"  
    },1500)

})