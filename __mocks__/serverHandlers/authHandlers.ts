import { delay, http, HttpResponse } from 'msw';
import { signUpResponse } from '../data';

const signUpResolver = async () => {
  await delay(500);

  return HttpResponse.json(signUpResponse, { status: 201 });
};

const signUpHandler = http.post(
  '/research/api/user/create/phone',
  signUpResolver
);

export const authHandlers = [signUpHandler];
