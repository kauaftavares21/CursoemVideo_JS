function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','Foto_crianca_M.jpg')
            } else if ( idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src','Foto_jovem_M.jpg')
            } else if ( idade >= 21 && idade < 50){
                // Adulto
                img.setAttribute('src','Foto_adulto_M.jpg')
            } else {
                // Idoso
                img.setAttribute('src','Foto_idoso_M.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'Foto_crianca_F.jpg')
            } else if ( idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src', 'Foto_jovem_F.jpg')
            } else if ( idade >= 21 && idade < 50){
                // Adulto
                img.setAttribute('src','Foto_adulta.F.jpg')
            } else {
                // Idoso
                img.setAttribute('src','Foto_idoso_F.jpg')
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}
