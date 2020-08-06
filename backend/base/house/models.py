from django.db import models

# Create your models here.
class HouseModel(models.Model):
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=100)
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=5, decimal_places=2)
    sqft = models.IntegerField()
    build = models.DateTimeField()
