import { setupWorker } from 'msw/browser';
import { testHandlers } from './serverHandlers/testHandler';

export const worker = setupWorker(...testHandlers);
