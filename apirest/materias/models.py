from django.db import models

# Create your models here.
class materias(models.Model) :
    usuario = models.ForeignKey('auth.User', related_name= 'materias', on_delete=models.CASCADE, default = 1)
    nome = models.CharField(max_length=200)
    ab1 = models.DecimalField(max_digits=6, decimal_places=2)
    ab2 = models.DecimalField(max_digits=6, decimal_places=2)
    reav = models.DecimalField(max_digits=6, decimal_places=2)
    final = models.DecimalField(max_digits=6, decimal_places=2)
    media = models.DecimalField(max_digits=6, decimal_places=2)
    faltas = models.IntegerField()    
    carga_horaria = models.IntegerField()
    max_faltas = models.IntegerField()
    conceito = models.CharField(max_length=200)
