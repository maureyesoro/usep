import { TramiteUniv } from "../../models//tramiteuniv/types";
import { authorizationFetch } from "../../utils/requests/auth";

export const fetchTramitesUniv = async (): Promise<TramiteUniv[]> => {
    const response = await authorizationFetch(
      "http://104.237.129.63:8017/usep/tramiteUniv/",
      {
        method: "GET",
      }
    );
    if (response.status === 200) {
        const Tramites: TramiteUniv[] = await response.json();
        console.log(Tramites)
        return Tramites;
      } else {
        throw new Error("Error en solicitud");
      }
};


export const createTramiteUniv = async (tramiteuniv: TramiteUniv): Promise<TramiteUniv> => {
    const response = await authorizationFetch(
      `http://104.237.129.63:8017/usep/tramiteUniv/`,
      {
        headers: {
          'Content-Type': 'application/json',
         },
        method: "POST",
        body: JSON.stringify(tramiteuniv)
      }
    );
    
    if (response.status === 200) {
      const newTramiteUniv: TramiteUniv = await response.json();
      console.log(newTramiteUniv)
      return newTramiteUniv;
    } else {
      throw new Error("Error en solicitud");
    }
};

export const fetchTramite = async (id: any): Promise<TramiteUniv> => {
  const response = await authorizationFetch(
    `http://104.237.129.63:8017/usep/tramiteUniv/${id.id}/`,
    {
      
      method: "GET",
      
    }
    );
    
  if (response.status === 200) {
    const TramiteUniv: TramiteUniv = await response.json();
    console.log(TramiteUniv)
    return TramiteUniv;
  } else {
    throw new Error("Error en solicitud");
  }
};

export const updateTramiteUniv = async (newTramite: TramiteUniv | null, id: any): Promise<Partial<TramiteUniv>> => {
  const response = await authorizationFetch(
    `http://104.237.129.63:8017/usep/tramiteUniv/${id}/`,
    {
      headers: {
        'Content-Type': 'application/json',
       },
      method: "PUT",
      body: JSON.stringify(newTramite)
    }
  );
  console.log()
  if (response.status === 200) {
    const tramiteUpdated: TramiteUniv = await response.json();
    console.log(tramiteUpdated)
    return tramiteUpdated;
  } else {
    throw new Error("Error en solicitud");
  }
};