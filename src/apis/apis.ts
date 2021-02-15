import axios, { AxiosResponse } from 'axios';


const APIOrders = axios.create({
    baseURL: 'https://restcountries.eu',
    headers: {
      'Content-Type': 'application/json',
    },
});
  
export const getApiDataFromApi = (): Promise<AxiosResponse> => {
    return APIOrders.get('/rest/v2/all')
}

export const getCountryDetailsFromApi = (): Promise<any> => {
  const requestOne = APIOrders.get('/rest/v2/name/Australia');
  const requestTwo = APIOrders.get('/rest/v2/name/Mexico');
  const requestThree = APIOrders.get('/rest/v2/name/Indonesia');
  const requestFour = APIOrders.get('/rest/v2/name/USA');
  const requestFive = APIOrders.get('/rest/v2/name/Russia');
  return axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive]).catch(err => { });
  
}

export const getCountryFromInputFromApi = (params: any): Promise<AxiosResponse> => {
  return APIOrders.get('/rest/v2/name/' + params.input.value);
}