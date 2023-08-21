import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import PlanetAutoCompleteDropdown from '../../../page/appLogic/planetAutoCompleteDropdown/PlanetAutoCompleteDropdown';

describe('PlanetAutoCompleteDropdown component', () => {
  it('display dropdown for planet autocomplete', () => {

    const planets = [
      {
          "name": "Donlon",
          "distance": 100
      },
      {
          "name": "Enchai",
          "distance": 200
      },
      {
          "name": "Jebing",
          "distance": 300
      },
      {
          "name": "Sapir",
          "distance": 400
      },
      {
          "name": "Lerbin",
          "distance": 500
      },
      {
          "name": "Pingasor",
          "distance": 600
      }
  ]

  const destinations = {
    destination1 : {planet:"", vehicle:""},
    destination2 : {planet:"", vehicle:""},
    destination3 : {planet:"", vehicle:""},
    destination4 : {planet:"", vehicle:""}
}

  const destination = "destination1"
  const index = 1
  const handleDestinations = jest.fn()

    render(<PlanetAutoCompleteDropdown 
      planets={planets}
      destinations={destinations}
      destination={destination}
      index={index}
      handleDestinations={handleDestinations}
    />, { wrapper: BrowserRouter });

    const planetAutocompleteElement = document.querySelector('.planet-selector');
    expect(planetAutocompleteElement).toBeInTheDocument();
  });
});
