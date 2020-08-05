from rest_framework import viewsets

from .models import ContactModel
from .serializers import ContactSerializer

# Create your views here.
class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = ContactModel.objects.all()