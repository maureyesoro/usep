import {FC, useEffect, useState} from "react";
import "./styles.css";
import { TramiteSep } from "../../models/tramitesep/types";
import { useDispatch } from "react-redux";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { createTramiteSep, fetchTramitesSep } from "../../services/sep/services";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Sep: FC = () => {
    const [tramitesuniv, setTramitessep] = useState<TramiteSep[] | null>(null);

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=> {
        const getTramitesSep = async () => {
            try {
                // dispatch(pushLoading());
                const recievedTramitesSep = await fetchTramitesSep();
                setTramitessep(recievedTramitesSep);
            } catch (error: any) {
                console.error(error.message);
            } finally {
                // dispatch(popLoading());
            }
        };
        if (tramitesuniv === null) {
            getTramitesSep();
        }
    },[dispatch, tramitesuniv])

    const createFunc = async (values: any) => {
        return await createTramiteSep(values)
    }

    return (
        <div className="container-tramites-sep">
            <div className="sep-banner">
                <h1 className="title-sep-banner">Lista total de trámites Sep</h1>
            </div>
            <div className="button-container">
                <Button variant="contained" color="primary" className="new-tramite-button">Create new trámite</Button>
            </div>
            <section className="tramite-section-sep">
                <h2 className="title-tramite-section-sep">Section Tramites</h2>
                <ul className="list-header-sep">
                    <li>ID</li>
                    <li>Id Univ</li>
                    <li>Pago</li>
                    <li>Monto</li>
                    <li>Num. Operacion</li>
                    <li>Llave Pago</li>
                    <li>Secuencia</li>
                    <li>Objetivo Sep</li>
                    <li>Num. Tramite SISRVOE</li>
                    <li>Observaciones SISRVOE</li>
                    <li>En SISRVOE</li>
                    <li>Envio</li>
                    <li>Limite Resp</li>
                    <li>Resp Enviada SISRVOE</li>
                    <li>RVOE obtenido</li>
                </ul>
                {tramitesuniv?.map((tramitesep) => (
                        <Link to={`${tramitesep.id_tramitesep}/`}>
                            <div className="tramite-detail-container-sep">
                                <div className="tramite-content-sep">
                                    <p className="tramite-element-sep">{tramitesep.id_tramitesep}</p>
                                    <p className="tramite-element-sep">{tramitesep.id_tramiteuniv}</p>
                                    <p className="tramite-element-sep">{tramitesep.tipo_pago}</p>
                                    <p className="tramite-element-sep">{tramitesep.monto}</p>
                                    <p className="tramite-element-sep">{tramitesep.numero_op}</p>
                                    <p className="tramite-element-sep">{tramitesep.llave_pago}</p>
                                    <p className="tramite-element-sep">{tramitesep.secuencia}</p>
                                    <p className="tramite-element-sep">{tramitesep.objetivo_sep}</p>
                                    <p className="tramite-element-sep">{tramitesep.no_tramite_sisrvoe}</p>
                                    <p className="tramite-element-sep">{tramitesep.observaciones_sisrvoe}</p>
                                    <p className="tramite-element-sep">{tramitesep.fecha_sisrvoe}</p>
                                    <p className="tramite-element-sep">{tramitesep.fecha_envio}</p>
                                    <p className="tramite-element-sep">{tramitesep.fecha_limite_respuesta}</p>
                                    <p className="tramite-element-sep">{tramitesep.fecha_resp_enviadaSisrvoe}</p>
                                    <p className="tramite-element-sep">{tramitesep.observaciones}</p>
                                    <p className="tramite-element-sep">{tramitesep.fecha_rvoe_obtenido}</p>
                                </div>
                          </div>
                        </Link>
                ))}
            </section>
        </div>
    )
}

export default Sep;