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