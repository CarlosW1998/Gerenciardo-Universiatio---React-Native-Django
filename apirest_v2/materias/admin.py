# -*- coding: utf-8 -*-
from django.contrib import admin
from .models import materias

# Register your models here.

@admin.register(materias)
class materiasAdmin(admin.ModelAdmin):
    list_display = ('id', 'usuario', 'dados')


