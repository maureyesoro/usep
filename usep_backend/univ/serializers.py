from .models import Documento, Checklist, TramiteUniv
from rest_framework import serializers

       
class DocumentoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Documento
        fields = ('id_documento', 'nombre', 'tipo')
        
        
class ChecklistSerializer(serializers.ModelSerializer):
    id_documento = DocumentoSerializer(read_only=True)
    # id_documento = documento.id_documento
        
    class Meta:
        model = Checklist
        fields = ['id_tramite_univ', 'id_documento']
        
            
class TramiteUnivSerializer(serializers.ModelSerializer):
    checklist_tramite = ChecklistSerializer(read_only=True, many=True)
    
    class Meta:
        model = TramiteUniv
        fields = [
            'id_tramite_univ',
            'checklist_tramite',
            'programa',
            'is_salud',
            'nivel',
            'modalidad',
            'ciclo',
            'objetivo',
            'programa_madre',
            'fecha_recep_solicitud',
            'fecha_com_acad',
            'fecha_com_dir',
            'fecha_paquetes_rl',
            'fecha_acuerdo_sep',
            'fecha_limite_apertura',
            'status_tramite',
            'notas_entrega_paqs',
            'id_user'
            ]
            