import { useState } from "react";
import './planetAutoCompleteDropdown.css'

const PlanetAutoCompleteDropdown = ({destinations, destination, index, planets, handleDestinations}) => {
    const [inputValue, setInputValue] = useState(destinations[destination].planet.name||"");
    const [isBlurTriggered, setIsBlurTriggered] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const unitIncrement = 1

    const isPlanetAlreadySelected = (planet) => {
        const selectedPlanets = Object.values(destinations).map(
            (destination) => destination.planet.name
          );
          return selectedPlanets.includes(planet);
    }

    const getPlanetFromPlanets = (planetName, planets) => {
        return planets.find(planet => planet.name === planetName);
    }

    const getUpdatedDestinations = (planet) => {
        const updatedDestinations = { ...destinations };
        updatedDestinations[destination] = {
            ...updatedDestinations[destination],
            planet
        };
        return updatedDestinations
    }

    const handlePlanetChange = (planetName) => {
        const planet = getPlanetFromPlanets(planetName, planets)
        const updatedDestinations = getUpdatedDestinations(planet)
        handleDestinations(updatedDestinations);      
    }
    
    const handlePlanetSelect = (planet) => {
        handlePlanetChange(planet.name)
        setIsDropdownOpen(false);
        setIsBlurTriggered(false);
        setInputValue(planet.name)
    };
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputClick = () => {
    if (!isBlurTriggered) {
        setIsDropdownOpen(!isDropdownOpen);
    }
    }

    const handleInputBlur = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const getMatchingPlanets = () =>{ 
        const matchingPlanets = planets.filter(planet =>
            planet.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        return matchingPlanets
    }

    const PlanetsView = () => {

        const matchingPlanets = getMatchingPlanets()
        const planetsView = matchingPlanets.map((planet) => (
            <li
                key={planet.name}
                onMouseDown={(e) => {
                  e.preventDefault();
                  if(!isPlanetAlreadySelected(planet.name)){
                    setInputValue(planet.name)
                    handlePlanetSelect(planet)
                  }
                }}
                
                className={isPlanetAlreadySelected(planet.name)?"disabled":""}
            >
                {planet.name}
            </li>
        ))
          return planetsView
      }

    const headerContent = "Planet"

    return (
        <>
        <h4>{headerContent} {index + unitIncrement}</h4>
        <div className="planet-selector">
            <div className="input-container">
              <label htmlFor={`select-planet-${destination}`}>{headerContent}</label>
              <input
                  id={`select-planet-${destination}`}
                  className="planet-input"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Select a Planet"
                  onFocus={handleInputClick}
                  onBlur={handleInputBlur}
                  spellCheck="false" 
                  autoComplete="off"
              />
            </div>
            {isDropdownOpen && (
                <ul className="planet-list">
                    <PlanetsView/>
                </ul>
            )}
        </div>
        </>
    )
}

export default PlanetAutoCompleteDropdown