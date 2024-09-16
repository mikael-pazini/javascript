
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var rec = document.getElementById('rec')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    
    if (hora >= 0 && hora <= 1){
        msg.innerHTML = `Agora são ${hora} hora`
    } else {
        msg.innerHTML = `Agora são ${hora} horas`
    }

        if (hora >= 0 && hora < 13) {
        //Bom Dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = "linear-gradient(to bottom, #CADDE3, #F2D5BB)";
        rec.innerHTML = `Bom dia!</br> Que seu dia seja incrível!</br> P.S. não esqueça do café.`
    } else if (hora >= 13 && hora <= 18) {
        //Boa Tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = "linear-gradient(to bottom, #768BA6, #F2884B)";
        rec.innerHTML = `Boa tarde!</br> Como esta sendo seu dia?</br> Já tomou seu café hoje?`
    } else {
        //Boa Noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = "linear-gradient(to bottom, #5E4973, #0D0D0D)";
        rec.innerHTML = `Boa noite!</br> Como foi seu dia?</br> Espero que tenha sido excelente.`
    }
}