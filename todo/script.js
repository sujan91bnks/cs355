"user strict";
const $ = document.querySelector.bind(document);
console.log("hello world");

var mainDiv = $("#main");
var inputText = $("#textArea");
var clickBtn = $('#btn');

function add_Event(){
    var d = document.createElement('div');
   // d.type = 'checkbox';
   mainDiv.appendChild(d);
   d.innerHTML = inputText.value;
   d.classList.add('todo');
   d.addEventListener('click', function(){
        d.classList.add('completed');
    });
    inputText.value = ' ';
}

clickBtn.addEventListener('click', add_Event);
