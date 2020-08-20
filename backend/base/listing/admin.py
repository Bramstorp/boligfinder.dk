from django.contrib import admin
from .models import ListingModel, HouseModel

# Register your models here.

admin.site.register(ListingModel)
admin.site.register(HouseModel)