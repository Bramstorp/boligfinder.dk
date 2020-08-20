from rest_framework import viewsets

from .models import ContactModel
from .serializers import ContactSerializer

from rest_framework import permissions

from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    DestroyAPIView
)

class ContactCreateAPIView(CreateAPIView):
    queryset = ContactModel.objects.all()
    serializer_class = ContactSerializer
    permission_classes = (permissions.AllowAny(), )

class ContactListAPIView(ListAPIView):
    queryset = ContactModel.objects.all()
    serializer_class = ContactSerializer
    permission_classes = (permissions.AllowAny(), )

class ContactDestroyAPIView(DestroyAPIView):
    queryset = ContactModel.objects.all()
    serializer_class = ContactSerializer
    permission_classes = (permissions.AllowAny)