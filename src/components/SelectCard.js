import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import joyPink from '../data/img/joy_pink.png';
import joyWhite from '../data/img/joy_white.png';
import fundingImg1 from '../data/img/funding_img1.png';
import kindPink from '../data/img/kind_pink.png';
import kindWhite from '../data/img/kind_white.png';
import fundingImg2 from '../data/img/funding_img2.png';
import thanksPink from '../data/img/thanks_pink.png';
import thanksWhite from '../data/img/thanks_white.png';
import fundingImg3 from '../data/img/funding_img3.png';
import unPink from '../data/img/un_pink.png';
import unWhite from '../data/img/un_white.png';
import fundingImg4 from '../data/img/funding_img4.png';

const SelectCard = (props) => {

    const [check, setCheck] = useState(false);

    const handleClick = (e) => {
        setCheck(!check);
        console.log(check, props.id);
    }

    if (props.id === "joy"){
        return (
            <SelectBox onClick={handleClick} check={check}>
                <SelectBox_Left>
                    <img src={check ? joyWhite : joyPink}/>
                    <SelectText check={check}>당신이 '기쁨'을 느꼈다면 기쁜 감정을 펀딩 해주세요</SelectText>
                </SelectBox_Left>
                <SelectBox_Right_1>
                    <img src={fundingImg1}/>
                </SelectBox_Right_1>
            </SelectBox>
        )
    } else if (props.id === "kind") {
        return (
            <SelectBox onClick={handleClick} check={check}>
                <SelectBox_Left>
                    <img src={check ? kindWhite : kindPink}/>
                    <SelectText check={check}>당신이 ‘다정함’을 느꼈다면 다정한 감정을 펀딩 해주세요</SelectText>
                </SelectBox_Left>
                <SelectBox_Right_2>
                    <img src={fundingImg2}/>
                </SelectBox_Right_2>
            </SelectBox>
        )
    } else if (props.id === "thanks") {
        return (
            <SelectBox onClick={handleClick} check={check}>
                <SelectBox_Left>
                    <img src={check ? thanksWhite : thanksPink}/>
                    <SelectText check={check}>당신이 ‘감사함’을 느꼈다면 감사한 감정을 펀딩 해주세요</SelectText>
                </SelectBox_Left>
                <SelectBox_Right_3>
                    <img src={fundingImg3}/>
                </SelectBox_Right_3>
            </SelectBox>
        )
    } else if (props.id === "un") {
        return (
            <SelectBox onClick={handleClick} check={check}>
                <SelectBox_Left>
                    <img src={check ? unWhite : unPink}/>
                    <SelectText check={check}>당신이 ‘불편함’을 느꼈다면 불편한 감정을 펀딩 해주세요</SelectText>
                </SelectBox_Left>
                <SelectBox_Right_4>
                    <img src={fundingImg4}/>
                </SelectBox_Right_4>
            </SelectBox>
        )
    }
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

const SelectBox_Right_1 = styled.div`
    width : 219px;
    height : 180px;
    position : absolute;
    bottom : -3px;
    right : 18px;
`

const SelectBox_Right_2 = styled.div`
    width : 210px;
    height : 130px;
    position : absolute;
    top : -28px;
    right : 27px;
`

const SelectBox_Right_3 = styled.div`
    width : 204px;
    height : 130px;
    position : absolute;
    top : -28px;
    right : 18px;
`

const SelectBox_Right_4 = styled.div`
    width : 170px;
    height : 142px;
    position : absolute;
    top : -23px;
    right : 52px;
`


const SelectText = styled.p`
    margin : 5px 0 0 0;
    color : #333;

    ${props =>
    props.check &&
    css`
      color : white;
    `}
`

export default SelectCard;