"""
from .views import ListingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ListingViewSet, basename='listing')
urlpatterns = router.urls
"""

from django.urls import path

from .views import (
    ListingListView,
    ListingUpdateView,
    ListingDeleteView,
    ListingDetailView,
    ListingCreateView
)

urlpatterns = [
    path('', ListingListView.as_view()),
    path('create/', ListingCreateView.as_view()),
    path('<pk>/', ListingDetailView.as_view()),
    path('<pk>/update', ListingUpdateView.as_view()),
    path('<pk>/delete', ListingDeleteView.as_view()),
]