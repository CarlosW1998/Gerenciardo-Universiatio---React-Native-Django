from django.conf.urls import url
from materias import views

urlpatterns = [
    url(r'^materias/$', views.listaDeMaterias.as_view()),
    url(r'^materias/(?P<pk>[0-9]+)$', views.detalhesDasMaterias.as_view()),
]