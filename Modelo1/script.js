function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'Manhã.jpg'
        document.body.style.background = '#d4d0c9'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'Tarde.jpg'
        document.body.style.background = '#99b5ed'
    } else {
        // BOA NOITE!
        img.src = 'Noite.jpg'
        document.body.style.background = '#4e422f'
    }
    
}
