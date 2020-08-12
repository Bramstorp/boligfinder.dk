from rest_framework import viewsets

from .models import HouseModel
from .serializers import HouseSerializer
from rest_framework.permissions import AllowAny

# # Create your views here.
# class HouseViewSet(viewsets.ModelViewSet):
#     serializer_class = HouseSerializer
#     queryset = HouseModel.objects.all()

from rest_framework.generics import (
    retriveUpdateAPIView # GET / UPDATE
    retriveDestroyAPIView # GET / DESTROY
    ListCreateAPIView # GET / POST
)

class HouseRetriveUpdateAPIView(retriveUpdateAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny(), )

class HouseRetriveDestroyAPIView(retriveDestroyAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny(), )

class HouseListCreateAPIView(ListCreateAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny(), )