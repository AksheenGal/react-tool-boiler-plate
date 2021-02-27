import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store/indexes';
import { reducerSlice } from '../store/reducer';
import Component from './Component';
import CountryChart from './CountryChart';
import Header from './Header';
import LeftNav from './LeftNav';
import SearchCountry from './SearchCountry';


const Navigation: React.FC = () => {
    const dispatch = useAppDispatch();
    const screenDetail = useSelector((state: RootState) => state.reducer.screenDetail);
    const successMsg = useSelector((state: RootState) => state.reducer.successMsg);
    const errorMsg = useSelector((state: RootState) => state.reducer.errorMsg);

    const handleErrorOk = () => {
        dispatch(reducerSlice.actions.setErrorMsg(''))
    };

    const handleSuccessOk = () => {
        dispatch(reducerSlice.actions.setSuccessMsg(''))
    };
    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div style={{ display: 'flex' }}>
                <LeftNav></LeftNav>
                <div style={{ width: '100%', height: '700px', overflowY: 'scroll' }}>
                    <div className="screenHeader">{screenDetail}</div>
                    <Route exact path='/'>
                        <Component></Component>
                    </Route>
                    <Route exact path='/search'>
                        <SearchCountry></SearchCountry>
                    </Route>
                    <Route exact path='/countryChart'>
                        <CountryChart></CountryChart>
                    </Route>
                </div>
            </div>
            {(errorMsg !== '') && <Modal title="Error"
                    visible={errorMsg !== ''}
                    onOk={handleErrorOk}
                    width={300}
                    >
                        {errorMsg}
            </Modal>}
            
            {(successMsg !== '') && <Modal title="Error"
                    visible={successMsg !== ''}
                    onOk={handleSuccessOk}
                    width={300}
                    >
                        {errorMsg}
                </Modal>}
        </>
    );
};

export default Navigation;