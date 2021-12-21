export interface TramiteUniv {
    id_tramite_univ: number;
    checklist_tramite?: {};
    programa: string;
    is_salud: boolean;
    nivel: string;
    modalidad: string;
    ciclo: string;
    objetivo: string;
    programa_madre?: string;
    fecha_recep_solicitud: Date;
    fecha_com_acad?: Date;
    fecha_com_dir?: Date;
    fecha_paquetes_rl?: Date;
    fecha_acuerdo_sep?: Date;
    fecha_limite_apertura?: Date;
    status_tramite: string;
    notas_entrega_paqs?: string;
    id_user: number;
}