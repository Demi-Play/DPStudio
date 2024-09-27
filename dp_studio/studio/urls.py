from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, LoginView, LogoutView, ProjectCreateView, TrackListCreateView, TrackViewSet, UserCreateView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
# router.register(r'tracks', TrackViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/register/', UserCreateView.as_view(), name='user-register'),
    path('api/login/', LoginView.as_view(), name='user-login'),
    path('api/logout/', LogoutView.as_view(), name='user-logout'),
    path('api/projects/', ProjectCreateView.as_view(), name='project-create'),
    path('api/projects/<int:project_id>/tracks/', TrackListCreateView.as_view(), name='track-list-create'),
]
