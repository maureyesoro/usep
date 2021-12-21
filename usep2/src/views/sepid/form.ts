import * as yup from "yup";
import { TramiteSep } from "../../models/tramitesep/types";

export interface formValues {
    tipo_pago?: string;
    monto?: number;
    numero_op?: number;
    llave_pago?: string;
    secuencia?: string;
    objetivo_sep?: string;
    no_tramite_sisrvoe?: number;
    observaciones_sisrvoe?: string;
    fecha_sisrvoe?: Date;
    fecha_envio?: Date;
    fecha_limite_respuesta?: Date;
    fecha_resp_enviadaSisrvoe?: Date;
    observaciones?: string;
    fecha_rvoe_obtenido?: Date;
}

export const initialValues: formValues = {
    tipo_pago: "",
    monto: 0.0,
    numero_op: 0,
    llave_pago: "",
    secuencia: "",
    objetivo_sep: "",
    no_tramite_sisrvoe: 0,
    observaciones_sisrvoe: "",
    fecha_sisrvoe: new Date(),
    fecha_envio: new Date(),
    fecha_limite_respuesta: new Date(),
    fecha_resp_enviadaSisrvoe: new Date(),
    observaciones: "",
    fecha_rvoe_obtenido: new Date(),
}

export const validationSchema: yup.SchemaOf<formValues> = yup.object().shape({
    tipo_pago: yup.string(),
    monto: yup.number(),
    numero_op: yup.number().integer(),
    llave_pago: yup.string(),
    secuencia: yup.string(),
    objetivo_sep: yup.string(),
    no_tramite_sisrvoe: yup.number().integer(),
    observaciones_sisrvoe: yup.string(),
    fecha_sisrvoe: yup.date(),
    fecha_envio: yup.date(),
    fecha_limite_respuesta: yup.date(),
    fecha_resp_enviadaSisrvoe: yup.date(),
    observaciones: yup.string(),
    fecha_rvoe_obtenido: yup.date(),
});

export const onSubmit = (
    values: formValues,
    update: (tramitesep: Partial<TramiteSep>) => void,
  ) => {
    const updatedTramite: Partial<TramiteSep> = {
        tipo_pago: values.tipo_pago,
        monto: values.monto,
        numero_op: values.numero_op,
        llave_pago: values.llave_pago,
        secuencia: values.secuencia,
        objetivo_sep: values.objetivo_sep,
        no_tramite_sisrvoe: values.no_tramite_sisrvoe,
        observaciones_sisrvoe: values.observaciones_sisrvoe,
        fecha_sisrvoe: values.fecha_sisrvoe,
        fecha_envio: values.fecha_envio,
        fecha_limite_respuesta: values.fecha_limite_respuesta,
        fecha_resp_enviadaSisrvoe: values.fecha_resp_enviadaSisrvoe,
        observaciones: values.observaciones,
        fecha_rvoe_obtenido: values.fecha_rvoe_obtenido,
    };
  
    update(updatedTramite)
  };