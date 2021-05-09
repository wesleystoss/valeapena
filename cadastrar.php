<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
<title>Vale a pena</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<link rel="stylesheet" href="CSS/style.css"> 
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js"></script>
<script>
    function tipo_perfil(){
        var x = document.getElementById("tipo_perfil").value;
        if(x==="PF"){
            document.getElementById("form_pf").style.display = "initial";
            document.getElementById("form_pj").style.display = "none";
        }else{
            document.getElementById("form_pf").style.display = "none";
            document.getElementById("form_pj").style.display = "initial";
        }
    }
</script>
<script>
        $('#CPF').mask('000.000.000-00');
        $('#CNPJ').mask('00.000.000/0000-00');
  </script>
</head>
<header style="border-bottom: 1px solid #ccc; text-align: center; height: 60px;" >
<a href="index.php"><img src="IMG/logo_size_semfundo.png" style="padding-top: 8px;"></a>


<!--Usuario nao localizado-->
<?php if(!empty($_SESSION['usuario_nao_localizado'])): ?>
    <div class="alert btn-danger alert-dismissible fade show col-3" style="top: 70px; right: 3px; position: fixed; z-index: 9;" role="alert">
      <strong>OPS!</strong><div class="dropdown-divider"></div>Não conseguimos encontrar um usuário com os dados informados. Por gentileza, tente novamente
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <?php unset($_SESSION['usuario_nao_localizado']); endif;?>

</header>
<!--Cadastro não realizado-->
<?php if(!empty($_SESSION['nao_cadastrado'])): ?>
    <div class="alert btn-danger alert-dismissible fade show col-3" style="top: 70px; right: 3px; position: fixed; z-index: 9;" role="alert">
      <strong>OPS!</strong><div class="dropdown-divider"></div>Parece que o e-mail informado já consta como cadastrado.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
<?php unset($_SESSION['nao_cadastrado']); endif;?>

<body>
<main class="row">
<div class="container card col-5">
    <h5>Novo perfil
        <p>Ficamos contentes em tê-lo(a) conosco! ;)</p>
    </h5>
    <strong class="mb-3">Escolha o seu perfil</strong>
    <select class="form-control mb-3" onchange="tipo_perfil()" id="tipo_perfil" name="tipo_perfil">
        <option value="" style="display: none;">Selecione</option>
        <option value="PF">Cliente</option>
        <option value="PJ">Empresa</option>
    </select>
    <form method="POST" id="form_pf" style="display: none;" action="QUERYS/querys.php">
        <input type="hidden" name="form_name" value="novo_usr">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/user.svg" height="15px"></span>
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg></span>
          </div>
          <input type="text" class="form-control" required name="nome" placeholder="Nome">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/cpf.svg" height="15px"></span>
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg></span>
          </div>
          <input type="text" class="form-control" required name="CPF" id="CPF" placeholder="CPF">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/mail.svg" height="15px"></span>
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg></span>
          </div>
          <input type="email" class="form-control" required name="email" placeholder="E-mail">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/key.svg" height="15px"></span>
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg></span>
          </div>
          <input type="password" class="form-control" required minlength="8" name="senha" placeholder="Senha">
        </div>
        <input type="submit" class="btn btn-outline-primary mb-3" style="width:100%;" value="Cadastrar">
    </form>
    <form method="POST" id="form_pj" style="display: none;" action="QUERYS/querys.php">
        <input type="hidden" name="form_name" value="novo_usr">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/user.svg" height="15px"></span>
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg></span>
          </div>
          <input type="text" class="form-control" required name="nome_fantasia" placeholder="Nome fantasia">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/user.svg" height="15px"></span>
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg></span>
          </div>
          <input type="text" class="form-control" required name="nome_empresarial" placeholder="Nome empresarial">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/cpf.svg" height="15px"></span>
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg></span>
          </div>
          <input type="text" class="form-control" required name="CNPJ" id="CNPJ" placeholder="CNPJ">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/mail.svg" height="15px"></span>
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg></span>
          </div>
          <input type="email" class="form-control" required name="email" placeholder="E-mail">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/key.svg" height="15px"></span>
              <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg></span>
          </div>
          <input type="password" class="form-control" required minlength="8" name="senha" placeholder="Senha">
        </div>
        <input type="submit" class="btn btn-outline-primary mb-3" style="width:100%;" value="Cadastrar">
    </form>
</div>
<div class="container card col-5">
<h5>Minha conta
  <p>Já possui cadastro em nosso portal? Acesse-o rapidamente!</p>
</h5>
<form method="POST" action="QUERYS/querys.php">
          <input type="hidden" name="form_name" value="fazer_login">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon2"><img src="IMG/icons/mail.svg" height="15px">
                <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
              </svg></span>
            </div>
            <input type="email" name="email" required class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon2">
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
          <input type="submit" class="btn btn-outline-primary mb-3" value="Entrar" style="width: 100%;">
          </form>
</div>
</main>
</body>
</html>