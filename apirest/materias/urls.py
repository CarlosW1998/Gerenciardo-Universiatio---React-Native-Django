from django.conf.urls import url
from materias import views
from django.conf.urls import include
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^criarusuario/$', views.criarUsuario.as_view()),
    url(r'^materias/$', views.listaDeMaterias.as_view()),
    url(r'^materias/(?P<pk>[0-9]+)$', views.detalhesDasMaterias.as_view()),
]