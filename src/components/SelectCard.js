import React from 'react';
import styled, { css } from 'styled-components';
// 깃 추가용

const SelectCard = (props) => {
    const {
        id, funding, checkedTitle, unCheckedTitle, keyword, keyword2, check, handleCheckedId
    } = props;
    return (
        <SelectBox onClick={e => handleCheckedId(e, id)} check={check}>
            <SelectBox_Left>
                <img src={check? checkedTitle : unCheckedTitle}/>
                <SelectText check={check}>
                    당신이 '{keyword}'을 느꼈다면 {keyword2} 감정을 펀딩해주세요
                </SelectText>
            </SelectBox_Left>
            <SelectBox_Right id={id}>
                <img src={funding}/>
            </SelectBox_Right>
        </SelectBox>
    )
}

const SelectBox = styled.div`
    width : 750px;
    height : 130px;
    position : relative;
    background-color : white;
    border : 3px solid white;
    border-radius : 16px;
    box-shadow : 0 0 10px 0 rgba(0, 0, 0, 0.05);
    transition : border 0.1s ease-in-out;
    transition:background-color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        border : 3px solid #ff6464;
    }

    ${props =>
    props.check &&
    css`
      background : #ff7b7b;
      border : 3px solid #ff6464;
    `}
`

const SelectBox_Left = styled.div`
    width : 460px;
    margin : 28px 0 0 49px;
    font-size : 18px;
`

const SelectBox_Right = styled.div`
    position : absolute;
    ${props =>
        props.id === "joy" &&
        css`
            width : 219px;
            height : 180px;
            bottom : -3px;
            right : 18px;
        `
    }
    ${props =>
        props.id === "kind" &&
        css`
            width : 210px;
            height : 130px;
            top : -28px;
            right : 27px;
        `
    }
    ${props =>
        props.id === "thanks" &&
        css`
            width : 204px;
            height : 130px;
            top : -28px;
            right : 18px;
        `
    }
    ${props =>
        props.id === "uncomfortable" &&
        css`
            width : 170px;
            height : 142px;
            top : -23px;
            right : 52px;
        `
    }
`


const SelectText = styled.p`
    margin : 5px 0 0 0;
    color : #444;
    font-size : 18px;
    font-family: "notosansBold";
    font-weight : 600;

    ${props =>
    props.check &&
    css`
      color : white;
    `}
`

export default SelectCard;