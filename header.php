<?php
session_start();
error_reporting(0);
include("QUERYS/conexao.php");

$usr = filter_input(INPUT_GET, "usr");

//Encerrar todas as sessões
$logout = filter_input(INPUT_GET, "logout");
if($logout==="S"){
    if(!empty($_SESSION['logado'])){
      session_destroy();
      $_SESSION['logout'] = true;
    }
}
?>
<!--Adicionar links -->
<link rel="stylesheet" type="text/css" href="CSS/style.css">
<script src="JS/scripts.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
<link rel="shortcut icon" href="IMG/logo_semfundo.png">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js"></script>  
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

<header class="fixed-top">
<!--shadow pesquisa-->
<div class="wallpaper-shadow" id="wallpaper-shadow" onclick="ocultar_wallpaper_shadow()"></div>
<script>
function exibir_wallpaper_shadow(){
    document.getElementById("wallpaper-shadow").style.display = "initial";
    document.getElementById("buscador").style.zIndex = "999999";
    document.getElementById("result_previews").style.display = "initial";
    
}
function ocultar_wallpaper_shadow(){
    document.getElementById("wallpaper-shadow").style.display = "none";
    document.getElementById("buscador").style.zIndex = "9";
    document.getElementById("result_previews").style.display = "none";
}
</script>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: *#e3f2fd;">
  <a class="navbar-brand" href="./" style="font-weight: bold; color: #007bff!important;"><img src="IMG/logo_size_semfundo.png" style="height: 40px; margin-right: 7px;"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
        <a class="nav-link" href="#">Compare</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Rankings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Categorias</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Marketplace</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Artigos</a>
      </li>
      <!--<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>-->
      <li class="nav-item">
        <a class="nav-link" href="#">Institucional</a>
      </li>
    </ul>
    <?php 
        if($pag_site_atual!=="index"):
    ?>
    <form class="form-inline my-2 my-lg-0" style="position: relative; z-index: 999999;" action="search_results.php">
    <div class="input-group">
      <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg></span>
      </div>
      <input class="form-control mr-sm-2" type="search" onclick="exibir_wallpaper_shadow()" name="pesquisa" placeholder="Buscar..." aria-label="Search">
      </div>
      <div class="result_previews" id="result_previews">
          <div id="spinner" class="spinner-grow text-primary" role="status">
              <span class="sr-only">Loading...</span>
          </div>
      </div>
      <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
    </form>
    <?php endif; ?>
    <?php 
      if(empty($_SESSION['logado'])):
    ?>
      <a href="#" data-toggle="modal" data-target="#card_login"><b>Entrar</b></a>
      <?php 
        endif;
        if(!empty($_SESSION['logado'])):
      ?>
      <ul class="navbar-nav">
      <li class="nav-item dropdown mr-auto">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>Olá, <?php echo $_SESSION['nome']."!"; endif;?></b>
        </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="position: absolute!important;
    left: -60px;">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Marcas favoritadas</a>
            <a class="dropdown-item" href="#">Minhas atividades</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="http://localhost/valeapena/perfil.php?card=1">Meu perfil</a>
            <a class="dropdown-item" href="http://localhost/valeapena/seguranca.php">Segurança</a>
            <a class="dropdown-item" href="http://localhost/valeapena/index.php?logout=S">Sair</a>
          </div>
        </li>
      </ul>
  </div>
</nav>
</header>

<!--Card de login-->
<div class="modal fade login" id="card_login" tabindex="-1" aria-labelledby="card_login" aria-hidden="true">
  <div class="modal-dialog" style="width: 400px; top: 90px;">
    <div class="modal-content">
      <div class="modal-header" style="border-bottom: none!important;">
        <h5 class="modal-title" id="exampleModalLabel">Entre na sua conta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>Não tem uma conta? <a href="cadastrar.php">Cadastre-se grátis.</a></p>
        <form method="POST" action="QUERYS/querys.php">
          <input type="hidden" name="form_name" value="fazer_login">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/mail.svg" height="15px">
                <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
              </svg></span>
            </div>
            <input type="email" name="email" required class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/key.svg" height="15px">
                <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
                <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
              </svg></span>
            </div>
            <input type="password" name="senha" required placeholder="Senha" class="form-control">
          </div>
          <input type="submit" class="btn btn-primary" value="Entrar" style="width: 100%;">
          </form>
      </div>
    </div>
  </div>
</div>

<!--Ícone de ajuda-->
<div class="icon-ajuda fixed-bottom">
<div class="como-funciona" id="como-funciona">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <h4 class="alert-heading">Como funciona? <button type="button" class="close" onclick="ocultar_ajuda()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </h4>
        <p>Peça e ofereça ajuda a outros consumidores! Através da troca de experiências poderemos tomar decisões mais assertivas em um futuro não tão distante. É bem simples: Você pode abrir uma discussão no fórum para que a empresa ou outros consumidores possam participar. Você também pode abrir fazer uma pesquisa rápida de mercado através das enquetes.</p>
        <hr>
        <p class="mb-0">Confira <a href="#">AQUI</a> a nossa Central de Ajuda para mais detalhes.</p>
    </div>
</div>
<img src="IMG/icons/question.png" onclick="expandir_ajuda()" style="float: right; margin-right: 45px; margin-bottom: 16px; height: 45px;">
</div>
<script>
  function expandir_ajuda(){
    document.getElementById("como-funciona").style.display = "initial";
    var ajuda = "visivel";
  }
  function ocultar_ajuda(){
    document.getElementById("como-funciona").style.display = "none";
  }
</script>

<!--Alertas-->
  <!--Login efetuado com sucesso-->
    <?php if(!empty($_SESSION['login_efetuado'])): ?>
    <div class="alert btn-success alert-dismissible fade show col-3" style="top: 70px; right: 3px; position: fixed; z-index: 9;" role="alert">
      <strong>Login efetuado com sucesso!</strong><div class="dropdown-divider"></div>Seja bem-vindo(a) novamente! \o
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <?php unset($_SESSION['login_efetuado']); endif;?>

    <!--Logout efetuado com sucesso-->
    <?php if(!empty($_SESSION['logout'])): ?>
    <div class="alert btn-success alert-dismissible fade show col-3" style="top: 70px; right: 3px; position: fixed; z-index: 9;" role="alert">
      <strong>O seu usuário foi desconectado!</strong><div class="dropdown-divider"></div>Aguardamos o seu retorno em breve. :)
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <?php unset($_SESSION['logout']); endif;?>
    <!--Usuario não está logado-->
    <?php if($usr==="N"): ?>
    <div class="alert btn-danger alert-dismissible fade show col-3" style="top: 70px; right: 3px; position: fixed; z-index: 9;" role="alert">
      <strong>OPS!</strong><div class="dropdown-divider"></div>A página que tentou acessar necessita de um usuário logado!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <?php endif;?>