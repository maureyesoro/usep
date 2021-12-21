from rest_framework import viewsets
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import TramiteUnivSerializer, ChecklistSerializer, DocumentoSerializer
from .models import TramiteUniv, Checklist, Documento

class TramiteUnivViewSet(viewsets.ModelViewSet):
    queryset = TramiteUniv.objects.all()
    serializer_class = TramiteUnivSerializer
    # permission_classes = [IsAuthenticated]
    
class ChecklistViewSet(viewsets.ModelViewSet):
    queryset = Checklist.objects.all()
    serializer_class = ChecklistSerializer
    # permission_classes = [IsAuthenticated]
    

class DocumentoViewSet(viewsets.ModelViewSet):
    queryset = Documento.objects.all()
    serializer_class = DocumentoSerializer
    # permission_classes = [IsAuthenticated]
