from django.db import models
class teste(models.Model):

    def __str__(self):
        return self.nome + " - "+ self.email

    nome = models.TextField(max_length=255)
    email = models.TextField(max_length=255)