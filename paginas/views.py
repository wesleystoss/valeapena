from django.shortcuts import render, get_object_or_404

#Páginas genéricas
def index(request):
    return render(request, 'paginas/index.html')

def busca(request):
    return render(request, 'paginas/busca.html', {
        'lista_produtos_e_servicos': ("Celulares e smartphones", "Relógios", "Camisetas, blusas e camisas femininas", "Cartões de memória","Barras de cereal", "Maquiagem sem crueldade", "Matcha em pó/chá"),
        'termo_procurado': request.GET.get('s')
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

def forum(request):
    return render(request, 'paginas/forum.html')

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
    
# Newslestter
def news_artigos(request):
    return render(request, 'paginas/usuario/newslestter/artigos.html')


def news_empresas(request):
    return render(request, 'paginas/usuario/newslestter/empresas.html')

def news_enquetes(request):
    return render(request, 'paginas/usuario/newslestter/enquetes.html')



# Funções locais
