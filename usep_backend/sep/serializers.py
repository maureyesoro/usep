from .models import RespuestaSisrvoe, TramiteSep, TramiteUniv
from rest_framework import serializers

       
class RespSisrvoeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = RespuestaSisrvoe
        fields = ('id_tramitesep', 'fecha_respuesta', 'observaciones')
        
class TramiteSepSerializer(serializers.ModelSerializer):
    # fechas_respuesta_sisrvoe = RespSisrvoeSerializer(read_only=True, many=True, null=True)
    
    class Meta:
        model = TramiteSep
        fields = ['id_tramitesep',
                  'id_tramiteuniv',
                  'tipo_pago',
                  'monto',
                  'numero_op',
                  'llave_pago',
                  'secuencia',
                  'objetivo_sep',
                  'no_tramite_sisrvoe',
                  'observaciones_sisrvoe',
                  'fecha_sisrvoe',
                  'fecha_limite_respuesta',
                  'fecha_resp_enviadaSisrvoe',
                  'observaciones',
                  'fecha_rvoe_obtenido',
                  ]
        