<?php
$pesquisa = filter_input(INPUT_GET, "pesquisa");
?>

<!DOCTYPE html>
<html>
<head>
<title>Vale a pena</title>
<!--Jquery-->
    <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.js"></script>
    <script>
        $('#cnpj').mask('00.000.000/0000-00', {reverse: true});
    </script>
</head>
<?php include("header.php");?>
<body>
<main class="container">
    <div class="titulo_pesquisa" style="padding-top: 25px;">
        <center>
            <span>Resultados para: "<b><?php echo $pesquisa;?></b>"</span><br><br>
        </center>
    </div>
    <div class="row">
        <div class="dica-filtro col-3">
            <button class="btn btn-outline-warning mb-3" style="width:100%;"><img src="IMG/icons/magic.svg" height="20px"> Busca avançada</button>
            <div class="alert alert-primary">
                <center><h4 class="alert-heading"><img src="IMG/icons/ideia.png" height="45px"></h4></center>
                <span>Nosso portal funciona através de pesquisas gerais. Isso quer dizer que em um único campo você pode pesquisar por empresas, produtos/serviços, comentários ou enquetes.</span>
            </div>
        </div>
        <section class="row col">
        <div class="container card empresas">
            <h5>Empresas 
            <p>AJSDHAKJDHJAS</p>
            </h5>
        </div>
        <div class="card container empresas">
            <h5>Comentários
            <p>AJSDHAKJDHJAS</p>
            </h5>
        </div>
        <div class="card container empresas">
            <h5>Enquetes
            <p>AJSDHAKJDHJAS</p>
            </h5>
        </div>
        <div class="card container empresas">
            <h5>Artigos
            <p>AJSDHAKJDHJAS</p>
            </h5>
        </div>
        </section>
    </div>
</main>
<?php include("footer.php")?>
</body>
</html>