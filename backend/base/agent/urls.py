from django.urls import path

from .views import (
    AgentCreateAPIView,
    AgentListAPIView,
    AgentDestroyApiView,
    AgentUpdateAPIView
)

urlpatterns = [
    path("create", AgentCreateAPIView.as_view()),
    path("list", AgentListAPIView.as_view()),
    path("<pk>/Delete", AgentDestroyApiView.as_view()),
    path("<pk>/update", AgentUpdateAPIView.as_view())
]