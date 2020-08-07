from rest_framework import viewsets

from .models import AgentModel
from .serializers import AgentSerializer
from rest_framework.permissions import AllowAny

class AgentViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = AgentSerializer
    queryset = AgentModel.objects.all()