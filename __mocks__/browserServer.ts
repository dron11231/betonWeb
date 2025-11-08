import { setupWorker } from 'msw/browser';
import { authHandlers } from './serverHandlers/authHandlers';

export const worker = setupWorker(...authHandlers);
