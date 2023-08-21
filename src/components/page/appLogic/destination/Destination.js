import './destination.css'
import React from "react"
import VehicleDropdown from "../vehicleDropdown/VehicleDropdown";
import PlanetAutoCompleteDropdown from "../planetAutoCompleteDropdown/PlanetAutoCompleteDropdown";


const Destination = ({planets, vehicles, destinations, destination, index, handleDestinations, handleVehicle}) => {
    
  return (
        <>
          <div className="destination-item">
              <PlanetAutoCompleteDropdown
                destinations={destinations}
                destination={destination}
                planets={planets}
                handleDestinations={handleDestinations}
                index={index}
              />
              <VehicleDropdown
                destinations={destinations}
                destination={destination}
                vehicles={vehicles}
                handleDestinations={handleDestinations}
                handleVehicle={handleVehicle}
              />
          </div>
        </>
    )
}

export default Destination


