import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiDataFromApi, getCountryDetailsFromApi, getCountryFromInputFromApi } from "../apis/apis";

interface StateSlice {
    screenDetail: string;
    headerTitle: string;
    successMsg: string;
    errorMsg: string;
    apiData: any[];
    apiCountryData: any[];
    dataForChart: any[];
    loader: boolean;
    isAuthenticated: string;
}

const initialState: StateSlice = {
    screenDetail: '',
    headerTitle: 'Country Dashboard',
    successMsg: '',
    errorMsg: '',
    apiData: [],
    apiCountryData: [],
    dataForChart: [],
    loader: false,
    isAuthenticated: 'false'
}

export const getApiData = createAsyncThunk(
    '/reducer/getApiData', async () => {
        const response = await getApiDataFromApi();
        return response.data;
    }
)

export const getCountryDetails = createAsyncThunk(
    '/reducer/getCountryDetails', async () => {
        const response = await getCountryDetailsFromApi();
        return response;
    }
)

export const getCountryFromInput = createAsyncThunk(
    '/reducer/getCountryFromInput', async (params: any, { rejectWithValue }) => {
        try {
            const response = await getCountryFromInputFromApi(params);
            if (response.data && response.data.length !== 0) {
                return response.data;
            }
            rejectWithValue('No Result Found')
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)

export const reducerSlice = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        setScreenDetail: (state, action) => {
            state.screenDetail = action.payload;
        },

        setHeaderTitle: (state, action) => {
            state.headerTitle = action.payload
        },


        setSuccessMsg: (state, action) => {
            state.successMsg = action.payload
        },

        setErrorMsg: (state, action) => {
            state.errorMsg = action.payload
        },

        setEmptyCountryFromInput: (state) => {
            state.apiCountryData = []
        },

        setLoaderTrue: (state) => {
            state.loader = true;
        },

        setLoaderFalse: (state) => {
            state.loader = false;
        },

        setAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getApiData.fulfilled, (state, action) => {
            state.apiData = action.payload;
        });

        builder.addCase(getCountryFromInput.fulfilled, (state, action) => {
            state.apiCountryData = action.payload;
        })

        builder.addCase(getCountryFromInput.rejected, (state, action: any) => {
            state.apiCountryData = initialState.apiCountryData;
            const requestUrl = action.payload.request.responseURL.split('/');
            console.log(requestUrl);
            state.errorMsg = 'No Result found with country search input: ' + requestUrl[requestUrl.length - 1];
        })

        builder.addCase(getCountryDetails.fulfilled, (state, action) => {
            state.dataForChart = []
            action.payload.forEach((element: any ) => {
                state.dataForChart.push(element.data);
            });
        })
    }
});

export const { setScreenDetail, setHeaderTitle, setSuccessMsg } = reducerSlice.actions;


export default reducerSlice.reducer;