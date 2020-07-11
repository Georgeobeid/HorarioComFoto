function carregar() {
    var msg= window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var hora = new Date()
    var agora=hora.getHours()
    msg.innerHTML=`Agora são ${agora} horas`
    console.log(agora)

    if(agora>=0 && agora<12){
        imagem.src='manha.jpg'
        window.document.body.style.background='#ff0315'
    } else if (agora >= 12 && agora <18){
        imagem.src='tarde.jpg'
        window.document.body.style.background='#33360f'
    }else{
        imagem.src='noite.jpg'
        window.document.body.style.background='#ffa103'
    }
}