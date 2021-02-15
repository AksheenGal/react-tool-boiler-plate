import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiDataFromApi, getCountryFromInputFromApi } from "../apis/apis";

interface StateSlice {
    screenDetail: string;
    headerTitle: string;
    successMsg: string;
    errorMsg: string;
    apiData: any[];
    apiCountryData: any[];
}

const initialState: StateSlice = {
    screenDetail: '',
    headerTitle: 'Header Title',
    successMsg: '',
    errorMsg: '',
    apiData: [],
    apiCountryData: []
}

export const getApiData = createAsyncThunk(
    '/reducer/getApiData', async () => {
        const response = await getApiDataFromApi();
        return response.data;
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getApiData.fulfilled, (state, action) => {
            state.apiData = action.payload;
        });

        builder.addCase(getCountryFromInput.fulfilled, (state, action) => {
            state.apiCountryData = action.payload;
        })

        builder.addCase(getCountryFromInput.rejected, (state, action) => {
            state.apiCountryData = []
            state.errorMsg = 'Not Found';
        })
    }
});

export const { setScreenDetail, setHeaderTitle, setSuccessMsg } = reducerSlice.actions;


export default reducerSlice.reducer;