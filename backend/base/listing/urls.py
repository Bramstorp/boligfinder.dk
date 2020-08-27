from django.urls import path

from .views import (
    ListingListView,
    ListingUpdateView,
    ListingDeleteView,
    ListingDetailView,
    ListingCreateView,
    SearchView,
    HouseView,
    HouseDeleteView
)

urlpatterns = [
    path('', ListingListView.as_view()),
    path('create/', ListingCreateView.as_view()),
    path('<pk>/', ListingDetailView.as_view()),
    path('<pk>/update', ListingUpdateView.as_view()),
    path('<pk>/delete', ListingDeleteView.as_view()),
    path('search', SearchView.as_view()),
    path('house', HouseView.as_view()),
    path('house/<pk>/delete', HouseDeleteView.as_view()),
]