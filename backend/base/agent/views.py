from rest_framework import viewsets

from .models import AgentModel
from .serializers import AgentSerializer
from rest_framework.permissions import AllowAny

from rest_framework.generics import (
    ListCreateAPIView, # post // Create
    RetrieveUpdateAPIView, # GET / PUT / PATCH
    RetrieveDestroyAPIView, # GET / DELETE
)

# class AgentViewSet(viewsets.ModelViewSet):
#     permission_classes = [AllowAny]
#     serializer_class = AgentSerializer
#     queryset = AgentModel.objects.all()

class AgentListCreateAPIView(ListCreateAPIView): 
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permissions_classes = (permission.AllowAny, )

class AgentUpdateView(RetrieveUpdateAPIView):   
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permissions_classes = (permission.AllowAny, )

class AgentDeleteView(RetrieveDestroyAPIView):
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permissions_classes = (permission.AllowAny, )