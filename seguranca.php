<?php 
session_start();
include("header.php");
?>

<!DOCTYPE html>
<html>
<head>
<title>Vale a pena</title>
<style>
main{
    margin-top: 80px;
}
</style>
</head>
<body>
<main>
    <div class="container card" style="max-width: 600px;">
    <h5>Alteração de senha</h5>
    <form method="POST" action="QUERYS/querys.php">
    <input type="hidden" name="form_name" value="alterar_senha">
    <div class="mb-3">
        <label>Digite a nova senha</label>
        <input type="password" class="form-control" name="n1_senha">
    </div>
    <div class="mb-3">
        <label>Digite novamente a nova senha</label>
        <input type="password" class="form-control" name="n2_senha">
    </div>
    <button class="btn btn-success" type="submit">Salvar</button>
    </form>
    <?php if(!empty($_SESSION['senha_alterada'])):?>
    <b>Senha alterada com sucesso!</b>
    <?php unset($_SESSION['senha_alterada']);endif; ?>

    <?php if(!empty($_SESSION['senha_nao_alterada'])):?>
    <b>As senhas não são iguais!</b>
    <?php unset($_SESSION['senha_nao_alterada']);endif; ?>

<script>
// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
    var forms = document.getElementsByClassName('needs-validation');
    // Faz um loop neles e evita o envio
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
</script>
    </div>
</main>
<?php include("footer.php");?>
</body>
</html>