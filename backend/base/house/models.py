from django.db import models

# Create your models here.
class HouseModel(models.Model):
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=100)
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField()
    sqft = models.IntegerField()
    build = models.DateTimeField()
