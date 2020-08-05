from django.db import models

# Create your models here.
class ListingModel(models.model)
	SaleType = [
	    ('FOR_SALE', 'For Sale'),
	    ('FOR_RENT', 'For Rent'),
	]
	HouseType = [
	    ('APARTMENT', 'Apartment'),
	    ('VILLA', 'Villa'),
	    ('TERRACED_HOUSE', 'Terraced house'),
	    ('FARM_HOUSE', 'Farm house'),
	    ('MANSION', 'Mansion')

	]
	slug = model.CharField(max_length=50),
	title = model.CharField(max_length=50),
	description = model.TextField(),
	sale_type = model.CharField(choices=SaleType)
	price = model.IntegerField(),
	home_type = model.CharField(choices=HouseType),
	open_house = models.BooleanField(default=False),
	main_image = models.ImageField(),
	image_1/20 = models.ImageField(),
	is_published = models.BooleanField(),
	listed_date = models.DateTimeField()