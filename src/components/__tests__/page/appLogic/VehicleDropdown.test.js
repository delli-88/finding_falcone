import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import VehicleDropdown from '../../../page/appLogic/vehicleDropdown/VehicleDropdown';

describe('VehicleDropdown component', () => {
  it('display dropdown for vehicle', () => {

    const vehicles = [
        {
            "name": "Space pod",
            "total_no": 2,
            "max_distance": 200,
            "speed": 2
        },
        {
            "name": "Space rocket",
            "total_no": 1,
            "max_distance": 300,
            "speed": 4
        },
        {
            "name": "Space shuttle",
            "total_no": 1,
            "max_distance": 400,
            "speed": 5
        },
        {
            "name": "Space ship",
            "total_no": 2,
            "max_distance": 600,
            "speed": 10
        }
      ]

  const destinations = {
    destination1 : {planet:"", vehicle:""},
    destination2 : {planet:"", vehicle:""},
    destination3 : {planet:"", vehicle:""},
    destination4 : {planet:"", vehicle:""}
}

  const destination = "destination1"
  const handleDestinations = jest.fn()
  const handleVehicle = jest.fn()

    render(<VehicleDropdown 
      vehicles={vehicles}
      destinations={destinations}
      destination={destination}
      handleDestinations={handleDestinations}
      handleVehicle={handleVehicle}
    />, { wrapper: BrowserRouter });

    const vehicleDropdownElement = document.querySelector('#vehicle-dropdown');
    expect(vehicleDropdownElement).toBeInTheDocument();
  });
});
