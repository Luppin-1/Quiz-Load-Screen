const body = document.querySelector("body");

const mainPage = document.querySelector("#main-n");

const input = document.querySelector(".input-number");

const submit = document.querySelector(".submit-n");

const cSpan = document.querySelector(".counter-span");

const popup = document.querySelector(".popup");
const popupText = document.querySelector(".popup-p");
const popupcontinue = document.querySelector(".popup-continue");
const popupfinish = document.querySelector(".popup-finish");


const secpage = document.querySelector(".secpage");
const playagain = document.querySelector(".playagain");
const playagain2 = document.querySelector(".playagain2");
const history = document.querySelector(".history");
const historyList = document.querySelector(".history-list");
const historyCont = document.querySelector(".history-container");


let targetNumber = Math.round(Math.random() * 1000);
console.log(targetNumber);
let c = 2;

let gotoSecpage = false;

let number = [];

mainPage.addEventListener('submit', function(e){
    e.preventDefault();
    let inputValue = Number(input.value);

    number.push(inputValue);
    localStorage.setItem('numbers',JSON.stringify(number));
    
    
    if(inputValue === targetNumber){
        popup.style.display = "flex";
        popupText.textContent = "WINNER";
        popupcontinue.style.display = "none";
        popupfinish.style.backgroundColor = "green";
        popupfinish.textContent = "پایان بازی";

        gotoSecpage = true;

        body.style.background = "green";
        body.style.backgroundImage = "none";
    }
    else if(c > 1){
        if(inputValue > targetNumber){
        popup.style.display = "flex";
        popupText.textContent = "بیا پایین سرمون درد گرفت";

        input.value = "";
        c--;



        }else if(inputValue < targetNumber){
            popup.style.display  = "flex";
            popupText.textContent = "کمه مشتی برو بالاتر";

            input.value = "";
            c--;
        }
        // else{
        //     popup.style.display = "flex";
        //     popupText.textContent = "آفرین زدی به هدف";
            
        //     gotoSecpage = true;

        //     body.style.backgroundColor = "green";
        //     popupcontinue.textContent = "شروع مجدد";
        //     popupcontinue.addEventListener("click",() => {
        //         MoveToMainpage();
        //         c = 10;
        //         gotoSecpage = false;
        //         cSpan.textContent = `${c}`;
        //         body.style.backgroundColor = "";
        //         targetNumber = Math.round(Math.random() * 1000);
        //         input.value = "";

        //     })

            

        //     input.value = "";
        //     c--;
        // }
        cSpan.textContent = `${c}`
    }else if((c === 1) && (inputValue !== targetNumber)){
        popup.style.display = "flex";
        popupText.textContent = "GAME OVER";
        popupcontinue.style.display = "none";
        popupfinish.textContent = "پایان بازی";


        gotoSecpage = true;

        body.style.background = "red";
    }

    
    
})



popup.addEventListener('click', function(){
    popup.style.display = "none";    

    if(gotoSecpage){
        MoveToSecpage();
    }
})



playagain.addEventListener("click",() => {
    MoveToMainpage();
    c = 10;
    gotoSecpage = false;
    cSpan.textContent = `${c}`;
    body.style.background = "";
    body.style.backgroundImage = "";
    targetNumber = Math.round(Math.random() * 1000);
    input.value = "";
    localStorage.clear();
    popupfinish.style = "";
    popupfinish.textContent = "انصراف";

})

history.addEventListener('click',() => {

    historyCont.style.display = "block";
    secpage.style.display = "none";
    const getnumber = JSON.parse(localStorage.getItem("numbers"));

    getnumber.forEach(element => {
        if(element > targetNumber){
            const li = document.createElement("li");
            li.classList.add("guess-card", "high");
            li.innerHTML = `<strong>${element}</strong><span>↑</span>`;
            historyList.appendChild(li);

        }else if(element < targetNumber){
            const li = document.createElement("li");
            li.classList.add("guess-card", "low");
            li.innerHTML = `<strong>${element}</strong><span>↓</span>`;
            historyList.appendChild(li);

        }else{
            const li = document.createElement("li");
            li.classList.add("guess-card", "correct");
            li.innerHTML = `<strong>${element}</strong><span>✅</span>`;
            historyList.appendChild(li);

        }
    });

    playagain2.addEventListener("click",() => {
    MoveToMainpage();
    c = 10;
    gotoSecpage = false;
    cSpan.textContent = `${c}`;
    body.style.background = "";
    body.style.backgroundImage = "";
    targetNumber = Math.round(Math.random() * 1000);
    input.value = "";
    localStorage.clear();
    popupfinish.style = "";
    popupfinish.textContent = "انصراف";
    historyCont.style.display = "none";

})
})

popupfinish.addEventListener("click",() => {
    MoveToSecpage();
})








function MoveToSecpage(){
    mainPage.style.display = "none";
    secpage.style.display = "flex";
}

function MoveToMainpage(){
    mainPage.style.display = "flex";
    secpage.style.display = "none";

    popupcontinue.style.display = "";

}