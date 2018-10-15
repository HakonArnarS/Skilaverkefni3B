var test = `virkar`;

var mainDiv = document.querySelector("#main");
mainDiv.innerHTML = `
    <ul class="list"></ul>
    Title <input type="text" id="title"/>
    Message <input type="text" id="msg"/>
    <button class="button">Add message</button>
`
var button = document.querySelector(".button");
var list = document.querySelector(".list");
var title = document.querySelector("#title");
var message = document.querySelector("#msg");
var blueDiv = document.querySelector("#blue");
var addMessage = function(){
    console.log(test);
    list.innerHTML += getEvent(title.value, message.value); 

}
button.onclick = addMessage;

// list.style.width ='300px';
// list.style.height ='300px';
// list.style.backgroundColor = "blue";


var getEvent = function(title, msg){
    var x = `

    <li class="item" style="background-color:#eaeaea;width:300px;height:300px;list-style:none;">
        <div>
            <h1>${title}</h1>
        </div>
        <div>
            <p>${msg}</p>
        </div>          
	</li>
    `
     
    return x;
}