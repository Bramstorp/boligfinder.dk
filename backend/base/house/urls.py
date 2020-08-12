from .views import HouseViewSet
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', HouseViewSet, basename='house')
# urlpatterns = router.urls

from django.urls import path

from .views import (
    HouseRetriveUpdateAPIView
    HouseRetriveDestroyAPIView
    HouseListCreateAPIView
)

urlpatterns = [
    path("create/", HouseListCreateAPIView.as_view),
    path("<pk>/update", HouseRetriveUpdateAPIView.as_view),
    path("<pk>/delete", HouseRetriveDestroyAPIView.as_view)
]