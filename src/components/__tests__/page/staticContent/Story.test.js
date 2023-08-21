import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Story from '../../../page/staticContent/Story'

describe('Story component', () => {
  it('display story page', () => {
    render(<Story />, { wrapper: BrowserRouter });

    const storyContentElement = document.querySelector('.display-story');
    expect(storyContentElement).toBeInTheDocument();
  });
});
