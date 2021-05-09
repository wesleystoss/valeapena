from django.shortcuts import render, get_object_or_404
import requests

#Páginas genéricas
def index(request):
    return render(request, 'paginas/index.html')

def busca(request):
    return render(request, 'paginas/busca.html')

def sobre(request):
    return render(request, 'paginas/sobre.html')

def ranking(request):
    return render(request, 'paginas/ranking.html')

#Páginas de acessos do usuário
def meus_dados(request):
    return render(request, 'paginas/usuario/meus_dados.html')

def usuario_seguranca(request):
    return render(request, 'paginas/usuario/seguranca.html')
