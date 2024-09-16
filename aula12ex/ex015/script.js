function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen= 'Homen'
            if (idade >= 0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'imagens/criancaM.png')
            } else if (idade >= 14 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultoM.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        } else if (fsex[1].checked) {
            gen= 'Mulher'
            if (idade >= 0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'imagens/criancaF.png')
            } else if (idade >= 14 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemF.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulta
                img.setAttribute('src', 'imagens/adultoF.png')
            } else {
                //Idosa
                img.setAttribute('src', 'imagens/idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.paddingBottom = '10px'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.</br>`
        img.style.width ='250px'
        res.appendChild(img)
    }


}