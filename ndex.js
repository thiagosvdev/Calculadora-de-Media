function calcularMedia() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let media = (n1 + n2) / 2;

    document.getElementById("media").innerHTML = media.toFixed(2);

    if (media >= 7){
        document.getElementById("aprovado-reprovado").innerHTML = "Parabens, Aprovado!";
        document.getElementById("media").style.color = "green";
    }

    else if (media >= 3){
        document.getElementById("aprovado-reprovado").innerHTML = "Você está na final!";
        document.getElementById("media").style.color = "orange";
    }

    else{
        document.getElementById("aprovado-reprovado").innerHTML = "Reprovado...";
        document.getElementById("media").style.color = "red";
    }

    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}
