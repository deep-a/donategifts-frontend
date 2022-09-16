import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Index from '../../src/pages/index';

afterEach(cleanup);

describe('Index', () => {
  it('should render without throwing an error', () => {
    render(<Index />);
  });

  it('should find the Community element', () => {
    render(<Index />);
    expect(screen.getByText('Community')).toBeInTheDocument();
  });
});
