import { render, screen } from '@testing-library/react';
import App from 'App';

describe('Проверка корректной переадрессации на страницу авторизации и работы этой страницы', () => {
  it('Если пользователь неавторизован, происходит переадрессация на страницу авторизации', async () => {
    render(<App />);

    expect(await screen.findByTestId('auth-page')).toBeVisible();
  });
});
