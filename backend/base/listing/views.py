from rest_framework import viewsets

from .models import ListingModel
from .serializers import ListingSerializer

class ListingViewSet(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    queryset = ListingModel.objects.all()