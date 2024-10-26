const body = document.querySelector("body");
const footer = document.querySelector("footer");
//Head section
const headSection = document.querySelector(".head-section");


// toggle variables
const toggle = document.querySelector(".toggle");
const toggleOption1 = document.getElementById("toggle-option1");
const toggleOption2 = document.getElementById("toggle-option2");
const toggleOption3 = document.getElementById("toggle-option3");
const toggleIndicator = document.querySelector(".toggle-indicator");

// Toggle events.
toggleOption1.addEventListener("input", () =>{
    toggleIndicator.style.transform = "translateX(0)";
    toggleIndicator.style.backgroundColor = "hsl(6, 63%, 50%)";
    // changing body and head section colors.
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    headSection.style.color = "white";
    // changing toggle colors.
    toggle.style.backgroundColor = "hsl(223, 31%, 20%)";
    toggle.style.border = "4px solid hsl(223, 31%, 20%)"
    // changing screen colors.
    screen.style.backgroundColor = "hsl(224, 36%, 15%)";
    screen.style.color = "white";
    // changing keypad colors.
    keypad.style.backgroundColor = "hsl(223, 31%, 20%)";
    let i = 0;
    while (i < btns.length) {
        btns[i].style.color = "hsl(221, 14%, 31%)";
        btns[i].style.backgroundColor = "hsl(30, 25%, 89%)";
        btns[i].style.boxShadow = "0 3px hsl(28, 16%, 65%)"
        i ++;
    }
    delBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
    delBtn.style.boxShadow = "0 3px hsl(224, 28%, 35%)";
    delBtn.style.color = "hsl(30, 25%, 89%)";
    resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetBtn.style.boxShadow = "0 3px hsl(224, 28%, 35%)";
    resetBtn.style.color = "hsl(30, 25%, 89%)";
    equaltoBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
    equaltoBtn.style.boxShadow = "0 3px hsl(25, 99%, 27%)";
    equaltoBtn.style.color = "hsl(30, 25%, 89%)";
    footer.style.color = "hsl(30, 25%, 89%)";
})
toggleOption2.addEventListener("input", () =>{
    toggleIndicator.style.transform = "translateX(150%)";
    toggleIndicator.style.backgroundColor = "hsl(25, 98%, 40%)";
    // changing body and head section colors.
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    headSection.style.color = "hsl(60, 10%, 19%)";
    // changing toggle colors.
    toggle.style.backgroundColor = "hsl(0, 5%, 81%)";
    toggle.style.border = "4px solid hsl(0, 5%, 81%)"
    // changing screen colors.
    screen.style.backgroundColor = "hsl(0, 0%, 93%)";
    screen.style.color = "hsl(60, 10%, 19%)";
    // changing keypad colors.
    keypad.style.backgroundColor = "hsl(0, 5%, 81%)";
    let i = 0;
    while (i < btns.length) {
        btns[i].style.color = "hsl(60, 10%, 19%)";
        btns[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        btns[i].style.boxShadow = "0 3px hsl(35, 11%, 61%)"
        i ++;
    }
    delBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
    delBtn.style.boxShadow = "0 3px hsl(185, 58%, 25%)";
    delBtn.style.color = "hsl(45, 7%, 89%)";
    resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
    resetBtn.style.boxShadow = "0 3px hsl(185, 58%, 25%)";
    resetBtn.style.color = "hsl(45, 7%, 89%)";
    equaltoBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
    equaltoBtn.style.boxShadow = "0 3px hsl(25, 99%, 27%)";
    equaltoBtn.style.color = "hsl(45, 7%, 89%)";
    footer.style.color = "hsl(60, 10%, 19%)";
})
toggleOption3.addEventListener("input", () =>{
    toggleIndicator.style.transform = "translateX(300%)";
    toggleIndicator.style.backgroundColor = "hsl(176, 100%, 44%)";
    // changing body and head section colors.
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    headSection.style.color = "hsl(52, 100%, 62%)";
    // changing toggle colors.
    toggle.style.backgroundColor = "hsl(268, 71%, 12%)";
    toggle.style.border = "4px solid hsl(268, 71%, 12%)"
    // changing screen colors.
    screen.style.backgroundColor = "hsl(268, 71%, 12%)";
    screen.style.color = "hsl(52, 100%, 62%)";
    // changing keypad colors.
    keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
    let i = 0;
    while (i < btns.length) {
        btns[i].style.color = "hsl(52, 100%, 62%)";
        btns[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        btns[i].style.boxShadow = "0 3px hsl(290, 70%, 36%)"
        i ++;
    }
    delBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
    delBtn.style.boxShadow = "0 3px hsl(285, 91%, 52%)";
    delBtn.style.color = "hsl(0, 0%, 100%)";
    resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetBtn.style.boxShadow = "0 3px hsl(285, 91%, 52%)";
    resetBtn.style.color = "hsl(0, 0%, 100%)";
    equaltoBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
    equaltoBtn.style.boxShadow = "0 3px hsl(177, 92%, 70%)";
    equaltoBtn.style.color = "hsl(198, 20%, 13%)";
    footer.style.color = "hsl(52, 100%, 62%)";
})

// initializing variables for screen.
const screen = document.querySelector(".screen");
const screenText = document.getElementById("screen-text");


// keypad actions.
const keypad = document.querySelector(".keypad");
const btns = document.querySelectorAll(".keypad > button");
const delBtn = document.getElementById("btn-del");
const resetBtn = document.getElementById("btn-reset");
const equaltoBtn = document.getElementById("btn-equalto");

function click0() {
    screenText.innerHTML = screenText.innerHTML + "0";
}
function click1() {
    screenText.innerHTML = screenText.innerHTML + "1";
}
function click2() {
    screenText.innerHTML = screenText.innerHTML + "2";
}
function click3() {
    screenText.innerHTML = screenText.innerHTML + "3";
}
function click4() {
    screenText.innerHTML = screenText.innerHTML + "4";
}
function click5() {
    screenText.innerHTML = screenText.innerHTML + "5";
}
function click6() {
    screenText.innerHTML = screenText.innerHTML + "6";
}
function click7() {
    screenText.innerHTML = screenText.innerHTML + "7";
}
function click8() {
    screenText.innerHTML = screenText.innerHTML + "8";
}
function click9() {
    screenText.innerHTML = screenText.innerHTML + "9";
}
function clickDel() {
    screenText.innerHTML = screenText.innerHTML.slice(0, -1);
}
function clickReset() {
    screenText.innerHTML = "";
}
const operators = ["+", "-", "÷", "×"];
function clickPlus() {
    screenText.innerHTML = screenText.innerHTML + "+";
}
function clickMinus() {
    screenText.innerHTML = screenText.innerHTML + "-";
}
function clickPoint() {
    if (screenText.innerHTML.length == 0) {
        screenText.innerHTML = "0.";
    }
    else {
        screenText.innerHTML = screenText.innerHTML + "."; 
    }
}
function clickDivide() {
    screenText.innerHTML = screenText.innerHTML + "÷";
}
function clickMultiply() {
    screenText.innerHTML = screenText.innerHTML + "×";
}
function clickEqualto() {
    let expression = screenText.innerHTML.replace(/÷/g, "/").replace(/×/g, "*");
    let result = String(new Function(`return ${expression}`)())
    if (result.length > 15){
        result = result.slice(0,15);
    }
    screenText.innerHTML = result;
}



