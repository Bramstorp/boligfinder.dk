from rest_framework import permissions
from .models import ListingModel, HouseModel
from .serializers import ListingSerializer, HouseSerializer
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveDestroyAPIView,
    RetrieveAPIView,
    ListAPIView,
)

class ListingListView(ListAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

class ListingUpdateView(RetrieveUpdateAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

class ListingCreateView(ListCreateAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

class ListingDeleteView(RetrieveDestroyAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

class ListingDetailView(RetrieveAPIView):
    queryset = ListingModel.objects.all()
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

class SearchView(APIView):
    serializer_class = ListingSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        queryset = ListingModel.objects.all()
        data = self.request.data

        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type__iexact=sale_type)
        
        price = data['price']
        queryset = queryset.filter(price__gte=price)

        title = data["title"]
        queryset = queryset.filter(title__iexact=title)

        house = data["house"]
        queryset = queryset.filter(house__icontains=house)

        serializer = ListingSerializer(queryset, many=True)
        return Response(serializer.data)


class HouseView(ListCreateAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny, )