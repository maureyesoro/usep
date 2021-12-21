import {FC, useEffect, useState} from "react";
import "./styles.css";
import { TramiteUniv } from "../../models/tramiteuniv/types";
import { useDispatch } from "react-redux";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { fetchTramite, updateTramiteUniv} from "../../services/univ/services";
import { initialValues, validationSchema, onSubmit } from "./form";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Input, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
// import { updateProductsSuccess } from "../../redux/tramiteuniv/actions";

const box_style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'white',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };


const TramiteU: FC = () => {
    const [tramiteuniv, setTramiteUniv] = useState<TramiteUniv | null>(null);
    const id = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpenUpdate = () => setOpenUpdate(true);
    const handleClose = () => setOpen(false);
    const handleCloseUpdate = () => setOpenUpdate(false);

    useEffect(()=> {
        const getTramiteUniv = async () => {
            try {
                // dispatch(pushLoading());
                const recievedTramite = await fetchTramite(id);
                setTramiteUniv(recievedTramite);
            } catch (error: any) {
                console.error(error.message);
            } finally {
                // dispatch(popLoading());
            }
        };
        if (tramiteuniv === null) {
            getTramiteUniv();
        }
    },[dispatch, tramiteuniv])

    console.log(tramiteuniv);
    
    const updateFunc = async (values: any) => {
        return await updateTramiteUniv(values, tramiteuniv?.id_tramite_univ)
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => updateFunc(values),
        validationSchema,
        
    });
    
    return (
        <div className="tramiteuniv-container">
            <section className="tramiteuniv-section">
                <ul className="list-header">
                    <li>ID</li>
                    <li>Programa</li>
                    <li>Nivel</li>
                    <li>Modalidad</li>
                    <li>Ciclo</li>
                    <li>Objetivo</li>
                    <li>Programa Madre</li>
                    <li>Recep. Solicitud</li>
                    <li>Status</li>
                    <li>User</li>
                </ul>
                <div className="tramite-detail-container">
                    <div className="tramite-content">
                        <p className="tramite-element">{tramiteuniv?.programa}</p>
                        <p className="tramite-element">{tramiteuniv?.nivel}</p>
                        <p className="tramite-element">{tramiteuniv?.modalidad}</p>
                        <p className="tramite-element">{tramiteuniv?.ciclo}</p>
                        <p className="tramite-element">{tramiteuniv?.objetivo}</p>
                        <p className="tramite-element">{tramiteuniv?.programa_madre}</p>
                        <p className="tramite-element">{tramiteuniv?.fecha_recep_solicitud}</p>
                        <p className="tramite-element">{tramiteuniv?.status_tramite}</p>
                        <p className="tramite-element">{tramiteuniv?.id_user}</p>
                    </div>
                </div>    
                <div className="tramiteuniv-details">
                    <div className="tramiteuniv-action-buttons">
                        <Button variant="contained" color="primary" onClick={handleOpenUpdate}>Edit<i className="fas fa-pen btn-tramiteuniv-icon"></i></Button>
                    </div>  
                </div>
            </section>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={box_style}>
                    <div className="modal-container">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Delete the product
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Are you sure you want to delete?
                        </Typography>
                        <Button variant="contained" color="error" id="modal-modal-button">Yes</Button>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={openUpdate}
                onClose={handleCloseUpdate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                 <Box sx={box_style}>
                    <div className="modal-container">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Update Tramite
                        </Typography>
                        <div className="update-form-container">
                            <TextField  required 
                                        label="Programa" 
                                        name="programa" 
                                        className="update-input" 
                                        variant="outlined" 
                                        margin="normal" 
                                        value={formik.values.programa} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.programa}/>
                            
                            <TextField  required 
                                        label="Salud" 
                                        name="is_salud" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="checkbox" 
                                        value={formik.values.is_salud} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.is_salud}/>
                            
                            <TextField  required 
                                        label="Nivel" 
                                        name="nivel" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.nivel} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.nivel}/>

                            <TextField  required 
                                        label="Modalidad" 
                                        name="modalidad" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.modalidad} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.modalidad}/>

                            <TextField  required 
                                        label="Ciclo" 
                                        name="ciclo" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.ciclo} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.ciclo}/>

                            <TextField  required 
                                        label="Objetivo" 
                                        name="objetivo" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.objetivo} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.objetivo}/>
                            
                            <TextField  required 
                                        label="Programa Madre" 
                                        name="programa_madre" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.programa_madre} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.programa_madre}/>

                            <TextField  required 
                                        label="Fecha Recepcion Solicitud" 
                                        name="fecha_recep_solicitud" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_recep_solicitud} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_recep_solicitud}/>

                            <TextField  required 
                                        label="Fecha Comite Academico" 
                                        name="fecha_com_acad" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_com_acad} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_com_acad}/>

                            <TextField  required 
                                        label="Fecha Comite Directivo" 
                                        name="fecha_com_dir" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_com_dir} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_com_dir}/>

                            <TextField  required 
                                        label="Fecha Entrega de Paquetes RL" 
                                        name="fecha_paquetes_rl" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_paquetes_rl} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_paquetes_rl}/>

                            <TextField  required 
                                        label="Fecha Acuerdo Sep" 
                                        name="fecha_acuerdo_sep" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_acuerdo_sep} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_acuerdo_sep}/>

                            <TextField  required 
                                        label="Fecha Limite Apertura" 
                                        name="fecha_limite_apertura" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_limite_apertura} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_limite_apertura}/>

                            <TextField  required 
                                        label="Notas Entrega de Paquetes" 
                                        name="notas_entrega_paqs" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.notas_entrega_paqs} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.notas_entrega_paqs}/>

                        </div>
                        <Button variant="contained" color="primary" id="modal-modal-button" onClick={() => formik.handleSubmit()}>Update</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default TramiteU;