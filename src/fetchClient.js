const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io';

function request(
  url,
  method = 'GET',
  data = null, // we can send any data to the server
) {
  const options = { method };

  if (data) {
    // We add body and Content-Type only for the requests with data
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  // for a demo purpose we emulate a delay to see if Loaders work
  return fetch(BASE_URL + url, options).then((response) => response.json());
}

export const client = {
  get: (url) => request(url),
};
