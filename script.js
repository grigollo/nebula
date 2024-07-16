document.oncontextmenu = () => {
    alert("Agora não, a Energia vooa atravez dos olhos")
    return false
}

document.onkeydown = e => {
    if(e.key == "F12") {
        alert("Agora não, o Sangue passa pelas minhas veias")
        return false
    }
    if(e.ctrlKey && e.key == "u") {
        alert("Agora não, o medo passa pelo choro dos meus olhos")
        return false
    }
    if(e.ctrlKey && e.key == "c") {
        alert("Agora não, o veneno passando pelo meu ser e corroendo minha alma")
        return false
    }
    if(e.ctrlKey && e.key == "v") {
        alert("Agora não, o vazio me consumindo e me transformando em sombra")
        return false
    }
}