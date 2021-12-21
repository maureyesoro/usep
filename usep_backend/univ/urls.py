from django.urls import include, path
from rest_framework import routers  
from .views import *


router = routers.DefaultRouter()

router.register(r'tramiteUniv', TramiteUnivViewSet)
router.register(r'checklist', ChecklistViewSet)
router.register(r'documentos', DocumentoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]