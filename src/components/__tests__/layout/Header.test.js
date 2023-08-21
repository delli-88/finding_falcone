import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../layout/header/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header component', () => {
  it('displays Header', () => {
    render(<Header />, { wrapper: BrowserRouter });

    const headerElement = document.querySelector('.nav-bar');
    expect(headerElement).toBeInTheDocument();
  });
});



