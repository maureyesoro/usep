import {FC, useEffect, useState} from "react";
import "./styles.css";
import { TramiteSep } from "../../models/tramitesep/types";
import { useDispatch } from "react-redux";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { fetchTramite, updateTramiteSep} from "../../services/sep/services";
import { initialValues, validationSchema, onSubmit } from "./form";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Input, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";

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

  const TramiteS: FC = () => {
    const [tramitesep, setTramiteSep] = useState<TramiteSep | null>(null);
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
        const getTramiteSep = async () => {
            try {
                // dispatch(pushLoading());
                const recievedTramite = await fetchTramite(id);
                setTramiteSep(recievedTramite);
            } catch (error: any) {
                console.error(error.message);
            } finally {
                // dispatch(popLoading());
            }
        };
        if (tramitesep === null) {
            getTramiteSep();
        }
    },[dispatch, tramitesep])

    console.log(tramitesep);

    const updateFunc = async (values: any) => {
        return await updateTramiteSep(values, tramitesep?.id_tramitesep)
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => updateFunc(values),
        validationSchema,
    });

    return (
        <div className="tramitesep-container">
            <section className="tramitesep-section">
                <ul className="list-header">
                    <li>ID</li>
                    <li>Id Univ</li>
                    <li>Tipo Pago</li>
                    <li>Monto</li>
                    <li>No. Operacion</li>
                    <li>Llave de Pago</li>
                    <li>Objetivo Sep</li>
                    <li>No. Tramite SISRVOE</li>
                    <li>Observaciones SISRVOE</li>
                    <li>SISRVOE</li>
                    <li>Envio</li>
                    <li>Limite Respuesta</li>
                    <li>Respuesta Enviada SISRVOE</li>
                    <li>Observaciones</li>
                    <li>RVOE Obtenido</li>
                </ul>
                <div className="tramite-detail-container">
                    <div className="tramite-content">
                        <p className="tramite-element">{tramitesep?.id_tramitesep}</p>
                        <p className="tramite-element">{tramitesep?.id_tramiteuniv}</p>
                        <p className="tramite-element">{tramitesep?.tipo_pago}</p>
                        <p className="tramite-element">{tramitesep?.monto}</p>
                        <p className="tramite-element">{tramitesep?.numero_op}</p>
                        <p className="tramite-element">{tramitesep?.llave_pago}</p>
                        <p className="tramite-element">{tramitesep?.secuencia}</p>
                        <p className="tramite-element">{tramitesep?.objetivo_sep}</p>
                        <p className="tramite-element">{tramitesep?.no_tramite_sisrvoe}</p>
                        <p className="tramite-element">{tramitesep?.observaciones_sisrvoe}</p>
                        <p className="tramite-element">{tramitesep?.fecha_sisrvoe}</p>
                        <p className="tramite-element">{tramitesep?.fecha_envio}</p>
                        <p className="tramite-element">{tramitesep?.fecha_limite_respuesta}</p>
                        <p className="tramite-element">{tramitesep?.fecha_resp_enviadaSisrvoe}</p>
                        <p className="tramite-element">{tramitesep?.observaciones}</p>
                        <p className="tramite-element">{tramitesep?.fecha_rvoe_obtenido}</p>
                    </div>
                </div>    
                <div className="tramitesep-details">
                    <div className="tramitesep-action-buttons">
                        <Button variant="contained" color="primary" onClick={handleOpenUpdate}>Edit<i className="fas fa-pen btn-tramitesep-icon"></i></Button>
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
                                        label="Tipo Pago" 
                                        name="tipo_pago" 
                                        className="update-input" 
                                        variant="outlined" 
                                        margin="normal" 
                                        value={formik.values.tipo_pago} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.tipo_pago}/>
                            
                            <TextField  required 
                                        label="Monto" 
                                        name="monto" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="number" 
                                        value={formik.values.monto} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.monto}/>
                            
                            <TextField  required 
                                        label="Numpero Op" 
                                        name="numero_op" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="number"
                                        value={formik.values.numero_op}  
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.numero_op}/>

                            <TextField  required 
                                        label="Llave Pago" 
                                        name="llave_pago" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.llave_pago} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.llave_pago} />

                            <TextField  required 
                                        label="Secuencia" 
                                        name="secuencia" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.secuencia} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.secuencia}/>

                            <TextField  required 
                                        label="Objetivo Sep" 
                                        name="objetivo_sep" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.objetivo_sep} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.objetivo_sep}/>
                            
                            <TextField  required 
                                        label="Numero Sisrvoe" 
                                        name="no_sisrvoe" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="number"
                                        value={formik.values.no_tramite_sisrvoe}  
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.no_tramite_sisrvoe}/>

                            <TextField  required 
                                        label="Observaciones Sisrvoe" 
                                        name="observaciones_sisrvoe" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.observaciones_sisrvoe} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.observaciones_sisrvoe}/>

                            <TextField  required 
                                        label="Fecha Sisrvoe" 
                                        name="fecha_sisrvoe" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_sisrvoe}  
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_sisrvoe}/>

                            <TextField  required 
                                        label="Fecha Envio" 
                                        name="fecha_envio" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_envio} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_envio}/>

                            <TextField  required 
                                        label="Fecha Limite Respuesta" 
                                        name="fecha_limite_respuesta" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_limite_respuesta} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_limite_respuesta}/>

                            <TextField  required 
                                        label="Fecha Resp Enviada Sisrvoe" 
                                        name="fecha_resp_enviadaSisrvoe" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_resp_enviadaSisrvoe} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_resp_enviadaSisrvoe}/>

                            <TextField  required 
                                        label="Observaciones" 
                                        name="observaciones" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="text"
                                        value={formik.values.observaciones} 
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.observaciones}/>

                            <TextField  required 
                                        label="RVOE Obtenido" 
                                        name="fecha_rvoe_obtenido" 
                                        className="update-input" 
                                        variant="outlined"  
                                        margin="normal" 
                                        type="date"
                                        value={formik.values.fecha_rvoe_obtenido}  
                                        onBlur={formik.handleBlur} 
                                        onChange={formik.handleChange} 
                                        defaultValue={formik.initialValues.fecha_rvoe_obtenido}/>

                        </div>
                        <Button variant="contained" color="primary" id="modal-modal-button" onClick={() => formik.handleSubmit()}>Update</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default TramiteS;