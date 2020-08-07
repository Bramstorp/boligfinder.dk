from rest_framework import viewsets

from .models import ContactModel
from .serializers import ContactSerializer

from rest_framework.permissions import AllowAny
# from rest_framework.response import Response
# from rest_framework.views import APIView

# Create your views here.
class ContactViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = ContactSerializer
    queryset = ContactModel.objects.all()


# class ContactPermission(APIView):
#     permission_classes = [AllowAny]

#     def get(self, request, format=None):
#         content = {
#             'status': 'request was permitted'
#         }
#         return Response(content)