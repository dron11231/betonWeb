import { delay, http, HttpResponse } from 'msw';

const testResolver = async () => {
  console.log('resolver');
  await delay(500);

  return HttpResponse.json(
    {
      payload: {
        name: 'john',
        age: '28',
      },
    },
    { status: 200 }
  );
};

const testHandler = http.get('/research/api/user/create/phone', testResolver);

export const testHandlers = [testHandler];
