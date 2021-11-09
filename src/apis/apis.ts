import axios, { AxiosResponse } from 'axios';
import store from '../store/indexes';
import { reducerSlice } from '../store/reducer';


const APIOrders = axios.create({
    baseURL: 'https://restcountries.com/v2/',
    headers: {
      'Content-Type': 'application/json',
    },
});
  
export const getApiDataFromApi = (): Promise<AxiosResponse> => {
    return getApiCall('/all')
}

export const getCountryDetailsFromApi = (): Promise<any> => {
  const requestOne = APIOrders.get('/name/Australia');
  const requestTwo = APIOrders.get('/name/Mexico');
  const requestThree = APIOrders.get('/name/Indonesia');
  const requestFour = APIOrders.get('/name/USA');
  const requestFive = APIOrders.get('/name/Russia');
  return getAll([requestOne, requestTwo, requestThree, requestFour, requestFive]).catch(err => { });
  
}

export const getCountryFromInputFromApi = (params: any): Promise<AxiosResponse> => {
  return getApiCall('/name/' + params.input.value);
}

const getApiCall = (url: string): Promise<AxiosResponse> => {
  store.dispatch(reducerSlice.actions.setLoaderTrue());
  const pro = APIOrders.get(url);
  APIOrders.get(url)
    .then(() => store.dispatch(reducerSlice.actions.setLoaderFalse()))
    .catch(err => {
      store.dispatch(reducerSlice.actions.setLoaderFalse());
      store.dispatch(reducerSlice.actions.setErrorMsg("Something bad happened"));
  })
  return pro;
}

const getAll = (allPromise: any): Promise<any> => {
  store.dispatch(reducerSlice.actions.setLoaderTrue());
  const pro = axios.all(allPromise);
  pro.then(() => store.dispatch(reducerSlice.actions.setLoaderFalse()))
    .catch(err => {
      store.dispatch(reducerSlice.actions.setLoaderFalse());
      store.dispatch(reducerSlice.actions.setErrorMsg("Something bad happened"));
    });
  return pro;
}