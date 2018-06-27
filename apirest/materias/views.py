from django.shortcuts import render
from materias.models import materias
from materias.serializers import materiaSerializer, usuarioSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import permissions

class criarUsuario(generics.CreateAPIView) :
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = usuarioSerializer

class listaDeMaterias(generics.ListCreateAPIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication, JSONWebTokenAuthentication)
    permission_classes = (permissions.IsAuthenticated,)
    queryset = materias.objects.filter()
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
    authentication_classes = (SessionAuthentication, BasicAuthentication, JSONWebTokenAuthentication)
    Spermission_classes = (permissions.IsAuthenticated,)
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







# @api_view(['GET', 'POST'])
# def listaDeMaterias(request) :
#     if request.method == 'GET' :
#         lista =  materias.objects.all()
#         serializer = materiaSerializer(lista, many = True)
#         return Response(serializer.data)
#     if request.method == 'POST' :
#         serializer = materiaSerializer(materias, data = request.data)
#         if serializer.is_valid() :
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'PUT', 'DELETE'])
# def detalhesDasMaterias(request, pk) :
#     try :
#         materia = materias.objects.get(pk = pk and request.user = usuario)
#     except materias.DoesNotExist :
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     if request.method == 'GET' :
#         serializer = materiaSerializer(materia)
#         return Response(serializer.data)
#     if request.method == 'PUT' :
#         serializer = materiaSerializer(materia, data = request.data)
#         if serializer.is_valid() :
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, stataus= status.HTTP_400_BAD_REQUEST)
#     if request.method == 'DELETE' :
#         materia.delete()
#         return Response(satatus = status.HTTP_205_RESET_CONTENT)
