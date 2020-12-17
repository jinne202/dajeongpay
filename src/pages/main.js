import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import CommonButton from '../components/CommonButton';
import CurrentState from '../components/CurrentState';
import titleImgMini from '../data/img/main_title_mini.png';
import backgroundImg from '../data/img/main_bg.png';
import mainMockup from '../data/img/main_mockup.png';
import mainImg from '../data/img/main_img1.png';
import mainGraphTitle from '../data/img/main_graph_title.png';
import mainGraphBox from '../data/img/main_graph_box.png';

const MainPage = () => {
    const { joyNumber, kindNumber, thanksNumber, unComfNumber } = useSelector((state) => state.countReducer);

    const plusAll = joyNumber + kindNumber + thanksNumber + unComfNumber;
    let fullNumber = null;
    if (plusAll > 100) {
        fullNumber = 99
    } else {
        fullNumber = plusAll
    }
    console.log(fullNumber, "fullnumber")
    return (
        <BackgroundWrapper>
            <TopWrapper>
                <TopLeftWrapper>
                    <img src={titleImgMini} alt={titleImgMini}/>
                    <MainTextStyle>
                    2020년 한 해 동안 여러 만남을 갖고 더치페이를 하면서 어떤 감정을 느끼셨나요?<br/>
                    기쁨, 다정함, 감사함, 불편했던 감정들 중 당신이 느꼈던 감정을 나누어주세요<br/>
                    다정이로 디자인된 ‘QR테이블 부착 스티커’, ‘뱃지’ 로 구성된 다정 패키지를 보내드립니다
                    </MainTextStyle>
                </TopLeftWrapper>
                <TopRightWrapper>
                    <CurrentState/>
                </TopRightWrapper>
            </TopWrapper>
            <MiddelWrapper>
                <RightImg>
                    <img src={mainImg}/>
                </RightImg>
                <LeftImg>
                    <img src={mainMockup}/>
                </LeftImg>
            </MiddelWrapper>
            <BottomWrapper>
                <GraphTitle>
                    <img src={mainGraphTitle}/>
                </GraphTitle>
                <GraphWrapper>
                    <GraphBackground></GraphBackground>
                    <GraphFunction width={fullNumber}></GraphFunction>
                </GraphWrapper>
                <GraphNumBack width={fullNumber}>
                    {/* 함수처리 할 곳 */}
                    <p>{plusAll}%</p>
                    {/* 함수처리 할 곳 */}
                    <img src={mainGraphBox}/>
                </GraphNumBack>
            </BottomWrapper>
            <Link href="/select">
                <div style={{position:"absolute", bottom : 60, right : 120}}>
                <CommonButton title="펀딩하기"/>
                </div>
            </Link>
        </BackgroundWrapper>
    )
}

const BackgroundWrapper = styled.div`
    background-image: url(${backgroundImg});
    width : 1920px;
    height : 980px;
    top : 0;
    position : absolute;
`

const TopWrapper = styled.div`
    width : 1200px;
    margin : 100px auto 35px;
    display: flex;
    justify-content : space-between;
`

const TopLeftWrapper = styled.div`
    display : block;
`

const TopRightWrapper = styled.div`
    display : block;
    float : right;
`

const MainTextStyle = styled.p`
    font-size : 16px;
    line-height : 22px;
    letter-spacing : -0.64px;
    margin:30px 0 0 0;
    width : 650px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight : 500;
`

const MiddelWrapper = styled.div`
    position : relative;
    width : 1260px;
    height : 438px;
    margin : 0 auto;
    display : bolck;

    &::after {
        content: '';
        display: block;
        clear: both;
    }
`

const RightImg = styled.div`
    position : absolute;
    top : -22px;
    right : -17px;
    z-index : 9999;
`
const LeftImg = styled.div`
    position : absolute;
`

const BottomWrapper = styled.div`
    width : 1200px;
    margin : 4px auto 0;
`

const GraphTitle = styled.div`
    margin : 0 0 12px 10px;
`

const GraphWrapper = styled.div`
    position : relative;
    width : 1200px;
    height : 40px;
`

const GraphBackground = styled.div`
    background-color : white;
    border-radius : 80px;
    width : 1200px;
    height : 40px;
    border: solid 2px #6b4d4d;
    position : absolute;
`
const GraphFunction = styled.div`
    background-color : #ff908a;
    position : absolute;
    z-index : 999;
    width : ${props => props.width}%;
    height : 28px;
    top : 6px;
    left : 6px;
    border-radius : 40px;
`

const GraphNumBack = styled.div`
    height : 92px;
    margin-left : calc((${props => props.width}%) - 60px);
    position : relative;

    & > p {
        position : absolute;
        font-size : 36px;
        color : #ff7b7b;
        margin : 33px 5px 0;
        text-align : center;
        width : 125px;
        font-family: "gmarketMedium";
    }
`

export default MainPage;