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

export const getCountryFromInputFromApi = (params: any): Promise<AxiosResponse> => {
  return APIOrders.get('/rest/v2/name/' + params.input.value);
}