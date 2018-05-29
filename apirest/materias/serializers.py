from rest_framework import serializers
from materias.models import materias
from django.contrib.auth.models import User

class usuarioSerializer(serializers.ModelSerializer) :
    class Meta :
        model = User
        fields = ('id', 'username', 'password')

class materiaSerializer(serializers.ModelSerializer) :
    class Meta :
        model = materias
        fields = ('usuario', 'nome', 'ab1', 'ab2', 'reav', 'final', 'media', 'faltas', 'carga_horaria', 'max_faltas', 'conceito')