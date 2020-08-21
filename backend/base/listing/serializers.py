from rest_framework import serializers
from .models import ListingModel, HouseModel

class ListingSerializer(serializers.ModelSerializer):
	class Meta:
		model = ListingModel
		fields = "__all__"
		depth = 1

class HouseSerializer(serializers.ModelSerializer):
	class Meta:
		model = HouseModel
		fields = "__all__"