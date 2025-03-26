let charaSel = [
    "../assets/Characters/sakuya.png",
    "../assets/Characters/reimu.png",
    "../assets/Characters/remilia.png"
]
let k = 0;

function back(){
    let b = document.getElementById("charas");
    if(k==0){
        k = 2;
    }else k--;


    b.classList.remove ("divHg_AnimationIn");
    setTimeout(function() {
        b.setAttribute("src", charaSel[k]);
        b.classList.add("divHg_AnimationIn");
    }, 50);

   /* b.classList.add("divHg_AnimationOut");
    setTimeout(function() {
        b.classList.remove  ("divHg_AnimationIn");
    }, 1000);
    setTimeout(function() {
        b.setAttribute("src", charaSel[k]);
        b.classList.add("divHg_AnimationIn");
    }, 1000);*/
}

function next(){
    let b = document.getElementById("charas");
    k = (k+1) % 3;
    b.classList.remove ("divHg_AnimationIn");
    setTimeout(function() {
        b.setAttribute("src", charaSel[k]);
        b.classList.add("divHg_AnimationIn");
    }, 50);
}

function StartTheGame(){
    const imgUrl = document.getElementById("charas").getAttribute("src");

    sessionStorage.setItem("chara", "../" + imgUrl);
}

let iteration_m = sessionStorage.getItem("iteration");

console.log(iteration_m)

window.addEventListener("load", () => {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.add("kk");
})

let usn;

function submitUsn(){
        iteration_m = 3;
        usn = document.getElementById("name").value;
        sessionStorage.setItem("name", usn)
        sessionStorage.setItem("iteration", iteration_m);
        console.log(usn);
        overlay = document.getElementById('popupOverlay');
        overlay.classList.remove("kk");
        
        let title = document.getElementById("title");
        title.innerHTML = "Welcome to Gensokyou, " + usn + "!"
}



function closePopup(){
        overlay = document.getElementById('popupOverlay');
        overlay.classList.remove("kk");
}

let j = sessionStorage.getItem("name");
console.log(j);

