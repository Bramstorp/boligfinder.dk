from django.db import models
from ..house.models import HouseModel

# Create your models here.
class ListingModel(models.Model):
	
	SALETYPE = (
		("FOR_SALE", "For Sale"),
		("FOR_RENT", "For Rent"),
	)

	slug = models.CharField(max_length=50, null=True, blank=True)
	title = models.CharField(max_length=50, null=True, blank=True)
	description = models.TextField(null=True)
	sale_type = models.CharField(max_length=50, null=True, choices=SALETYPE)
	price = models.IntegerField(null=True, blank=True)
	main_image = models.ImageField(blank=True, null=True)
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
	house = models.ForeignKey(HouseModel, on_delete=models.CASCADE)

	def __str__(self):
		return self.title