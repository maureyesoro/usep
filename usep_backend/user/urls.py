from django.urls import include, path
from rest_framework import routers  
from .views import *
  
router = routers.DefaultRouter()
  
urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('users', UserView.as_view()),
    path('logout', LogoutView.as_view(), name='auth_logout'),
    path('logout_oldie', LogoutOldieView.as_view()),
    path('', include(router.urls)),
]