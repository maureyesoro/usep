from rest_framework import viewsets
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import TramiteSepSerializer, RespSisrvoeSerializer
from .models import TramiteSep, RespuestaSisrvoe

class TramiteSepViewSet(viewsets.ModelViewSet):
    queryset = TramiteSep.objects.all()
    serializer_class = TramiteSepSerializer
    # permission_classes = [IsAuthenticated]
    
class RespuestaSisrvoeViewSet(viewsets.ModelViewSet):
    queryset = RespuestaSisrvoe.objects.all()
    serializer_class = RespSisrvoeSerializer
    # permission_classes = [IsAuthenticated]
