import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../layout/footer/Footer';

describe('Footer component', () => {
  it('display footer', () => {
    render(<Footer />, { wrapper: BrowserRouter });

    const footerElement = document.querySelector('.footer');
    expect(footerElement).toBeInTheDocument();
  });
});
