from .views import ListingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ListingViewSet, basename='listing')
urlpatterns = router.urls