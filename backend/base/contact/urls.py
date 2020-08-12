# from .views import ContactViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', ContactViewSet, basename="contact")
# urlpatterns = router.urls

from django.urls import path

from .views import (
    ContactListCreateAPIView
)

urlpatterns = [
    path("contact", ContactListCreateAPIView.as_view)
]