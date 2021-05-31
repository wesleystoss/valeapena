function mostrar_busca_avancada(){
    document.getElementById("busca_avancada").style.display = "block"
}

function m_usu_news(){
    var x = document.getElementById("ver_newslestter").value

    if(x === "Ver"){
         document.getElementById("lista_news").style.display = "none"
         document.getElementById("ver_newslestter").value = ""
     }else{
        document.getElementById("lista_news").style.display = "block"
        document.getElementById("ver_newslestter").value = "Ver"
    }
 }

 function responder_post(){
    document.getElementById("response").style.display="block";
}

 // Botão voltar ao topo
    $(document).scroll(function() {
        var y = $(this).scrollTop();
            if (y > 300) {
                $('.subir')
                .css({
                    'display': 'block'
                });
            } else {
                $('.subir')
                .css({
                    'display': 'none'
                });
            }
    });