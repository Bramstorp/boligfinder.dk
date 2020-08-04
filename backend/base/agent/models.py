from django.db import models

# Create your models here.
class AgentModel:
    full_name = models.CharField(max_length=50)
    photo = models.ImageField()
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    top_seller = models.BooleanField(default=False)
    date_hired = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
    	return self.full_name