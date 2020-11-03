import React from 'react';
import styled from 'styled-components';

// common button 
const CommonButton = (props) => {
    return (
        <ButtonStyle>
            {props.title}
        </ButtonStyle>
    )
};

const ButtonStyle = styled.button`
    width : 200px;
    height : 60px;
    background-color : #ff6464;
    border : 0;
    border-radius : 50px;
    margin : 0 auto 0;
    display : block;
    color : white;
    font-size : 24px;
    outline : 0;
    box-shadow : 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition:all .3s ease-in-out;
    font-family : "notosans";

    &:active {
        border : 0;
        outline : 0;
    }

    &:hover {
        cursor: pointer;
        background-color : #FF908A;
    }
`

export default CommonButton;