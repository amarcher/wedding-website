import 'whatwg-fetch';

function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


function parseJson(res) {
  return res.json();
}

// eslint-disable-next-line import/prefer-default-export
export function submitRsvp(data) {
  return post('/rsvp', data)
    .then(checkStatus)
    .then(parseJson);
}
