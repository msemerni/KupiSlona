import { BACKEND_URL_QUERY } from '../constants/constants';

const getGQL = url =>
  (query, variables = {}) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(localStorage.authToken ? { Authorization: "Bearer " + localStorage.authToken } : {}),
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          return Object.values(data.data)[0];
        } else throw new Error(JSON.stringify(data.errors));
      });

const gql = getGQL(`${BACKEND_URL_QUERY}`);

export default gql;
