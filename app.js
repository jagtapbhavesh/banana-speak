var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//  outputDiv.innerText = "Bhavesh Jagtap"

console.log(outputDiv);
// console.log(txtInput);

function clickHandler() {
   outputDiv.innerText ="ajsajsajsajsjas " +txtInput.value;
};

btnTranslate.addEventListener("click",clickHandler) 