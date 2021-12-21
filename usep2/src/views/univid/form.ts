import * as yup from "yup";
import { TramiteUniv } from "../../models/tramiteuniv/types";

export interface formValues {
    programa: string;
    is_salud?: boolean;
    nivel?: string;
    modalidad?: string;
    ciclo?: string;
    objetivo?: string;
    programa_madre?: string;
    fecha_recep_solicitud?: Date;
    fecha_com_acad?: Date;
    fecha_com_dir?: Date;
    fecha_paquetes_rl?: Date;
    fecha_acuerdo_sep?: Date;
    fecha_limite_apertura?: Date;
    status_tramite?: string;
    notas_entrega_paqs?: string;
}

export const initialValues: formValues = {
    programa: "Programa Initial Value",
    is_salud: false,
    nivel: "",
    modalidad: "",
    ciclo: "",
    objetivo: "",
    programa_madre: "",
    fecha_recep_solicitud: new Date(),
    fecha_com_acad: new Date(),
    fecha_com_dir: new Date(),
    fecha_paquetes_rl: new Date(),
    fecha_acuerdo_sep: new Date(),
    fecha_limite_apertura: new Date(),
    status_tramite: "",
    notas_entrega_paqs: ""
}

export const validationSchema: yup.SchemaOf<formValues> = yup.object().shape({
    // id: yup.number().required(),
    programa: yup.string().required(),
    is_salud: yup.boolean(),
    nivel: yup.string(),
    modalidad: yup.string(),
    ciclo: yup.string(),
    objetivo: yup.string(),
    programa_madre: yup.string(),
    fecha_recep_solicitud: yup.date(),
    fecha_com_acad: yup.date(),
    fecha_com_dir: yup.date(),
    fecha_paquetes_rl: yup.date(),
    fecha_acuerdo_sep: yup.date(),
    fecha_limite_apertura: yup.date(),
    status_tramite: yup.string(),
    notas_entrega_paqs: yup.string()
});

export const onSubmit = (
    values: formValues,
    update: (tramiteuniv: Partial<TramiteUniv>) => void,
  ) => {
    const updatedTramite: Partial<TramiteUniv> = {
        // id: values.id,
        programa: values.programa,
        is_salud: values.is_salud,
        nivel: values.nivel,
        modalidad: values.modalidad,
        ciclo: values.ciclo,
        objetivo: values.objetivo,
        programa_madre: values.programa_madre,
        fecha_recep_solicitud: values.fecha_recep_solicitud,
        fecha_com_acad: values.fecha_com_acad,
        fecha_com_dir: values.fecha_com_dir,
        fecha_paquetes_rl: values.fecha_paquetes_rl,
        fecha_acuerdo_sep: values.fecha_acuerdo_sep,
        fecha_limite_apertura: values.fecha_limite_apertura,
        status_tramite: values.status_tramite,
        notas_entrega_paqs: values.notas_entrega_paqs
    };
  
    update(updatedTramite)
  };