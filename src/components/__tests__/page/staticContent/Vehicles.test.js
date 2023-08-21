import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Vehicles from '../../../page/staticContent/Vehicles';

describe('Vehicles component', () => {
  it('display explore vehicles page', () => {
    render(<Vehicles />, { wrapper: BrowserRouter });

    const vehiclesContentElement = document.querySelector('.display-vehicles');
    expect(vehiclesContentElement).toBeInTheDocument();
  });
});
