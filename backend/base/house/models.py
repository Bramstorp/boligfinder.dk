from django.db import models

# Create your models here.
class HouseModel(models.Model):
	HOUSETYPE = (
	    ("APARTMENT", "Apartment"),
	    ("VILLA", "Villa"),
	    ("TERRACED_HOUSE", "Terraced house"),
	    ("FARM_HOUSE", "Farm house"),
	    ("MANSION", "Mansion"),
	)

	address = models.CharField(max_length=150, null=True)
	city = models.CharField(max_length=100, null=True)
	state = models.CharField(max_length=100, null=True)
	zipcode = models.CharField(max_length=100, null=True)
	rooms = models.IntegerField(null=True)
	bedrooms = models.IntegerField(null=True)
	bathrooms = models.DecimalField(max_digits=5, decimal_places=2)
	area = models.IntegerField(null=True)
	area_ground = models.IntegerField(null=True)
	floors = models.IntegerField(null=True)
	build_year = models.DateTimeField(null=True)
	home_type = models.CharField(max_length=50, null=True, choices=HOUSETYPE)
