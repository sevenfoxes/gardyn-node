import { isDev, local, prod } from '../config';
import { objectToQueryString } from './utils';

const host = isDev ? local : prod;

const request = async (url, params = { format: 'json' }, method = 'GET') => {
  const isGet = method === 'GET';
  let rUrl;

  if (isGet && params) {
    rUrl = `${url}?${objectToQueryString(params)}`;
  }

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: '',
  };

  if (!isGet && params) {
    rUrl = options.body = JSON.stringify(params);
  }

  console.log(rUrl);

  const response = await fetch(host + url, options);

  if (response.status !== 200) {
    return console.error('Hmm, it appears that things are... NOT OK!');
  }

  const result = await response.json();

  return result;
};

const get = async (url, params?: any) => request(url, params);

const create = async (url, params?: any) => request(url, params, 'POST');

const update = async (url, params?: any) => request(url, params, 'PUT');

const remove = async (url, params?: any) => request(url, params, 'DELETE');

export const shadow = { get, create, update, remove };
