from django.db import models

# Create your models here.
class UserModel(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    adress = models.CharField(max_length=150)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
