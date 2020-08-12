from rest_framework import viewsets
from rest_framework import permissions
from .models import AgentModel
from .serializers import AgentSerializer

from rest_framework.generics import (
    ListCreateAPIView, # post // Create
    RetrieveUpdateAPIView, # GET / PUT / PATCH
    RetrieveDestroyAPIView, # GET / DELETE
)

class AgentListCreateAPIView(ListCreateAPIView): 
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permission_classes = (permissions.AllowAny, )

class AgentUpdateView(RetrieveUpdateAPIView):   
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permission_classes = (permissions.AllowAny, )

class AgentDeleteView(RetrieveDestroyAPIView):
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permission_classes = (permissions.AllowAny, )