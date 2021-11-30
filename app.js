// get me the button.
var btnTranslate = document.querySelector("#btn-translate");
// get me the input.
var txtInput = document.querySelector("#txt-input");
// get me the output.
var outputDiv = document.querySelector("#output");

// minions api from funtranslations
var serverURL = "https://api.funtranslations.com/translate/minion.json"

// example api
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// View the text in console
//  outputDiv.innerText = "Bhavesh Jagtap"

// view the output in console.
// console.log(outputDiv);

// view the text input in console. 
// console.log(txtInput);



function getTranslationURL(value){
   return serverURL + "?" + "text=" + value
}

function errorHandler(error){
   console.log("error occured", error)
   alert("something wrong with server: try again after sometime")
}

// info about what should happen when utton is clicked.
function clickHandler() {
   // to output ajsajs... in the start of output to test outputdiv.  
   // outputDiv.innerText ="ajsajsajsajsjas " +txtInput.value;

   var text = txtInput.value // taking input

   // calling server for processing 
   // calling api with fetch()
   fetch(getTranslationURL(text))
   .then(response => response.json())
   .then( json => {
      // to show output in output section 
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;

      // to show output in console log
      // console.log(json.contents.translated)
   })
   .catch(errorHandler)

};

btnTranslate.addEventListener("click",clickHandler) 