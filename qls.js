const percent = document.querySelector("#percent");
const body = document.querySelector("body");
const complete = document.querySelector("#complete");
const btn = document.querySelector("button");



let count = 0;
setInterval(function(){
    if(count <= 50){
        percent.textContent = `${count}%`;
        count++;

        complete.style.width = `${count}%`
    }
    
},20)

btn.addEventListener("click", ()=>{
    setInterval(function(){
    if(count <= 100){
        percent.textContent = `${count}%`;
        count++;

        complete.style.width = `${count}%`
    }
    
},40)
})