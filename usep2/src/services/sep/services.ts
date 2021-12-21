import { TramiteSep } from "../../models//tramitesep/types";
import { authorizationFetch } from "../../utils/requests/auth";

export const fetchTramitesSep = async (): Promise<TramiteSep[]> => {
    const response = await authorizationFetch(
      "http://104.237.129.63:8017/usep/sep/tramiteSep/",
      {
        method: "GET",
      }
    );
    if (response.status === 200) {
        const Tramites: TramiteSep[] = await response.json();
        console.log(Tramites)
        return Tramites;
      } else {
        throw new Error("Error en solicitud");
      }
};


export const createTramiteSep = async (tramitesep: TramiteSep): Promise<TramiteSep> => {
    const response = await authorizationFetch(
      `http://104.237.129.63:8017/usep/sep/tramiteSep/`,
      {
        headers: {
          'Content-Type': 'application/json',
         },
        method: "POST",
        body: JSON.stringify(tramitesep)
      }
    );
    
    if (response.status === 200) {
      const newTramiteSep: TramiteSep = await response.json();
      console.log(newTramiteSep)
      return newTramiteSep;
    } else {
      throw new Error("Error en solicitud");
    }
};

export const fetchTramite = async (id: any): Promise<TramiteSep> => {
  const response = await authorizationFetch(
    `http://104.237.129.63:8017/usep/sep/tramiteSep/${id.id}/`,
    {
      
      method: "GET",
      
    }
    );
    
  if (response.status === 200) {
    const TramiteSep: TramiteSep = await response.json();
    console.log(TramiteSep)
    return TramiteSep;
  } else {
    throw new Error("Error en solicitud");
  }
};

export const updateTramiteSep = async (newTramite: TramiteSep | null, id: any): Promise<Partial<TramiteSep>> => {
  const response = await authorizationFetch(
    `http://104.237.129.63:8017/usep/sep/tramiteSep/${id}/`,
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
    const tramiteUpdated: TramiteSep = await response.json();
    console.log(tramiteUpdated)
    return tramiteUpdated;
  } else {
    throw new Error("Error en solicitud");
  }
};