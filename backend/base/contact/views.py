from rest_framework import viewsets
from rest_framework import permissions
from .models import ContactModel
from .serializers import ContactSerializer


from rest_framework.generics import (
    ListCreateAPIView
)

class ContactListCreateAPIView(ListCreateAPIView):
    queryset = ContactModel.objects.all()
    serializer_class = ContactSerializer
    permission_classes = (permissions.AllowAny, )
