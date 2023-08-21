import config from "./api/endpoint"


export const getPlanetsAPI = `${config.endpoint}/planets`
export const getVehiclesAPI = `${config.endpoint}/vehicles`
export const postTokenAPI =`${config.endpoint}/token`
export const postFindAPI = `${config.endpoint}/find`


// change the destination planets count if we want more than 4 destinations
export const DESTINATION_PLANETS_COUNT = 4