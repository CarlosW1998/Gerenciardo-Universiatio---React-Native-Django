from django.shortcuts import render
from materias.models import materias
from materias.serializers import materiaSerializer, usuarioSerializer
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
    permission_classes = (permissions.IsAuthenticated,)
    queryset = materias.objects.all()
    serializer_class = materiaSerializer

class detalhesDasMaterias(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = materias.objects.all()
    serializer_class = materiaSerializer



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
#         materia = materias.objects.get(pk = pk)
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
