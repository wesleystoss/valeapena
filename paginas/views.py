from django.shortcuts import render, get_object_or_404

#Páginas genéricas
def index(request):
    return render(request, 'paginas/index.html')

def busca(request):
    return render(request, 'paginas/busca.html', {
        'lista_produtos_e_servicos': ("Celulares e smartphones", "Relógios", "Camisetas, blusas e camisas femininas", "Cartões de memória","Barras de cereal", "Maquiagem sem crueldade", "Matcha em pó/chá"),
        'termo_procurado': request.GET.get('q','')
    })

def sobre(request):
    return render(request, 'paginas/sobre.html')

def ranking(request):
    return render(request, 'paginas/ranking.html')

def compare(request):
    return render(request, 'paginas/compare.html')

def empresas(request):
    return render(request, 'paginas/empresas.html')

def enquetes(request):
    return render(request, 'paginas/enquetes.html')

def faq(request):
    return render(request, 'paginas/faq.html')

def termo_privacidade(request):
    return render(request, 'paginas/termo-privacidade.html')

def login(request):
    return render(request, 'paginas/login.html')

# Control do fórum

def forum(request):
    return render(request, 'paginas/forum/index.html')

def post(request):
    return render(request, 'paginas/forum/post.html')

def forum_publicar(request):
    return render(request, 'paginas/forum/publicar.html',{
        'q': request.GET.get('q','')
    })

def artigos(request):
    return render(request, 'paginas/artigos.html')

#Páginas de acessos do usuário
def meus_dados(request):
    return render(request, 'paginas/usuario/meus_dados.html')

def criar_conteudo(request):
    return render(request, 'paginas/usuario/criar_conteudo.html')

def usuario_seguranca(request):
    return render(request, 'paginas/usuario/seguranca.html')

def usuario_alertas(request):
    return render(request, 'paginas/usuario/alertas.html')

def acessos_recentes(request):
    return render(request, 'paginas/usuario/acessos_recentes.html')
    
# Newslestter
def news_artigos(request):
    return render(request, 'paginas/usuario/newslestter/artigos.html')

def news_empresas(request):
    return render(request, 'paginas/usuario/newslestter/empresas.html')

def news_enquetes(request):
    return render(request, 'paginas/usuario/newslestter/enquetes.html')

# Visualizando a empresa
def ver_empresa(request):
    return render(request, 'paginas/empresa/comentarios.html')

def ver_empresa_avaliacoes(request):
    return render(request, 'paginas/empresa/avaliacoes.html', {
        'tipo_avaliacao': request.GET.get('p', 'Todas')
    })


# Funções locais
