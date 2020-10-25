import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import logoImg from '../data/img/logo.png'
import titleImg from '../data/img/start_title_big.png'
import CommonButton from '../components/buttonComp';

const HOME = () => {
    return(
        <MainWrapper>
            <ImageCommon src={logoImg} alt="logoImg"/>
            <TitleImage src={titleImg} alt="titleImg"/>
            <TitleText>다가오는 2021년을 기다리며 다정페이와 함께<br/>한 해를 돌아보고 다정(情)펀딩을 해보시는 건 어떠신가요?</TitleText>
            <Link href="/main">
                <div>
                <CommonButton title="시작하기"/>
                </div>
            </Link>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    width : 532px;
    margin : 286px auto 0;
`

const ImageCommon = styled.img`
    margin : 0 auto;
    display : block;
`

const TitleText = styled.p`
    text-align : center;
    margin : 41px 0 100px;
    font-size : 20px;
    line-height : 28px;
    letter-spacing : -0.48px;
`

const TitleImage = styled(ImageCommon)`
    margin-top : 41px;
`

export default HOME;