from .views import ContactViewSet
from rest_framework import DefaultRouter

router = DefaultRouter()
router.register(r'', ContactViewSet, basename="contact")
urlpatterns = router.urls