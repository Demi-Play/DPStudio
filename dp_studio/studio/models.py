from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='projects')  # Установите SET_NULL
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Track(models.Model):
    project = models.ForeignKey(Project, related_name='tracks', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    audio_file = models.FileField(upload_to='tracks/')  # или используйте другую модель для хранения аудио
    created_at = models.DateTimeField(auto_now_add=True)
