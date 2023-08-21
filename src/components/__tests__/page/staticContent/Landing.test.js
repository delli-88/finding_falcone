import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Landing from '../../../page/staticContent/Landing';

describe('Landing component', () => {
  it('display landing page', () => {
    render(<Landing />, { wrapper: BrowserRouter });

    const landingContentElement = document.querySelector('.hero-container');
    expect(landingContentElement).toBeInTheDocument();
  });
});
