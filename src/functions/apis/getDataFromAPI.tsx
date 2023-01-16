import axios from 'axios';

interface apiConfig {
  url: string;
  params: object;
  headers: object;
}

const getDataFromAPI = (
  config: apiConfig,
  onSuccess: object,
  onError: object,
) => {
  // set options
  const options = {
    method: 'GET',
    url: config.url,
    params: config.params,
    headers: config.headers,
  };
  // send request
  axios
    .request(options)
    .then(function (response) {
      onSuccess(response.data.result);
    })
    .catch(error => onError(error));
};

export {getDataFromAPI};
