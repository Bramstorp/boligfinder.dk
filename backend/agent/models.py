from django.db import models

# Create your models here.
class agentModel:
    name = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='photos')
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    top_seller = models.BooleanField(default=False)
    date_hired = models.DateTimeField(default=datetime.now, blank=True)