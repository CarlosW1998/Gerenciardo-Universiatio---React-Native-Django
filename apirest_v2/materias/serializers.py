from rest_framework import serializers
from materias.models import materias
from django.contrib.auth.models import User

class usuarioSerializer(serializers.ModelSerializer) :
    password = serializers.CharField(write_only=True)
    class Meta :
        model = User
        fields = ('id', 'username', 'password')
    def create(self, validated_date) :
        user = super(usuarioSerializer, self).create(validated_date)
        user.set_password(validated_date['password'])
        user.save()
        return user

class materiaSerializer(serializers.ModelSerializer) :
    id = serializers.IntegerField(read_only=True)
    class Meta :
        model = materias
        fields = '__all__'


