from django.urls import path
from . import views

urlpatterns = [
    
    #Home pages
    path('', views.index, name="index"),
    path('busca/', views.busca, name="busca"),
    path('sobre/', views.sobre, name="sobre"),
    path('ranking/', views.ranking, name="ranking"),
    path('compare/', views.compare, name="compare"),
    path('empresas/', views.empresas, name="empresas"),
    path('termo/privacidade', views.termo_privacidade, name="termo_privacidade"),

    # Enquetes
    path('enquetes/', views.enquetes, name="enquetes"),

    # FAQ - Central de ajuda
    path('faq/', views.faq, name="faq"),

    #Fórum
    path('forum/', views.forum, name="forum"),
    path('forum/publicar', views.forum_publicar, name="forum_publicar"),


    # Artigos
    path('artigos/', views.artigos, name="artigos"),

    # Área do usuário
    path('usuario/', views.meus_dados, name="meus_dados"),
    path('usuario/conteudo', views.criar_conteudo, name="criar_conteudo"),
    path('usuario/alertas', views.usuario_alertas, name="alertas"),
    path('usuario/seguranca', views.usuario_seguranca, name="seguranca"),
    path('usuario/newslestter/artigos', views.news_artigos, name="news_artigos"),
    path('usuario/newslestter/empresas', views.news_empresas, name="news_empresas"),
    path('usuario/newslestter/enquetes', views.news_enquetes, name="news_enquetes"),
    
    # Visualizando a empresa
    path('busca/empresa/comentarios', views.ver_empresa, name="ver_empresa"),
    path('busca/empresa/avaliacoes', views.ver_empresa_avaliacoes, name="ver_empresa_avaliacoes"),
]