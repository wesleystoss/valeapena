<?php 
session_start();
//Verifica login
if(empty($_SESSION['logado'])){
    header("Location: index.php?usr=N");
}
$card_selecionado = filter_input(INPUT_GET, "card");
?>

<!DOCTYPE html>
<html>
<head>
<title>Vale a pena</title>
<?php include("header.php");?>
<script>
$(document).ready(function () { 
    $(['#cep']).mask('00000-000', {reverse: true});
    $(['#telefone']).mask('(00) 0000-0000');
    $(['#celular']).mask('(00) 9 0000-0000');
    $(['#data']).mask('00/00/0000');
});
</script>
</head>
<body>
<main style="margin-top: 80px;">
<div class="container card">
    <a href=""><h5>Meus dados</h5></a>
    <?php
        $id_usr = $_SESSION['id_usr'];
        $sql_usu = "SELECT * FROM usuarios WHERE id_usr='$id_usr'";
        $result_usu = mysqli_query($conn, $sql_usu);
        $row_usu = mysqli_fetch_assoc($result_usu);
    ?>
    <form style="<?php if($card_selecionado<>"1"){echo 'display: none;';}?>" method="POST" action="QUERYS/querys.php">
    <div class="row container">
        <input type="hidden" name="form_name" value="meu_perfil">
        <img src="IMG/usuario/perfil/no-user.png" class="img_user rounded-circle" width="100px;">
        <div style="margin-top: 1%; margin-left: 30px;">
        <b>Selecione uma nova imagem</b>
        <input type="file" class="form-control"  style="max-width: 400px;">
        <span style="color: #aaa;">Arquivos aceitos: jpg, jpeg, png, bmp e pdf.<span>
        </div>
    </div>
    <hr>
    <h3>Seus dados</h3>
    <div class="row">
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" name="nome" value="<?php echo $row_usu['nome'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/user.svg" height="15px"></span>
            </div>
        </div>
        <div class="col"></div>
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" id="data" name="data_nascimento" placeholder="EX.: 31/12/1999" value="<?php echo $row_usu['data_nascimento'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/date.svg" height="15px"></span>
            </div>
        </div>
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" name="sobrenome" value="<?php echo $row_usu['sobrenome'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/user.svg" height="15px"></span>
            </div>
        </div>
        <div class="col"></div>
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" id="cep" name="cep" placeholder="Ex.: 00000-000" value="<?php echo $row_usu['cep'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/location.svg" height="15px"></span>
            </div>
        </div>
        <div class="input-group mb-3 col-5">
            <select class="form-control" name="sexo">
                <option style="display: none;" value="<?php echo $row_usu['sexo'];?>"><?php echo $row_usu['sexo'];?></option>
                <option>Selecione o sexo...</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
        </div>
        <div class="col"></div>
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" name="endereco" value="<?php echo $row_usu['endereco'];?>" >
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/location.svg" height="15px"></span>
            </div>
        </div>
        <div class="input-group mb-3 col-5">
            <input type="email" class="form-control" name="email" value="<?php echo $row_usu['email'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/mail.svg" height="15px"></span>
            </div>
        </div>
        <div class="col"></div>
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" name="numero_end" value="<?php echo $row_usu['numero_end'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/location.svg" height="15px"></span>
            </div>
        </div>
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" id="telefone" name="telefone" value="<?php echo $row_usu['telefone'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/phone.svg" height="15px"></span>
            </div>
        </div>
        <div class="col"></div>
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" name="complemento_end" value="<?php echo $row_usu['complemento_end'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/location.svg" height="15px"></span>
            </div>
        </div>
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" id="celular" name="celular" value="<?php echo $row_usu['celular'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/phone.svg" height="15px"></span>
            </div>
        </div>
        <div class="col"></div>
        <div class="input-group mb-3 col-5">
            <input type="text" class="form-control" name="bairro" value="<?php echo $row_usu['bairro'];?>">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/location.svg" height="15px"></span>
            </div>
        </div>
        <div class="input-group mb-3 col-5">
            <select class="form-control"  name="faixa_renda">
                <option style="display: none;" value="<?php echo $row_usu['faixa_renda'];?>"><?php echo $row_usu['faixa_renda'];?></option>
                <option value="">Faixa de renda...</option>
                <option value="Até R$ 1.996,00">Até R$ 1.996,00</option>
                <option value="R$ 1.996,01 a R$ 3.992,00">R$ 1.996,01 a R$ 3.992,00</option>
                <option value="R$ 3.992,01 a R$ 5.988,00">R$ 3.992,01 a R$ 5.988,00</option>
                <option value="R$ 5.988,01 a R$ 11.976,00">R$ 5.988,01 a R$ 11.976,00</option>
                <option value="Acima de R$ 11.976,00">Acima de R$ 11.976,00</option>
            </select>
        </div>
        <div class="col"></div>
        <div class="input-group mb-3 col-5">
            <div class="input-group-prepend">
                <select class="input-group-text" name="uf">
                    <option style="display: none;" value="<?php echo $row_usu['uf'];?>"><?php echo $row_usu['uf'];?></option>
                    <option value="">UF</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    <option value="EX">Estrangeiro</option>
                </select>
            </div>
            <select class="form-control" name="cidade">
                <option style="display: none;" value="<?php echo $row_usu['cidade'];?>"><?php echo $row_usu['uf'];?></option>
                <option value="" selected>Cidade</option>
            </select>
        </div>
    </div>
        <input type="submit" class="btn btn-outline-success mb-3 float-right" value="SALVAR">
    </form>
</div>
</main>
<?php include("footer.php");?>
</body>
</html>