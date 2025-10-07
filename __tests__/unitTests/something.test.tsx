import { render, screen } from '@testing-library/react';

import { AuthPage } from 'pages/AuthPage';

test('test', () => {
  render(<AuthPage />);

  expect(screen.getByText('Email')).toBeInTheDocument();
});
