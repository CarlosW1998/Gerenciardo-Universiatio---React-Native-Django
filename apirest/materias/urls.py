from django.conf.urls import url
from materias import views
from django.conf.urls import include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
urlpatterns = [
    #Recebe o usuario e a senha, num metodo post e retorna um token para usar a api
    #Fora a criacao de usuario todos os metodos precisam estar autenticados para poderem ser acessados
    url(r'^api-token-auth/', obtain_jwt_token),

    #Recebe um usuario e senha, num metodo POST e cria um novo usuario
    url(r'^criarusuario/$', views.criarUsuario.as_view()),

    #Recebendo um metodo GET retorna todas a materias,
    #Recebendo um metodo POST cia uma nova materia, precisa dos dados pra nova materia
    url(r'^materias/$', views.listaDeMaterias.as_view()),

    #Recebendo um metodo GET + a primary key da materia passada na URL devolve uma materia especifica
    #Recebe  um metodo  PUT + a primary key da materia passada na URL + os dados, atualiza uma materia
    #Recebe  um metodo  DELETE + a primary key da materia passada na URL Deleta a materia passada
    url(r'^materias/(?P<pk>[0-9]+)$', views.detalhesDasMaterias.as_view()),
]
