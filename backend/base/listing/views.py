from rest_framework import permissions
from .models import ListingModel, HouseModel
from .serializers import ListingSerializer, HouseSerializer
from rest_framework.response import Response
from datetime import datetime, timezone, timedelta

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
        queryset = ListingModel.objects.order_by('-listed_date').filter(is_published=True)
        data = self.request.data

        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type__iexact=sale_type)
        
        price = data['price']
        queryset = queryset.filter(price__gte=price)

        address = data["address"]
        queryset = queryset.filter(house__address__iexact=address)

        area = data['area']
        queryset = queryset.filter(house__area__gte=area)

        area_ground = data['area_ground']
        queryset = queryset.filter(house__area_ground__gte=area_ground)

        serializer = ListingSerializer(queryset, many=True)
        return Response(serializer.data)

class HouseView(ListCreateAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny, )