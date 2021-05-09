<?php
$pag_site_atual = "index";
?>

<!DOCTYPE html>
<html>
<head>
<title>Vale a pena</title>
<?php include("header.php")?>
<style>
    .carousel-item:hover {
        color: #007bff;
        cursor: pointer;
        border: 1px solid #17a2b8!important;
        border: 1px solid #0052cc;
        background: #f6f9ff;
    }
    .carousel-item.card {
        float: initial;
        margin: auto;
    }
    header {
    background-color: transparent;
    border-bottom: none;
    position: absolute!important;
}
a.nav-link {
    color: white!important;
}
</style>
<script>
$('.carousel').carousel({
  interval: 2000
})
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
var segundos = 3; //3segundos

setTimeout(function(){
  $('#spinner').fadeIn();
}, segundos*1000)
    </script>
</head>
<body>
<div class="search-div" style="padding-top: 380px;">
        <center id="buscador" style="color: white; position: relative;">
            <b style="text-shadow: black 0.1em 0.1em 0.2em; font-size: 25px;">Pesquise sobre as reputações das marcas ou abra uma enquete!</b><br><br>
            <form style="max-width: 720px;" class="iten-pesquisa" action="search_results.php">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg></span>
                    </div>
                    <input style="height: 50px;" class="form-control mr-sm-2 pesquisa" onclick="exibir_wallpaper_shadow()" type="search" name="pesquisa" placeholder="Buscar pelo nome da marca, produto ou tipo de serviço..." aria-label="Search">
                </div>
                <div class="result_previews" id="result_previews">
                    <div id="spinner" class="spinner-grow text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </form>
        </center>
    </div>
<main class="container">
    <div class="row">
    <div class="coluna-esquerda col-3">
            <div class="container card mais-comentadas">
                <h5>
                    Mais comentadas
                    <p>Fique por dentro do melhor marketing nos últimos 6 meses</p>
                </h5>
                <ul style="padding-left: 0px;">
                    <a href="#"><li><img src="IMG/coca-cola3.jpg" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> Coca-cola</li></a>
                    <a href="#"><li><img src="IMG/hp.jpg" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> HP impressoras</li></a>
                    <a href="#"><li><img src="IMG/vans.png" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> VANS</li></a>
                    <a href="#"><li><img src="IMG/nike.png" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> NIKE</li></a>
                    <a href="#"><li><img src="IMG/motorola.png" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> Motorola</li></a>
                    <a href="#"><li><img src="IMG/apple.jpg" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> Apple</li></a>
                    <a href="#"><li><img src="IMG/dell.jpg" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> DELL</li></a>
                    <a href="#"><li><img src="IMG/playsation.jpg" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> PlayStation</li></a>
                    <a href="#"><li><img src="IMG/mcdonalds.png" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> McDonald's</li></a>
                    <a href="#"><li><img src="IMG/LG.jpg" style="height: 40px; border: 1px solid #aaa; border-radius: 100%; width: 40px;"> LG</li></a>
                </ul>
                <center><a href="#">Ver mais</a></center>
                <br>
            </div>
            <div class="container card mais-comentadas">
                <h5>
                    Conheça novas empresas
                    <p>Estas são marcas que talvez você goste</p>
                </h5>
                <ul style="padding-left: 0px;">
                    <a href="#"><li>AAAAAAAA</li></a>
                    <a href="#"><li>BBBBBBBB</li></a>
                    <a href="#"><li>CCCCCCCC</li></a>
                    <a href="#"><li>DDDDDDDD</li></a>
                    <a href="#"><li>EEEEEEEE</li></a>
                    <a href="#"><li>FFFFFFFF</li></a>
                    <a href="#"><li>GGGGGGGG</li></a>
                    <a href="#"><li>HHHHHHHH</li></a>
                    <a href="#"><li>IIIIIIII</li></a>
                    <a href="#"><li>VVVVVVVV</li></a>
                </ul>
                <center><a href="#">Ver mais</a></center>
                <br>
            </div>
        </div>
        
        <div class="coluna-centro col">
            <div class="container card col" style="min-height: 1050px;">
                <h5>
                    Atividades recentes
                    <p>Outros clientes abriram discussões dentro do portal. Dê sua opinião!</p>
                </h5>
                <div id="spinner" class="spinner-grow text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <a href="#" style="position: absolute; bottom: 10px; right: 10px;"><b>Ver todas as postagens <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg></b></a>
            </div>
            <div class="enquetes-populares" style="margin-top: 50px;">
                <h2>Enquetes populares <button type="button" class="btn btn-outline-secondary float-right" data-container="body" data-toggle="popover" data-placement="right" data-content="As enquetes são pesquisas rápidas em que outros usuários poderão auxiliar na decisão.">
                Dúvida?
                </button></h2>
                <!--Amtiga visualização de enquetes
                    <div class="">
                        <ul class="list-group list-group-horizontal-xl">
                            <li class="list-group-item col alert-primary">
                                <div class="titulo-enquete">
                                    <b>Compra de carro </b>
                                </div>
                                <div class="comentario">
                                    <i>"Preciso de indicações de chevettes em Brasília..."</i>
                                </div>
                                <span class="votacao">589 votações</span>
                            </li>
                            <div style="width:20px">
                            </div>
                            <li class="list-group-item col alert-primary">
                                <div class="titulo-enquete">
                                    <b>Notebook</b>
                                </div>
                                <div class="comentario">
                                    <i>"Qual a melhor marca de notebook para trabalho..."</i>
                                </div>
                                <span class="votacao">589 votações</span>
                            </li>
                            <div style="width:20px">
                            </div>
                            <li class="list-group-item col alert-primary">
                                <div class="titulo-enquete">
                                    <b>Celular gamer</b>
                                </div>
                                <div class="comentario">
                                    <i>"Qual marca tem mais bateria e desempenho para..."</i>
                                </div>
                                <span class="votacao">589 votações</span>
                            </li>
                        </ul>
                        <br>
                        <a href="#" class="float-right"><b>Ver todas as enquetes <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg></b></a>
                        <br>
                    </div>
                    <br>
                -->
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner container">
                        <div class="carousel-item card active">
                            <div class="titulo-enquete">
                            <b>Compra de carro </b>
                            </div>
                            <div class="comentario">
                                <i>"Preciso de indicações de chevettes em Brasília..."</i>
                            </div>
                            <span class="votacao">589 votações</span>
                        </div>
                        <div class="carousel-item card">
                            <div class="titulo-enquete">
                                <b>Notebook</b>
                            </div>
                            <div class="comentario">
                                <i>"Qual a melhor marca de notebook para trabalho..."</i>
                            </div>
                            <span class="votacao">589 votações</span>
                        </div>
                        <div class="carousel-item card">
                            <div class="titulo-enquete">
                                <b>Celular game</b>
                            </div>
                            <div class="comentario">
                                <i>"Melhor modelo de celular gamer"</i>
                            </div>
                            <span class="votacao">589 votações</span>
                        </div>
                    </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span aria-hidden="true"><img src="IMG/icons/next.png" height="50px" style="transform: rotate(180deg);"></span>
                    <span class="sr-only">Anterior</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span aria-hidden="true"><img src="IMG/icons/next.png" height="50px"></span>
                    <span class="sr-only">Próximo</span>
                </a>
                </div>
                <a href="#" class="float-right"><b>Ver todas as enquetes <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg></b></a>
                <br>
            </div>
        </div>

        <div class="coluna-direita col-3">
            <!--<div class="container card">
                <h5>
                    Navegação
                    <p>Acesse rapidamente o conteúdo que procura</p>
                </h5>
                <ul style="padding-left: 0px;">
                    <li><a href="#">Atividades recentes</a></li>
                    <li><a href="#">Enquetes populares</a></li>
                    <li><a href="#">Rankings</a></li>
                </ul>
            </div>-->
            <div class="container card mais-comentadas">
                <h5>
                    Últimos artigos
                    <p>Veja alguns artigos publicados por nossa equipe</p>
                </h5>
                <ul style="padding-left: 0px;">
                    <a href="#"><li>AAAAAAAA</li></a>
                    <a href="#"><li>BBBBBBBB</li></a>
                    <a href="#"><li>CCCCCCCC</li></a>
                    <a href="#"><li>DDDDDDDD</li></a>
                    <a href="#"><li>EEEEEEEE</li></a>
                    <a href="#"><li>FFFFFFFF</li></a>
                    <a href="#"><li>GGGGGGGG</li></a>
                    <a href="#"><li>HHHHHHHH</li></a>
                    <a href="#"><li>IIIIIIII</li></a>
                    <a href="#"><li>VVVVVVVV</li></a>
                </ul>
                <center><a href="#">Ver mais</a></center>
                <br>
            </div>
        </div>
    </div>
</main>
<?php include("footer.php")?>
</body>
</html>