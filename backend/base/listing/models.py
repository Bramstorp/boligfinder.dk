from django.db import models
from agent.models import AgentModel

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
	bathrooms = models.IntegerField(null=True)
	area = models.IntegerField(null=True)
	area_ground = models.IntegerField(null=True)
	floors = models.IntegerField(null=True)
	build_year = models.IntegerField(null=True)
	home_type = models.CharField(max_length=50, null=True, choices=HOUSETYPE)

	def __str__(self):
		return self.address
		
class ListingModel(models.Model):
	SALETYPE = (
		("FOR_SALE", "For Sale"),
		("FOR_RENT", "For Rent"),
	)

	agent = models.ForeignKey(AgentModel, on_delete=models.DO_NOTHING, null=True)
	slug = models.CharField(max_length=50, null=True, blank=True)
	title = models.CharField(max_length=50, null=True, blank=True)
	description = models.TextField(null=True)
	sale_type = models.CharField(max_length=50, null=True, choices=SALETYPE)
	price = models.IntegerField(null=True, blank=True)
	main_image = models.ImageField(upload_to="Images", blank=True, null=True)
	image_1 = models.ImageField(blank=True, null=True)
	image_2 = models.ImageField(blank=True, null=True)
	image_3 = models.ImageField(blank=True, null=True)
	image_4 = models.ImageField(blank=True, null=True)
	image_5 = models.ImageField(blank=True, null=True)
	image_6 = models.ImageField(blank=True, null=True)
	image_7 = models.ImageField(blank=True, null=True)
	image_8 = models.ImageField(blank=True, null=True)
	image_9 = models.ImageField(blank=True, null=True)
	image_10 = models.ImageField(blank=True, null=True)
	is_published = models.BooleanField(default=True)
	listed_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
	house = models.ForeignKey(HouseModel, related_name='house', on_delete=models.SET_NULL, null=True)
	open_house = models.BooleanField(default=False)

	def __str__(self):
		return self.title

