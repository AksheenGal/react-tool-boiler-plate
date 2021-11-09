import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store/indexes';
import { reducerSlice } from '../store/reducer';
import Component from './Component';
import CountryChart from './CountryChart';
import Header from './Header';
import LeftNav from './LeftNav';
import Login from './Login';
import SearchCountry from './SearchCountry';

const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

const Navigation: React.FC = () => {
    const dispatch = useAppDispatch();
    const screenDetail = useSelector((state: RootState) => state.reducer.screenDetail);
    const successMsg = useSelector((state: RootState) => state.reducer.successMsg);
    const errorMsg = useSelector((state: RootState) => state.reducer.errorMsg);
    const loader = useSelector((state: RootState) => state.reducer.loader);
    const handleErrorOk = () => {
        dispatch(reducerSlice.actions.setErrorMsg(''))
    };
    const auth = useSelector((state: RootState) => state.reducer.isAuthenticated);
    const handleSuccessOk = () => {
        dispatch(reducerSlice.actions.setSuccessMsg(''))
    };
    return (
        <>
            {loader && <Spin style={{ position: 'absolute', top: '40%' }} indicator={antIcon} />}
            {loader && <div className="freezeScreen"></div>}
            {auth && auth === 'true' && <div>
                <Header></Header>
                <div style={{ display: 'flex' }}>
                    <LeftNav></LeftNav>
                    <div style={{ width: '100%', height: '700px', overflowY: 'scroll' }}>
                        <div className="screenHeader">{screenDetail}</div>
                        <Routes>
                            <Route path='/' element={ <Component />}>
                        </Route>
                            <Route path='/search' element={ <SearchCountry />}>
                        </Route>
                            <Route path='/countryChart' element={<CountryChart /> }>
                        </Route>
                        </Routes>
                    </div>
                </div>
            </div>}
            {auth && auth === 'false' && <Login></Login>}
            {(errorMsg !== '') && <Modal title="Error"
                    visible={errorMsg !== ''}
                    onOk={handleErrorOk}
                    width={300}
                    >
                        {errorMsg}
            </Modal>}
            
            {(successMsg !== '') && <Modal title="Success"
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