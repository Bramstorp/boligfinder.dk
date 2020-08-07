from rest_framework import permissions
from .models import ListingModel
from .serializers import ListingSerializer

"""
from rest_framework import viewsets

class ListingViewSet(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    queryset = ListingModel.objects.all()
"""

from rest_framework.generics import (
    ListCreateAPIView
)

class ListingistView(ListCreateAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )