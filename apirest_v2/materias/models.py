from django.contrib.postgres.fields import JSONField
from django.db import models

# Create your models here.
class materias(models.Model) :
    usuario = models.ForeignKey('auth.User', related_name= 'materias', on_delete=models.CASCADE, default = 1)
    dados = JSONField(blank=True, null=True)


