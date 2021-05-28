var translateBtn = document.querySelector("#btn-translate");
var textBox = document.getElementById("txt-input");
var translateBox = document.getElementById("translate-box");

var url = "https://api.funtranslations.com/translate/minion.json?text=";

function getUrl(input) {
  return url + input;
}
translateBtn.addEventListener("click", clickeventhandle);

function clickeventhandle() {
  translate = textBox.value;
  //console.log(translate);

  fetch(getUrl(translate))
    .then((res) => res.json())
    .then((e) => translateBox.innerText = e.contents.translated)
    .catch("error");
}
