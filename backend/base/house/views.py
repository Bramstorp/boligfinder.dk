from rest_framework import viewsets
from rest_framework import permissions

from .models import HouseModel
from .serializers import HouseSerializer


from rest_framework.generics import (
    RetrieveUpdateAPIView, # GET / UPDATE
    RetrieveDestroyAPIView, # GET / DESTROY
    ListCreateAPIView, # GET / POST
    ListAPIView # GET
)

class HouseListAPIView(ListAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny, )

class HouseRetriveUpdateAPIView(RetrieveUpdateAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny, )

class HouseRetriveDestroyAPIView(RetrieveDestroyAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny, )

class HouseListCreateAPIView(ListCreateAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny, )