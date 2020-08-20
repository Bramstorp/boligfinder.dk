from django.urls import path

from .views import (
    ContactCreateAPIView,
    ContactListAPIView,
    ContactDestroyAPIView
)

urlpatterns = [
    path("list", ContactListAPIView.as_view),
    path("post", ContactCreateAPIView.as_view),
    path("delete", ContactDestroyAPIView.as_view),
]