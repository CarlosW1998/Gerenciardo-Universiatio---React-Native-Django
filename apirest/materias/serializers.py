from rest_framework import serializers
from materias.models import materias

class materiaSerializer(serializers.ModelSerializer) :
    class Meta :
        model = materias
        fields = ('nome', 'ab1', 'ab2', 'reav', 'final', 'media', 'faltas', 'carga_horaria', 'max_faltas', 'conceito')