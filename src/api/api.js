import axios from "axios";
import { getPlanetsAPI, getVehiclesAPI, postTokenAPI, postFindAPI } from "../constants";

const getPlanets = async() =>{
    try {
        const response = await axios.get(getPlanetsAPI)
        return response.data
    } catch (error) {
        const errorMessage = "Error fetching planets"
        console.log(errorMessage, error)
        return null
    }
}


const getVehicles = async() => {
    try {
        const response = await axios.get(getVehiclesAPI)
        return response.data
    } catch (error) {
        const errorMessage = "Error fetching vehicles"
        console.log(errorMessage, error)
        return null
    }   
}


const getToken = async() => { 
    try {
        const reqestBody = {}
        const reqestHeaders = { headers : {'Accept': 'application/json'}}
        const response = await axios.post(postTokenAPI,reqestBody, reqestHeaders)
        return response.data
    } catch (error) {
        const errorMessage = "Error fetching token" 
        console.log(errorMessage, error)
        return null
    }
}

const postFindFalcone = async(selectedPlanets, selectedVehicles)=>{
    try {
        const token = await getToken()
        const reqestBody = {
            token:token.token,
            planet_names : selectedPlanets,
            vehicle_names : selectedVehicles
        }
        const reqestHeaders = { headers : {'Accept': 'application/json'}}
        const response = await axios.post(postFindAPI, reqestBody, reqestHeaders)
        return response.data
    } catch (error) {
        const errorMessage = "Error Post request for Finding Falcone"
        console.log(errorMessage, error)
        return null
    }
}

export { getPlanets, getVehicles, getToken, postFindFalcone}

