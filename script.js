const si = document.getElementById("si");
const no = document.getElementById("no");
const love = document.getElementById("love")
const mano = document.getElementById("mano")


 no.addEventListener("click", ()=>{
    no.style.display = "none"
    mano.style.display = "block"
   
    
})

si.addEventListener("click", ()=>{
    love.style.display = "block"
    love.style.transition ="opacity 0.5s ease"
    mano.style.display = "none"
      
})






