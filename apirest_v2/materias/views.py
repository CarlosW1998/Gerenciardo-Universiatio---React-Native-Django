from django.http import HttpResponse
from rest_framework import generics
from .serializers import materiaSerializer, usuarioSerializer
from .models import materias
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from rest_framework import permissions
from oauth2_provider.views.token import AuthorizedTokenDeleteView
from oauth2_provider.contrib.rest_framework import OAuth2Authentication

class criarUsuario(generics.CreateAPIView) :
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = usuarioSerializer

class ListaDeMaterias(generics.ListCreateAPIView):
    queryset = materias.objects.all()
    serializer_class = materiaSerializer
    def list(self, request) :
        lista = materias.objects.filter(usuario = request.user)
        serializer = materiaSerializer(lista, many = True)
        return Response(serializer.data)

    def create(self, request) :
        serializer = materiaSerializer(data = request.data)
        if serializer.is_valid() :
            serializer.save(usuario = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class detalhesDasMaterias(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = materias.objects.all()
    serializer_class = materiaSerializer
    def retrieve(self, request, pk) :
        try :
            materia = materias.objects.filter(pk = pk, usuario = request.user)
        except materias.DoesNotExist :
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = materiaSerializer(materia, many = True)
        return Response(serializer.data)
    
    def update(self, request, pk) :
        try :
            materia = materias.objects.get(pk = pk, usuario = request.user)
        except materias.DoesNotExist :
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = materiaSerializer(materia, data = request.data)
        if serializer.is_valid() :
            serializer.save(usuario = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk) :
        try :
            materia = materias.objects.filter(pk = pk, usuario = request.user)
        except materias.DoesNotExist :
            return Response(status=status.HTTP_204_NO_CONTENT) 
        materia.delete()
        return Response(status = status.HTTP_205_RESET_CONTENT)




    