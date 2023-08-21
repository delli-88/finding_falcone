import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Destination from '../../../page/appLogic/destination/Destination'

describe('Destination component', () => {
  it('display destination card', () => {

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
  const index = 1
  const handleDestinations = jest.fn()

    render(<Destination 
      planets={planets}
      vehicles={vehicles}
      destinations={destinations}
      destination={destination}
      index={index}
      handleDestinations={handleDestinations}
    />, { wrapper: BrowserRouter });

    const destinationCardElement = document.querySelector('.destination-item');
    expect(destinationCardElement).toBeInTheDocument();
  });
});
