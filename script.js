const text=document.querySelector(".h-animate")
const textLoad=()=>{
    setTimeout(()=>{
    
    text.textContent="Rudra ";
    
    },0);
    setTimeout(()=>{
    
    text.textContent = "Photographer ";
    
    },4000);
}
textLoad();
setInterval(textLoad,12000);