import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TimeTaken from '../../../page/appLogic/timeTaken/TimeTaken'
import '@testing-library/jest-dom/extend-expect';

describe('TimeTaken component', () => {
  it('display time card', () => {
    render(<TimeTaken />, { wrapper: BrowserRouter });

    const timeCardElement = document.querySelector('.time-container');
    expect(timeCardElement).toBeInTheDocument();
  });
});



