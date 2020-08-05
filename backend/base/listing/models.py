from django.db import models

# Create your models here.
class ListingModel(models.model)
	SALETYPE = [
	    ('FOR_SALE', 'For Sale'),
	    ('FOR_RENT', 'For Rent'),
	]
	HOUSETYPE = [
	    ('APARTMENT', 'Apartment'),
	    ('VILLA', 'Villa'),
	    ('TERRACED_HOUSE', 'Terraced house'),
	    ('FARM_HOUSE', 'Farm house'),
	    ('MANSION', 'Mansion')

	]
	slug = model.CharField(max_length=50),
	title = model.CharField(max_length=50),
	description = model.TextField(),
	sale_type = model.CharField(choices=HOUSETYPE)
	price = model.IntegerField(),
	home_type = model.CharField(choices=HouseType),
	open_house = models.BooleanField(default=False),
	main_image = models.ImageField(),
	image_1 = models.ImageField(),
	image_2 = models.ImageField(),
	image_3 = models.ImageField(),
	image_4 = models.ImageField(),
	image_5 = models.ImageField(),
	image_6 = models.ImageField(),
	image_7 = models.ImageField(),
	image_8 = models.ImageField(),
	image_9 = models.ImageField(),
	image_10 = models.ImageField(),
	is_published = models.BooleanField(default=True),
	listed_date = models.DateTimeField(auto_now_add=True)