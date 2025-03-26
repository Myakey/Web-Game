window.addEventListener('load', () => {

    const imgUrl = sessionStorage.getItem("chara");


    k = document.getElementById("test");
    k.setAttribute("src", imgUrl);
})


