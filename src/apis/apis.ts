import axios, { AxiosResponse } from 'axios';
import store from '../store/indexes';
import { reducerSlice } from '../store/reducer';


const APIOrders = axios.create({
    baseURL: 'https://restcountries.eu',
    headers: {
      'Content-Type': 'application/json',
    },
});
  
export const getApiDataFromApi = (): Promise<AxiosResponse> => {
    return getApiCall('/rest/v2/all')
}

export const getCountryDetailsFromApi = (): Promise<any> => {
  const requestOne = APIOrders.get('/rest/v2/name/Australia');
  const requestTwo = APIOrders.get('/rest/v2/name/Mexico');
  const requestThree = APIOrders.get('/rest/v2/name/Indonesia');
  const requestFour = APIOrders.get('/rest/v2/name/USA');
  const requestFive = APIOrders.get('/rest/v2/name/Russia');
  return getAll([requestOne, requestTwo, requestThree, requestFour, requestFive]).catch(err => { });
  
}

export const getCountryFromInputFromApi = (params: any): Promise<AxiosResponse> => {
  return getApiCall('/rest/v2/name/' + params.input.value);
}

const getApiCall = (url: string): Promise<AxiosResponse> => {
  store.dispatch(reducerSlice.actions.setLoaderTrue());
  const pro = APIOrders.get(url);
  APIOrders.get(url)
    .then(() => store.dispatch(reducerSlice.actions.setLoaderFalse()))
    .catch(err => {
      store.dispatch(reducerSlice.actions.setLoaderFalse())
  })
  return pro;
}

const getAll = (allPromise: any): Promise<any> => { 
  store.dispatch(reducerSlice.actions.setLoaderTrue());
  const pro = axios.all(allPromise);
  pro.then(() => store.dispatch(reducerSlice.actions.setLoaderFalse()));
  return pro;
}