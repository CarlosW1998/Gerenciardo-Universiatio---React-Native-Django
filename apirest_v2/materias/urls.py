from django.conf.urls import url
from .views import ListaDeMaterias, detalhesDasMaterias

urlpatterns = [
    #Consulta a lista de Materias inteira
    #GET - retorna a lista de todas a materias associadas ao usuario
    #POST- recebe no Body os dados referentes a materia adicionada
    url(r'^$', ListaDeMaterias.as_view()),

    #Consulta uma materia epecifica passando seu id
    #GET - retorna os dados da materia solicitada caso exista
    #PUT - atualiza os dados da materia, recebe no Body os dados da materia atualizados
    #DELETE - apaga do sistema a materia selecionada
    url(r'^(?P<pk>[0-9]+)$', detalhesDasMaterias.as_view()),
]
