from django.conf.urls import url
from materias import views
from django.conf.urls import include

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^criarusuario/$', views.criarUsuario.as_view()),
    url(r'^materias/$', views.listaDeMaterias.as_view()),
    url(r'^materias/(?P<pk>[0-9]+)$', views.detalhesDasMaterias.as_view()),
]