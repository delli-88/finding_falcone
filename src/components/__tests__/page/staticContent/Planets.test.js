import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Planets from '../../../page/staticContent/Planets';

describe('Planets component', () => {
  it('display explore planets page', () => {
    render(<Planets />, { wrapper: BrowserRouter });

    const planetsContentElement = document.querySelector('.display-planets');
    expect(planetsContentElement).toBeInTheDocument();
  });
});
