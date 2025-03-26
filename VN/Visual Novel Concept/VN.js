var container = document.querySelector(".text");
var speeds = {
    pause : 500,
    normal : 30,
    fast : 10,
};let textLines = [
    {string : "Hey! Did you hear that?!", speed: speeds.fast},
    {string : "I DIDNT? What was that fucking sound?!", speed: speeds.fast},
    {string : "Come on... What is it?!", speed: speeds.fast}
];
//Edit ininya aja yak
let dialogueLines = [
    //Narrator
    {string : "The sky above Gensokyo is splitting apart, forming a swirling, unstable time rift. Strange echoes of voices from the past and future can be faintly heard. Reimu Hakurei, normally calm, is panicking for once as she dashes through the streets of the Human Village, looking for answers.", speed: speeds.fast},
    //Reimu
    {string : "(frustrated, looking up at the sky) What the hell is that thing!? Since when does Gensokyo have time rifts!? This isn’t normal—this is so not normal!", speed: speeds.normal},
    //Narrator
    {string : "(She rushes forward, searching for someone who could be responsible—or at least have answers. And then, as if on cue, she spots two very suspicious individuals standing in the middle of the road: Remilia Scarlet and Sakuya Izayoi. The two appear unusually calm despite the chaos above.)", speed: speeds.fast},
    //Reimu
    {string : "(pointing accusingly) …Of course. OF COURSE it’s you two.", speed: speeds.normal},
    //Remilia
    {string : "(raises an eyebrow, amused) Excuse me?", speed: speeds.normal},
    //Sakuya
    {string : "(crossing her arms) …I have the oddest feeling that we’re about to be blamed for something.", speed: speeds.normal},
    //Reimu
    {string : "(marching up to them) Don’t “excuse me” me! There’s a giant, reality-breaking hole in the sky, and who do I find just standing around like nothing's wrong? The resident time manipulator and her vampire mistress.", speed: speeds.normal},
    //Remilia
    {string : "(laughs lightly) My, my, such baseless accusations! I thought you were smarter than that, Reimu.", speed: speeds.normal},
    //Sakuya
    {string : "(deadpan) I don’t recall having the ability to rip time itself apart. If I did, I certainly wouldn’t waste it making such a messy rift.", speed: speeds.normal},
    //Reimu
    {string : "(suspiciously squinting at Sakuya) But you can manipulate time, right?", speed: speeds.normal},
    //Sakuya
    {string : "(nods) I can stop it. Not break it. There’s a difference.", speed: speeds.normal},
    //Remilia
    {string : "(grinning) If we were behind this, wouldn’t it be much more… elegant? This is way too chaotic for my tastes.", speed: speeds.normal},
    //Reimu
    {string : "(crossing her arms, still not convinced) I dunno… sounds exactly like something you’d say if you were guilty.", speed: speeds.normal},
    //Sakuya
    {string : "(exasperated sigh) You’re impossible.", speed: speeds.normal},
    //Remilia
    {string : "(mock hurt) I’m wounded, Reimu. Truly.", speed: speeds.normal},
    //Reimu
    {string : "(groaning) Ugh, I don’t have time for this! I need to—", speed: speeds.normal},
    //Narrator
    {string : "(Suddenly, the time rift in the sky pulses violently, distorting space itself. The ground trembles as the swirling hole in reality begins expanding rapidly, its gravitational pull increasing.)", speed: speeds.fast},
    //Sakuya
    {string : "(eyes narrowing) …That’s not good.", speed: speeds.normal},
    //Remilia
    {string : "(frowning for real now) No, it’s really not.", speed: speeds.normal},
    //Narrator
    {string : "(The wind picks up, and before anyone can react, the rift violently pulls them off their feet. Reimu, Sakuya, and Remilia are sucked into the vortex, their surroundings warping into a blur of light and shadow. The last thing they hear is the distorted echoes of distant, unknown voices—some familiar, some completely alien.)", speed: speeds.fast}
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


   


