import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://rickandmortyapi.com/api/', () => {
    // Note that you DON'T have to stringify the JSON!
    return HttpResponse.json({ message: 'Hello, World!' });
  }),
];
