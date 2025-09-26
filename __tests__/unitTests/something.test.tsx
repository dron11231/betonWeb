import { render, screen } from '@testing-library/react';

import { AuthPage } from 'src/pages/AuthPage';

test('test', () => {
  render(<AuthPage />);

  expect(screen.getByText('Auth')).toBeInTheDocument();
});
