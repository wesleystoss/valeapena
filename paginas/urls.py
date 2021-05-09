from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('busca/', views.busca, name="busca"),
    path('sobre/', views.sobre, name="sobre"),
    path('ranking/', views.ranking, name="ranking"),
    path('empresas/', views.empresas, name="empresas"),
    path('enquetes/', views.enquetes, name="enquetes"),
    path('faq/', views.faq, name="faq"),
    path('forum/', views.forum, name="forum"),
    path('artigos/', views.artigos, name="artigos"),
    path('usuario/', views.meus_dados, name="meus_dados"),
    path('usuario/seguranca', views.usuario_seguranca, name="seguranca"),
]