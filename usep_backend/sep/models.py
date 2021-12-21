from django.db import models
from django.db.models.deletion import DO_NOTHING
from univ.models import TramiteUniv

# Create your models here.
class TramiteSep(models.Model):
    id_tramitesep = models.AutoField(primary_key=True)
    id_tramiteuniv = models.OneToOneField(TramiteUniv, on_delete=models.DO_NOTHING)
    tipo_pago = models.CharField(max_length=50)
    monto = models.FloatField()
    numero_op = models.IntegerField()
    llave_pago = models.CharField(max_length=50)
    secuencia = models.CharField(max_length=50, blank=True)
    objetivo_sep = models.CharField(max_length=50)
    no_tramite_sisrvoe = models.IntegerField(null=True)
    observaciones_sisrvoe = models.CharField(max_length=200, null=True)
    fecha_sisrvoe = models.DateField(blank=True, null=True)
    fecha_envio = models.DateField(blank=True, null=True)
    fecha_limite_respuesta = models.DateField(blank=True, null=True)
    fecha_resp_enviadaSisrvoe = models.DateField(blank=True, null=True)
    observaciones = models.CharField(max_length=500, null=True)
    fecha_rvoe_obtenido = models.DateField(blank=True, null=True)

class RespuestaSisrvoe(models.Model):
    id_tramitesep = models.ForeignKey(TramiteSep, on_delete=models.DO_NOTHING)
    fecha_respuesta = models.DateField()
    observaciones = models.CharField(max_length=254, null=True)
    
    