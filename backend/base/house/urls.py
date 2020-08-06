from .views import HouseViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', HouseViewSet, basename='house')
urlpatterns = router.urls