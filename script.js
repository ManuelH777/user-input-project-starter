
let mainTitle = document.getElementById("main_title");
let story = document.getElementById("story_result");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");

function title(){
   let placeHolder = titleInput.value;
   mainTitle.innerText = placeHolder;
   
}


titleInput.addEventListener("input", title);



