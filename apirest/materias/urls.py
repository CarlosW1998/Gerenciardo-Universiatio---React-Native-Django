from django.conf.urls import url
from materias import views

urlpatterns = [
    url(r'^materias/$', views.listaDeMaterias),
    url(r'^materias/(?P<pk>[0-9]+)$', views.detalhesDasMaterias),
]