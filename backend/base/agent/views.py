from rest_framework import viewsets

from .models import AgentModel
from .serializers import AgentSerializer

class AgentViewSet(viewsets.ModelViewSet):
    serializer_class = AgentSerializer
    queryset = AgentModel.objects.all()