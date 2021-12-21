export interface TramiteSep {
    id_tramitesep: number;
    id_tramiteuniv: number;
    tipo_pago: string;
    monto: number;
    numero_op: number;
    llave_pago: string;
    secuencia: string;
    objetivo_sep: string;
    no_tramite_sisrvoe: number;
    observaciones_sisrvoe: string;
    fecha_sisrvoe: Date;
    fecha_envio: Date;
    fecha_limite_respuesta: Date;
    fecha_resp_enviadaSisrvoe: Date;
    observaciones: string;
    fecha_rvoe_obtenido: Date;
}