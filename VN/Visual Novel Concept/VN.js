var container = document.querySelector(".text");
var speeds = {
    pause : 500,
    normal : 70,
    fast : 10,
};let textLines = [
    {string : "Hey! Did you hear that?!", speed: speeds.fast},
    {string : "I DIDNT? What was that fucking sound?!", speed: speeds.fast},
    {string : "Come on... What is it?!", speed: speeds.fast}
];
//Edit ininya aja yak
let dialogueLines = [
    {string : "Hey! Did you hear that?!", speed: speeds.fast},
    {string : "Hey! Flynn!", speed: speeds.fast},
    {string : "Hey! Nice!", speed: speeds.fast},
    {string : "Hey! Keren!", speed: speeds.fast},
    {string : "Hey! NSAFNANIA", speed: speeds.fast}
]

let storyTime = 0;



function Gugugaga(){
    var characters = [];textLines.forEach((line, index) =>{if (index < textLines.length -1){line.string += " ";}line.string.split("").forEach(character=>{var span = document.createElement("span");span.textContent = character;container.appendChild(span);characters.push({span: span,isSpace: character === " ",delayAfter: line.speed,classes: line.classes || {}})})})

function revealOneChar(list){var next = list.splice(0, 1)[0];next.span.classList.add("revealed");var delay = next.delayAfter;if (list.length > 0) {setTimeout(function(){revealOneChar(list)}, delay)}} 
        revealOneChar(characters);
}

function KAKA(){
    const list = document.getElementById("textx");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    //textLines = [{string: "Bangsat!",speed: speeds.fast}]
}

function iterateDialogue(){
    KAKA();
    Gugugaga();
    textLines = [dialogueLines[storyTime]];
    console.log(textLines);
    storyTime++;
    console.log(storyTime);
}

document.addEventListener("keydown", (e) =>{
    if (e.key === "Enter"){
        iterateDialogue();
    }


}, false
);


   


