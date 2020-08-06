from rest_framework import viewsets

from .models import HouseModel
from .serializers import HouseSerializer

# Create your views here.
class HouseViewSet(viewsets.ModelViewSet):
    serializer_class = HouseSerializer
    queryset = HouseModel.objects.all()