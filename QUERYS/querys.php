<?php
session_start();
include("conexao.php");

//Seta o formulário que está sendo preenchido e próximas ações
$form_name = filter_input(INPUT_POST, "form_name");

//Validar login
if($form_name==="fazer_login"){
    $email = filter_input(INPUT_POST, "email");
    $senha = filter_input(INPUT_POST, "senha");

    $query = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha';";
    $result = mysqli_query($conn, $query);
    $row_usu = mysqli_fetch_assoc($result);

    $row = mysqli_num_rows($result);
    
    //Verifica se o login foi feito
    if($row === 1){
        $_SESSION['logado'] = true;
        //Armazena dados do usuário
        $_SESSION['id_usr'] = $row_usu['id_usr'];
        $_SESSION['nome'] = $row_usu['nome'];
        $_SESSION['sobrenome'] = $row_usu['sobrenome'];
        $_SESSION['sobrenome'] = $row_usu['email'];
        $_SESSION['login_efetuado'] = true;
        //header(sprintf('location: %s', $_SERVER['HTTP_REFERER']));
        header("Location: ../index.php");
    }else{
        $_SESSION['usuario_nao_localizado'] = true;
        header("Location: http://localhost/valeapena/cadastrar.php");
    }
}

$id_usr = $_SESSION['id_usr'];

$tipo_perfil = filter_input(INPUT_POST, "tipo_perfil");
$nome = filter_input(INPUT_POST, "nome");
$sobrenome = filter_input(INPUT_POST, "sobrenome");
$sexo = filter_input(INPUT_POST, "sexo");
$email = filter_input(INPUT_POST, "email");
$telefone = filter_input(INPUT_POST, "telefone");
$celular = filter_input(INPUT_POST, "celular");
$faixa_renda = filter_input(INPUT_POST, "faixa_renda");
$data_nascimento = filter_input(INPUT_POST, "data_nascimento");
$cep = filter_input(INPUT_POST, "cep");
$endereco = filter_input(INPUT_POST, "endereco");
$numero_end = filter_input(INPUT_POST, "numero_end");
$complemento_end = filter_input(INPUT_POST, "complemento_end");
$bairro = filter_input(INPUT_POST, "bairro");
$uf = filter_input(INPUT_POST, "uf");
$cidade = filter_input(INPUT_POST, "cidade");

if($form_name==="meu_perfil"){
    $sql = "UPDATE usuarios set nome='$nome', sobrenome='$sobrenome', sexo='$sexo', email='$email', telefone='$telefone', celular='$celular', faixa_renda='$faixa_renda', data_nascimento='$data_nascimento', cep='$cep', endereco='$endereco', numero_end='$numero_end', complemento_end='$complemento_end', bairro='$bairro', uf='$uf', cidade='$cidade' WHERE id_usr = '$id_usr'";
    $app = mysqli_query($conn, $sql);
    header("Location: ../perfil.php?card=1");
}
if($form_name==="novo_usr"){
    //Verifica se o email já consta na base
    $sql = "SELECT COUNT('id_usr') AS usr_base FROM usuarios WHERE email='$email'";
    $app = mysqli_query($conn, $sql);
    $usr_db = mysqli_fetch_assoc($app);
    
    //Se não estiver na base, então cadastra
    if($usr_db['usr_base']<1){
        $sql = "INSERT INTO usuarios (tipo_perfil, nome, email, senha) VALUES ('$tipo_perfil', '$nome', '$email', '$senha')";
        $app = mysqli_query($conn, $sql);

    //Fazer login no novo usuário
    $query = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha';";
    $result = mysqli_query($conn, $query);
    $row_usu = mysqli_fetch_assoc($result);

    $row = mysqli_num_rows($result);
    
    //Verifica se o login foi feito
    if($row === 1){
        $_SESSION['logado'] = true;
        //Armazena dados do usuário
        $_SESSION['id_usr'] = $row_usu['id_usr'];
        $_SESSION['nome'] = $row_usu['nome'];
        $_SESSION['sobrenome'] = $row_usu['sobrenome'];
        $_SESSION['sobrenome'] = $row_usu['email'];
        $_SESSION['login_efetuado'] = true;
        header("Location: ../index.php");
    }      
    }else{
        $_SESSION['nao_cadastrado'] = true;
        header("Location: ../cadastrar.php");
    }
}
if($form_name==="alterar_senha"){
    $n1_senha = filter_input(INPUT_POST, "n1_senha");
    $n2_senha = filter_input(INPUT_POST, "n2_senha");

    if($n1_senha===$n2_senha){
        $sql = "UPDATE usuarios SET senha='$n2_senha' WHERE id_usr='$id_usr'";
        $app = mysqli_query($conn, $sql);
        $_SESSION['senha_alterada'] = true;
        header("Location: ../seguranca.php");
    }else{
        $_SESSION['senha_nao_alterada'] = true;
        header("Location: ../seguranca.php");
    }

}
?>