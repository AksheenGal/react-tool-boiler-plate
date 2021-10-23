import { UndoOutlined, UserOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { reducerSlice } from '../store/reducer';
import { RootState, useAppDispatch } from './../store/indexes';

const Header = () => {
    const signOut = () => { 
        localStorage.setItem('Auth', 'false');
        dispatch(reducerSlice.actions.setAuth('false'));
    }
    const dispatch = useAppDispatch();
    const content = (
        <div>
            <a href="/" onClick={signOut}>Sign Out</a>
        </div>
      );
    const headerTitle = useSelector((state: RootState) => state.reducer.headerTitle)
    return (
        <HeaderStyle>
            <HeaderTitleStyle className="centerAlign">{headerTitle}</HeaderTitleStyle>
            <HeaderRight className="centerAlign">
                <UndoOutlined style={{ fontSize: '16px', margin: '5px' }}></UndoOutlined>
                <Popover content={content} title="Hello!!">
                    <UserOutlined style={{fontSize: '16px', margin: '5px'}}/>
                </Popover>
            </HeaderRight>
           
        </HeaderStyle>
    );
};

export default Header;

export const headerHeight = 55;

const HeaderStyle = styled.div`
    min-height: 55px;
    box-shadow: 0 8px 6px -6px lightgray;
    display: flex;
`

const HeaderTitleStyle = styled.div`
    display: flex;
    flex: 9;
    justify-content: center;
    font-weight: bold;
`

const HeaderRight = styled.div`
    text-align: right;
    margin: 10px;
    flex: 1;
`