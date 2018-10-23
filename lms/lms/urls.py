"""lms URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from lms_app import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
]
urlpatterns = [
    url(r'^$', views.Home, name="Home"),
    url(r'^cadastrarUsuario/$', views.CadastrarUsuario, name='CadastrarAluno'),
    url(r'^cursodisciplina/$', views.CursoDisciplina, name='CursoDisciplina'),
    url(r'^consultarcadastro/$', views.ConsultarCadastro, name='ConsultarCadastro'),
    url(r'^aluno/$', views.Aluno, name='Aluno'),
    url(r'^atividade/$', views.Atividade, name='Atividade'),
    url(r'^atividadevinculada/$', views.Atividade, name='AtividadeVinculada'),
    url(r'^coordenador/$', views.Coordenador, name='Coordenador'),
    url(r'^curso/$', views.Curso, name="Curso"),
    url(r'^disciplina/$', views.Disciplina , name='Disciplina'),
    url(r'^disciplinaofertada/$', views.DisciplinaOfertada , name='DisciplinaOfertada'),
    url(r'^entrega/$', views.Entrega , name='Entrega'),
    url(r'^mensagem/$', views.Mensagem , name='Mensagem'),
    url(r'^professor/$', views.Professor , name='Professor'),
    url(r'^usuario/$', views.Usuario , name='Usuario'),
]