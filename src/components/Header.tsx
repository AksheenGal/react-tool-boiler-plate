import React from 'react';
import { UndoOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from './../store/indexes';

const Header = () => {
    const headerTitle = useSelector((state: RootState) => state.reducer.headerTitle)
    return (
        <HeaderStyle>
            <strong>{headerTitle}</strong>
            <HeaderRight>
                <UndoOutlined style={{ fontSize: '16px' }}></UndoOutlined>
                Login Details
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
    text-align: right
`