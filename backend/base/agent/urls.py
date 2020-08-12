# from .views import AgentViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', AgentViewSet, basename='agent')
# urlpatterns = router.urls


from django.urls import path

from .views import (
    AgentListCreateAPIView,
    AgentUpdateView,
    AgentDeleteView
)

urlpatterns = [
    path("create/", AgentListCreateAPIView.as_view()),
    path("<pk>/update", AgentUpdateView.as_view()),
    path("<pk>/delete", AgentDeleteView.as_view())
]