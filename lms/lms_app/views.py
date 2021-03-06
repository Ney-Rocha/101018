from django.shortcuts import render
from lms_app.models import Aluno
from lms_app.forms import AlunoForms


# Creado as viwes abaixo.

def Home(request):
    return render(request, 'login.html', {})

def CadastrarUsuario(request):
    return render(request, 'cadastrarUsuario.html', {})

def CursoDisciplina(request):
    return render(request, 'cursoDisciplina.html', {})

def ConsultarCadastro(request):
    return render(request, 'consultarCadastro.html', {})

def Aluno(request):
    return render(request, 'aluno.html', {})

def Atividade(request):
    return render(request, 'Atividade.html', {})

def AtividadeVinculada(request):
    return render(request, 'atividadeVinculada.html', {})

def Coordenador(request):
    return render(request, 'coordenador.html', {})

def Curso(request):
    return render(request, 'curso.html', {})

def Disciplina(request):
    return render(request, 'disciplina.html', {})

def DisciplinaOfertada(request):
    return render(request, 'disciplinaOfertada.html', {})

def Entrega(request):
    return render(request, 'entrega.html', {})

def Mensagem(request):
    return render(request, 'mensagem.html', {})

def Professor(request):
    return render(request, 'professor.html', {})

def Usuario(request):
    return render(request, 'usuario.html', {})
