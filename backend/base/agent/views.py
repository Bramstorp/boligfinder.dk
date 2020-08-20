from rest_framework import viewsets

from .models import AgentModel
from .serializers import AgentSerializer
from rest_framework import permissions

from rest_framework.generics import (
    CreateAPIView, # POST
    ListAPIView, # GET
    DestroyAPIView, # Delete
    UpdateAPIView # PUT PATCH
)

class AgentCreateAPIView(CreateAPIView): 
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permission_classes = (permissions.AllowAny(), )

class AgentListAPIView(ListAPIView): 
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permission_classes = (permissions.AllowAny(), )

class AgentDestroyApiView(DestroyAPIView): 
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permission_classes = (permissions.AllowAny(), )

class AgentUpdateAPIView(UpdateAPIView): 
    queryset = AgentModel.objects.all()
    serializer_class = AgentSerializer
    permission_classes = (permissions.AllowAny(), )
