

function semafor() {
    let boja = document.querySelectorAll(".boje");

    boja[0].style.background = "red";
    boja[1].style.background = "gray";
    boja[2].style.background = "gray";


    function yellowLight() {
        boja[1].style.background = "yellow";
    }

    function greenLight() {
        boja[0].style.background = "gray";
        boja[1].style.background = "gray";
        boja[2].style.background = "green";
    }

    let yellow = setTimeout(yellowLight, 3000);
    let green = setTimeout(greenLight, 5000);

    setInterval(semafor, 8000);
    semafor2();
}

semafor();


function semafor2() {
    let boja2 = document.querySelectorAll(".boje2");

    
    boja2[0].style.background = "gray";
    boja2[1].style.background = "gray";
    boja2[2].style.background = "green";
    


    function yellowLight2() {
        boja2[1].style.background = "yellow";
    }

    function redLight2() {
        boja2[0].style.background = "red";
        boja2[1].style.background = "gray";
        boja2[2].style.background = "gray";
    }

    let yellow = setTimeout(yellowLight2, 3000);
    let red = setTimeout(redLight2, 5000);
}