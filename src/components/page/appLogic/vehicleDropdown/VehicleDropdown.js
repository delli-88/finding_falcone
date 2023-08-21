import React from "react"
import { useState } from "react";
import './vehicleDropdown.css'

const VehicleDropdown = ({destinations, destination, vehicles, handleDestinations, handleVehicle}) => {
    const [selectedVehicle, setSelectedVehicle] = useState(
        destinations[destination].vehicle.name || ''
      );

    const isVehicleAvailable = (vehicle) => {
        const zeroCount = 0
        if (vehicle.total_no===zeroCount){
            return true
        }
        return false
    }

    const isVehicleSuitable = (vehicle, planet) => {
        return vehicle.max_distance>=planet.distance
    }

    const getVehicleFromVehicles = (vehicleName, vehicles) => {
        return vehicles.find(vehicle => vehicle.name === vehicleName);
    }

    const generateVehiclesView = () =>{
        const vehiclesView = vehicles.map((vehicle)=>{
            return <option value={vehicle.name} disabled={isVehicleAvailable(vehicle)} key={`${destination}-${vehicle.name}`}>
              {selectedVehicle === vehicle.name ? vehicle.name : `${vehicle.name} (${vehicle.total_no})`}
            </option>

        })
        return vehiclesView
    }

    const getUpdatedDestinations = (vehicle) => {
      const updatedDestinations = { ...destinations };
      updatedDestinations[destination] = {
          ...updatedDestinations[destination],
          vehicle : {
              ...vehicle,
              total_no : vehicle.total_no-1
          }
      };
      return updatedDestinations
    }

    const getCurrentVehicle = (vehicle) => {
      const currentVehicle = {
        ...vehicle,
            total_no : vehicle.total_no-1
      }
      return currentVehicle
    }

    const handleAvailableVehicleChange = (vehicleSelected, vehicle, ) => {
      
      setSelectedVehicle(vehicleSelected)

      const updatedDestinations = getUpdatedDestinations(vehicle)
      handleDestinations(updatedDestinations);

      const previousVehicle = destinations[destination].vehicle
      const currentVehicle = getCurrentVehicle(vehicle)
      handleVehicle(previousVehicle, currentVehicle)
    }

    const handleVehicleChange = (event) => {
        const noSelection = ""
        const selectedPlanet = destinations[destination].planet
        const vehicle = getVehicleFromVehicles(event.target.value, vehicles)
        if(selectedPlanet===noSelection){
          const alertMessage = "Please select Destination planet first"
          alert(alertMessage)
        }else if(isVehicleSuitable(vehicle, selectedPlanet)){
            handleAvailableVehicleChange(event.target.value, vehicle)
        }else{
          const alertMessage = "The selected Vehicle cannot reach the selected Planet. Please select another Vehicle" 
          alert(alertMessage)
        }
    }
  
    const toContent = "To"
    const byContent = "By"

    return (
        <>
          <div className="form-control" id="vehicle-dropdown">
            <label htmlFor={`select-vehicle-${destination}`}>Vehicle</label>
            <select
              id={`select-vehicle-${destination}`}
              value={destinations[destination]?.vehicle.name || ""}
              onChange={handleVehicleChange}
            >
              <option className="placeholder" value="" disabled={true}>Select a Vehicle</option>
              {generateVehiclesView()}
            </select>
          </div>
          
          {destinations[destination].planet && (
            <div className="destination-card">
              {destinations[destination].planet && (
                <p>{toContent} {destinations[destination].planet.name}</p>
              )}
              {destinations[destination].vehicle.name && (
                <p>{byContent} {destinations[destination].vehicle.name}</p>
              )}
            </div>
          )}
        </>
    )
}

export default VehicleDropdown

