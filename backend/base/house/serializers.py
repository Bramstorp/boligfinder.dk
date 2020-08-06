from rest_framework import serializers
from .models import HouseModel

class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseModel
        fields = "_all_"