function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','masculino/bebe.png')
            }else if (idade <25) {
                //jovem
                img.setAttribute('src','masculino/jovem.png')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src','masculino/homem.png')
            } else {
                //idoso
                img.setAttribute('src','masculino/idoso.png')
            }
        } else if (fsex[1].checked) {
                ganero = 'Mulher' 
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','feminino/bebe.png')
            }else if (idade <25) {
                //jovem
                img.setAttribute('src','feminino/jovem.png')
            }else if (idade <50) {
                //adulta
                img.setAttribute('src','feminino/mulher.png')
            } else {
                //idosa
                img.setAttribute('src','feminino/idosa.png')
            }
        } 
        res.style.textAlign ='center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}