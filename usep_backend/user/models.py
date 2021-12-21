from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(max_length=254, unique=True)
    username = models.CharField(max_length=250, unique=True)
    password = models.CharField(max_length=200)
    category = models.CharField(max_length=200, null=True)
