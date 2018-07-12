from django.conf.urls import url, include
from django.contrib import admin
from materias.views import criarUsuario

admin.autodiscover()

urlpatterns = [
    url('admin/', admin.site.urls),

    #Django Oauth Toolkit urls
    #Urls do DOT para as operacoes de autenticacao e aplicacoes
    url('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),

    #Cria novos usuarios ao sistema - Nao necessita de autenticacao
    #POST - recebe no Body o nome do usuario e a senha
    url(r'^criarusuario/$', criarUsuario.as_view()),

    #Consultas a lista de Materias - Necessita de Autentiacao
    #Ver endpoints em 'materias.urls' para ver as operacoes possiveis
    url(r'^materias/', include('materias.urls')),
]
