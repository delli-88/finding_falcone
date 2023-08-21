import './findFalcone.css'
import Header from "../../../layout/header/Header"
import Footer from "../../../layout/footer/Footer"
import Destination from "../destination/Destination"
import validate from "../../../validation/validate";
import TimeTaken from "../timeTaken/TimeTaken";
import generateRandomId from "../../../../utils/helpers";
import { getPlanets, getVehicles, postFindFalcone } from "../../../../api/api";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import { DESTINATION_PLANETS_COUNT } from '../../../../constants';


const generateInitialDestinationsState = (destinationPlanetsCount) => {
    const initialState = {};
    for (let i = 1; i <= destinationPlanetsCount; i++) {
      initialState[`destination${i}`] = { planet: "", vehicle: "" };
    }
    return initialState;
  };

const generateDestinationsList = (destinationPlanetsCount) => {
    const destinationsList = [];
    for (let i = 1; i <= destinationPlanetsCount; i++) {
        destinationsList.push(`destination${i}`);
    }
    return destinationsList
}

const FindFalcone = () => {

    const initialDestinationsState = generateInitialDestinationsState(DESTINATION_PLANETS_COUNT)
    const [destinations, setDestinations] = useState(initialDestinationsState)
    const [timeTaken, setTimeTaken] = useState(0)
    const [planets, setPlanets] = useState([])
    const [vehicles, setVehicles] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchOnLoad = async() => {
            const planetsOnLoad = await getPlanets()
            setPlanets([...planetsOnLoad])

            const vehiclesOnLoad = await getVehicles()
            setVehicles([...vehiclesOnLoad])
        }
        fetchOnLoad()
    }, [])

    const calculateTotalTimeTaken = (destinationList) => {
        let totalTime = 0;
        const minCount = 0

        for (const destination of Object.values(destinationList)) {
            if(destination.planet.name?.length>minCount && destination.vehicle.name?.length>minCount){
                const destinationTotal = destination.planet.distance / destination.vehicle.speed;
                totalTime += destinationTotal;
            }            
        }
        return totalTime
    }

    const handleDestinations = (updatedDestinations) => {

        setDestinations({
            ...updatedDestinations
        })

        const totalTimeTaken = calculateTotalTimeTaken(updatedDestinations)
        setTimeTaken(totalTimeTaken)
    }

    const getNewVehicles = (previousVehicle, currentVehicle) => {
        const emptyVehicle = ""
        const unitIncrement = 1
        const newVehicles = vehicles.map((vehicle)=>{

            if(previousVehicle!==emptyVehicle && previousVehicle.name===vehicle.name){
                return{
                    ...vehicle,
                    total_no: vehicle.total_no + unitIncrement
                }
            }
            if (currentVehicle!==emptyVehicle && currentVehicle.name===vehicle.name){
                return{
                    ...vehicle,
                    total_no: vehicle.total_no - unitIncrement
                } 
            }
            return vehicle
        })
        return newVehicles
    }

    const handleVehicle = (previousVehicle, currentVehicle) => {
        const newVehicles =  getNewVehicles(previousVehicle, currentVehicle)
        setVehicles(newVehicles)
    }



    const DestinationsView = () => {
        const destinationsList = generateDestinationsList(DESTINATION_PLANETS_COUNT)

        const generatedDestinations = destinationsList.map((destination, index)=>{
            return < Destination 
                        planets={planets} 
                        vehicles={vehicles}
                        destinations = {destinations} 
                        destination={destination} 
                        index={index} 
                        handleDestinations={handleDestinations}
                        handleVehicle = {handleVehicle}
                        key={generateRandomId(10)}
                        className="planet-card"
                />
        })

        return (
            <div spacing={2} className="planet-container">
                {generatedDestinations}
            </div>
        )
    }


    const handleReset = async() => {
        const initialDestinationsState = generateInitialDestinationsState(DESTINATION_PLANETS_COUNT)
        setDestinations({
            ...initialDestinationsState
        })

        const allVehicles = await getVehicles()
        setVehicles([...allVehicles])
        
        const zeroTime = 0
        setTimeTaken(zeroTime)
    }


    const getSelectedPlanets = (destinations) => {
        const selectedPlanets = Object.values(destinations).map(
            (destination) => destination.planet.name
        );
        
        return selectedPlanets
    }

    const getSelectedVehicles = (destinations) => {
        const selectedVehicles = Object.values(destinations).map(
            (destination) => destination.vehicle.name
        );

        return selectedVehicles
    }

    const findFalcone = async() => {
        if(validate(destinations)){
            const selectedPlanets = getSelectedPlanets(destinations)
            const selectedVehicles = getSelectedVehicles(destinations)
            const findFalconeResponse = await postFindFalcone(selectedPlanets, selectedVehicles)
            return findFalconeResponse
        }else{
            const alertMessage = "Please Select all the planet destinations with a vehicle for each of the planet"
            alert(alertMessage)
        }
    }

    const handleFind = async() => {
        const result = await findFalcone()
        if(result){
            const navigateTo = '/result'
            const props = { state: { result, timeTaken } }
            navigate(navigateTo, props);
        }
    }

    const resetButtonContent = "Reset"
    const findButtonContent = "Find Falcone"

    return (
        <>
            <Header/>
            <div className="planets-container">
                <DestinationsView />
                <TimeTaken timeTaken={timeTaken}/>                
                <div className="button-container">
                    <button className="reset-button" onClick={handleReset}>{resetButtonContent}</button>
                    <button className="find-button" onClick={handleFind}>{findButtonContent}</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default FindFalcone

