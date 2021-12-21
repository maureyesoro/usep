from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from datetime import date

# Create your models here.
class TramiteUniv(models.Model):
    id_tramite_univ = models.AutoField(primary_key=True)
    checklist_tramite = models.ManyToManyField('Documento', through='Checklist')
    SOLICITANTE = [
        ('UT', 'Universidad de Tamaulipas'),
        ('UQ', 'Universidad de Querétaro'),
        ('UV', 'Universidad de Veracruz'),
        ('UM', 'Universidad de Monterrey'),
    ]
    solicitante = models.CharField(max_length=50, choices=SOLICITANTE, null=True)
    programa = models.CharField(max_length=100)
    is_salud = models.BooleanField(default=False)
    NIVEL = [
        ('E', 'Especialidad'),
        ('M', 'Maestría'),
        ('L', 'Licenciatura'),
        ('D', 'Doctorado'),
    ]
    nivel = models.CharField(max_length=20, choices=NIVEL, null=True)
    MODALIDAD = [
        ('E', 'Escolarizada'),
        ('M', 'Mixta'),
        ('NE-D', 'No Escolarizada - D'),
        ('NE-L', 'No Escolarizada - L'),
    ]
    modalidad = models.CharField(max_length=20, choices=MODALIDAD, null=True)
    CICLO = [
        ('TRIM', 'Trimestral'),
        ('CUATRIM', 'Cuatrimestral'),
        ('SEM', 'Semestral'),
        ('MODULAR', '5 semanas'),
    ]
    ciclo = models.CharField(max_length=20, choices=CICLO, null=True)
    OBJETIVO = [
        ('NUEVA', 'Nueva'),
        ('ACTUALIZACION', 'Actualización'),
        ('ACT/MOD-IMPORT', 'Actualización / Modificación por importación'),
        ('ACT-CAMBIO-MOD', 'Actualización por cambio de modalidad'),
        ('EXTENSION', 'Extensión'),
    ]
    objetivo = models.CharField(max_length=20, choices=OBJETIVO, null=True)
    programa_madre = models.CharField(max_length=20, null=True)
    fecha_recep_solicitud = models.DateField(auto_now_add=True)
    fecha_com_acad = models.DateField(blank=True, null=True)
    fecha_com_dir = models.DateField(blank=True, null=True)
    # fecha_fase_dos = models.DateField(blank=True, null=True) # revisar como agregar esta fecha en DB
    fecha_paquetes_rl = models.DateField(blank=True, null=True)
    fecha_acuerdo_sep = models.DateField(blank=True, null=True)
    fecha_limite_apertura = models.DateField(blank=True, null=True)
    id_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING)
    STEPS = [
        'Recepción Solicitud',
        'VoBo Comité Académico',
        'VoBo Comité Directivo',
        'Entrega de Paquete SEP-RL IESSC',
        'Recepción Acuerdo SEP'
        # 'Fecha fase II',
    ]
    status_tramite = models.CharField(max_length=200, null=True)
    notas_entrega_paqs = models.CharField(max_length=500, null=True)
    
          
    
    def checkSteps(self):
        step1 = 1 if self.fecha_recep_solicitud != None else 0
        step2 = 1 if self.fecha_com_acad != None else 0
        step3 = 1 if self.fecha_com_dir != None else 0
        step4 = 1 if self.fecha_paquetes_rl != None else 0
        step5 = 1 if self.fecha_acuerdo_sep != None else 0
        lastDone = step1+step2+step3+step4+step5 
        if self.fecha_recep_solicitud == None:
            result = 'Done: '+self.STEPS[0]+', Waiting: '+self.STEPS[1]
        else:
            result = 'Done: '+self.STEPS[lastDone-1]+', Waiting: '+self.STEPS[lastDone]   
        return result
    
    def save(self, *args, **kwargs):
        self.status_tramite = self.checkSteps()
        super(TramiteUniv, self).save(*args, **kwargs)
 

class Documento(models.Model):
    id_documento = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    TIPO_DOCUMENTO = [
        ('ACADEMICO', 'Académico'),
        ('LEGAL', 'Legal'),
        ('ADMINISTRATIVO', 'Administrativo'),
    ]
    tipo = models.CharField(max_length=50, choices=TIPO_DOCUMENTO)
    
    
class Checklist(models.Model):
    # id = models.AutoField(primary_key=True)
    id_tramite_univ = models.ForeignKey(TramiteUniv, on_delete=models.DO_NOTHING)
    id_documento = models.ForeignKey(Documento, on_delete=models.DO_NOTHING)
