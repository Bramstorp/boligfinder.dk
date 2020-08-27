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

        home_type = data['home_type']
        queryset = queryset.filter(house__home_type__iexact=home_type)
        
        price = data['price']
        queryset = queryset.filter(price__gte=price)

        address = data["address"]
        queryset = queryset.filter(house__address__icontains=address)

        area = data['area']
        queryset = queryset.filter(house__area__gte=area)

        area_ground = data['area_ground']
        queryset = queryset.filter(house__area_ground__gte=area_ground)

        bedrooms = data['bedrooms']
        queryset = queryset.filter(house__bedrooms__gte=bedrooms)

        bathrooms = data['bathrooms']
        queryset = queryset.filter(house__bathrooms__gte=bathrooms)

        floors = data['floors']
        queryset = queryset.filter(house__floors__gte=floors)

        rooms = data['rooms']
        queryset = queryset.filter(house__rooms__gte=rooms) 

        build_year = data['build_year']
        queryset = queryset.filter(house__build_year__iexact=build_year)   

        serializer = ListingSerializer(queryset, many=True)
        return Response(serializer.data)

class HouseView(ListCreateAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny, )

class HouseDeleteView(RetrieveDestroyAPIView):
    queryset = HouseModel.objects.all()
    serializer_class = HouseSerializer
    permission_classes = (permissions.AllowAny, )