from rest_framework import viewsets

from .models import ContactModel
from .serializers import ContactSerializer

from rest_framework.permissions import AllowAny
class ContactViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = ContactSerializer
    queryset = ContactModel.objects.all()