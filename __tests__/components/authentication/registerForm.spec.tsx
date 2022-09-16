import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import RegisterForm from '@/components/authentication/RegisterForm';

afterEach(cleanup);

describe('RegisterForm', () => {
  it('should render without throwing an error', () => {
    render(<RegisterForm modalDisplay={false} toggleModal={() => {}} />);
  });
});
