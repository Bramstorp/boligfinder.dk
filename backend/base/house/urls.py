from rest_framework.routers import DefaultRouter

from django.urls import path

from .views import (
    HouseRetriveUpdateAPIView,
    HouseRetriveDestroyAPIView,
    HouseListCreateAPIView
)

urlpatterns = [
    path("create/", HouseListCreateAPIView.as_view),
    path("<pk>/update", HouseRetriveUpdateAPIView.as_view),
    path("<pk>/delete", HouseRetriveDestroyAPIView.as_view)
]