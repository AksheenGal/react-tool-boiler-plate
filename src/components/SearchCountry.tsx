import { Button, Input } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { RootState } from '../store/indexes';
import { getCountryFromInput, reducerSlice } from '../store/reducer';

const SearchCountry = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params);
    let countryData = useSelector((state: RootState) => state.reducer.apiCountryData)
    const getCountryByName = () => {
        dispatch(getCountryFromInput(inputRef.current));
    }
    useEffect((): any => {
        dispatch(reducerSlice.actions.setScreenDetail('Search Countries by Name'));
        return dispatch(reducerSlice.actions.setEmptyCountryFromInput())
    }, [dispatch])

    return (
        <SearchCountryContainer>
            <Input ref={inputRef} style={{ width: '20%' }} placeholder="Search Coutry here" />
            <Button onClick={getCountryByName} style={{ marginLeft: '20px' }} type="primary">Get Country</Button>
            
            <div>
                population: {countryData.length ? countryData[0].population : 'Not Available'}
            </div>
        </SearchCountryContainer>
    );
};

const SearchCountryContainer = styled.div`
    padding: 3%;
    text-align: left;
`

export default SearchCountry;