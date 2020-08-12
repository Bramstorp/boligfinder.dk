from rest_framework import permissions
from .models import ListingModel
from .serializers import ListingSerializer

from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveDestroyAPIView,
    ListAPIView
)

class ListingListView(ListAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

class ListingUpdateView(RetrieveUpdateAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

class ListingCreateView(ListCreateAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

class ListingDeleteView(RetrieveDestroyAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

class ListingObjectsView(ListAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )