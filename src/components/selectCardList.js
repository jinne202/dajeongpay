import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectCard from '../components/selectCard'
import styled, { css } from 'styled-components';

const SelectCardList = () => {
    return(
        <div>
            <SelectCardWrapper>
            <SelectCard id="joy"/>
            </SelectCardWrapper>
            <SelectCardWrapper>
                <SelectCard id="kind"/>
            </SelectCardWrapper>
            <SelectCardWrapper>
                <SelectCard id="thanks"/>
            </SelectCardWrapper>
            <SelectCardWrapper>
                <SelectCard id="uncomfortable"/>
            </SelectCardWrapper>
        </div>
    )
}

const SelectCardWrapper = styled.div`
    margin-bottom : 31px;
`

export default SelectCardList;