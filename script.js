const display = document.querySelector(".displayScreen");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const clearBtn = document.querySelector(".btnClear");



// function

for(let i of buttons){
i.addEventListener("click", ()=>{
    let numbers =i.getAttribute("value");
    display.value += numbers // this will select 2 nos on the display screen
});
}


clearBtn.addEventListener("click",()=>{
    display.value=""; // this will erase nos on the screen
})


equal.addEventListener("click",()=>{
    if(display.value === ""){
        display.value="";
    }else{
        display.value = eval(display.value);

    }
})