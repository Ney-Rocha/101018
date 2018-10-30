from django import forms
from .import models

class AlunoForms(forms.ModelForm):

    class Meta:
        model = models.Aluno
        fields = "__all__"