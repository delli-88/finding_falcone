import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Result from '../../../page/appLogic/result/Result';
import '@testing-library/jest-dom/extend-expect';

describe('Result component', () => {
  it('renders info-card when user enters directly into result page without selecting planets and vehicles', () => {
    render(<Result />, { wrapper: BrowserRouter });

    const infoCardElement = document.querySelector('.info-card');
    expect(infoCardElement).toBeInTheDocument();
  });
});



