import React from 'react';
import { UndoOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState, useAppDispatch } from './../store/indexes';
import { Popover } from 'antd';
import { reducerSlice } from '../store/reducer';

const Header = () => {
    const signOut = () => { 
        localStorage.setItem('Auth', 'false');
        dispatch(reducerSlice.actions.setAuth('false'));
    }
    const dispatch = useAppDispatch();
    const content = (
        <div>
            <a href="#" onClick={signOut}>Sign Out</a>
        </div>
      );
    const headerTitle = useSelector((state: RootState) => state.reducer.headerTitle)
    return (
        <HeaderStyle>
            <strong>{headerTitle}</strong>
            <HeaderRight>
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
`

const HeaderRight = styled.div`
    text-align: right;
    margin: 10px;
`