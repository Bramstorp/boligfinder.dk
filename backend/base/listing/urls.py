"""
from .views import ListingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ListingViewSet, basename='listing')
urlpatterns = router.urls
"""

from django.urls import path

from .views import (
    ListingistView,

)

urlpatterns = [
    path('', ListingistView.as_view()),
]