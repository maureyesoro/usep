import "./styles.css";
import {FC, useEffect, useState} from "react";
import { TramiteUniv } from "../../models/tramiteuniv/types";
import {useDispatch} from "react-redux";
import {popLoading, pushLoading} from "../../redux/ui/actions";
import { fetchTramitesUniv} from "../../services/univ/services";
import {Link} from "react-router-dom";
import { Button } from "@mui/material";


export const Univ: FC = () => {
    const [tramitesuniv, setTramitesuniv] = useState<TramiteUniv[] | null>(null);

    const dispatch = useDispatch();

    useEffect(() => {
            const getTramitesUniv = async () => {
                try {
                    dispatch(pushLoading());
                    const recievedProducts = await fetchTramitesUniv();
                    setTramitesuniv(recievedProducts);
                } catch (error: any) {
                    console.error(error.message);
                } finally {
                    dispatch(popLoading());
                }
            };
            if (tramitesuniv === null) {
                getTramitesUniv();
            }
        },
        [dispatch, tramitesuniv]);
    console.log(tramitesuniv);

    return (
        <div className="container-tramites-univ">
            <div className="univ-banner">
                <h1 className="title-univ-banner">Lista total de trámites Univ</h1>
            </div>
            <div className="button-container">
                <Button variant="contained" color="primary" className="menu-button">Create new trámite</Button>
            </div>
            <section className="tramite-section">
                <h2 className="title-tramite-section">Tramites Section</h2>
                {tramitesuniv?.map((tramiteuniv) => (
                        <Link to={`${tramiteuniv.id_tramite_univ}/`}>
                            <div className="tramite-detail-container">
                                <div className="tramite-content">
                                    <p className="tramite-id">{tramiteuniv.id_tramite_univ}</p>
                                    <p className="tramite-programa">{tramiteuniv.programa}</p>
                                    <p className="tramite-nivel">{tramiteuniv.nivel}</p>
                                    <p className="tramite-modalidad">{tramiteuniv.modalidad}</p>
                                    <p className="tramite-ciclo">{tramiteuniv.ciclo}</p>
                                    <p className="tramite-objetivo">{tramiteuniv.objetivo}</p>
                                    <p className="tramite-programa-madre">{tramiteuniv.programa_madre}</p>
                                    <p className="tramite-fecha">{tramiteuniv.fecha_recep_solicitud}</p>
                                    <p className="tramite-status">{tramiteuniv.status_tramite}</p>
                                    <p className="tramite-user">{tramiteuniv.id_user}</p>
                                </div>
                          </div>
                        </Link>
                ))}
            </section>
        </div>
    )
}