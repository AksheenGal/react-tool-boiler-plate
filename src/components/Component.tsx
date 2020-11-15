import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState, useAppDispatch } from '../store/indexes';
import { getApiData, reducerSlice } from '../store/reducer';

const Component: React.FC = () => {
    const dispatch = useAppDispatch();
    const countryData = useSelector((state: RootState) => state.reducer.apiData);
    useEffect(() => {
        dispatch(getApiData());
        dispatch(reducerSlice.actions.setScreenDetail('Screen Detail Section'));
    }, [dispatch])
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
            {countryData.map((data, index) => (
                <CountryData>
                    {index+1 + '.  '} {data.name}
               </CountryData> 
            ))}
        </div>
    )
};

export const CountryData = styled.div`
flex: 1 0 20%;
`

export default Component;