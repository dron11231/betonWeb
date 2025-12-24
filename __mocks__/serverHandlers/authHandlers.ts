import { delay, http, HttpResponse } from 'msw';
import { signUpResponse } from '../data';

const signUpResolver = async () => {
  await delay(500);

  return HttpResponse.json(signUpResponse, { status: 201 });
};

const signUpHandler = http.post('/research/api/auth/sign-up', signUpResolver);

export const authHandlers = [signUpHandler];
