import { createRoot } from 'react-dom/client';
import App from './App';
import 'assets/styles/index.scss';
import 'assets/fonts/index.scss';

async function enableMocking() {
  if (MSW_ACTIVE) {
    const { worker } = await import('../__mocks__/browserServer');

    return worker.start({ onUnhandledRequest: 'warn' });
  }

  return Promise.resolve();
}

const container = document.getElementById('root');
const root = createRoot(container!);
enableMocking().then(() => root.render(<App />));
