import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import SelectCard from '../components/SelectCard';
import Link from 'next/link';
import CommonButton from '../components/CommonButton';
import backgroundImg from '../data/img/ending_bg.png';
import completeTitleJoy from '../data/img/complete_title_1.png';
import completeTitleKind from '../data/img/complete_title_2.png';
import completeTitleThanks from '../data/img/complete_title_3.png';
import completeTitleUn from '../data/img/complete_title_4.png';
import joyMockUp from '../data/img/ending_mockup1.png';
import kindMockUp from '../data/img/ending_mockup2.png';
import thanksMockUp from '../data/img/ending_mockup3.png';
import unMockUp from '../data/img/ending_mockup4.png';
import joyReceipt from '../data/img/receipt1.png';
import kindReceipt from '../data/img/receipt2.png';
import thanksReceipt from '../data/img/receipt3.png';
import unReceipt from '../data/img/receipt4.png';

const EndingPage = () => {
    const { emotionCard } = useSelector((state) => state.selectedReducer);
    const emotionId = emotionCard.checkedId;

    let mainMockUp = null;
    let receiptMockUp = null;
    let completeTitle = null;
    let completeText = null;

    if (emotionId === "joy") {
        completeTitle = <img src={completeTitleJoy} alt="joy"/>
        mainMockUp = <img src={joyMockUp} alt="joy"/>;
        receiptMockUp = <img src={joyReceipt} alt="joy"/>;
        completeText = <MainTextStyle>
        기쁨을 리워드로 택해주신 당신에게는 다가오는 2021년도 크고 작은 만남들 속에서 <br/>기쁨과 정을 느끼시길 바라는 마음을 담아 '정다운 우리' 뱃지가 포함된 '기쁨 패키지'를 <br/>보내드립니다! 2021년도 다정페이와 함께 즐거운 더치페이 라이프를 즐겨보세요</MainTextStyle>
    } else if (emotionId === "kind") {
        completeTitle = <img src={completeTitleKind} alt="kind"/>
        mainMockUp = <img src={kindMockUp} alt="kind"/>;
        receiptMockUp = <img src={kindReceipt} alt="kind"/>;
        completeText = <MainTextStyle>
        다정을 리워드로 택해주신 당신에게는 다가오는 2021년도 크고 작은 만남들 속에서 <br/> 다정함과 정을 느끼시길 바라는 마음을 담아 '다정대장' 뱃지가 포함된 '다정 패키지'를 <br/>보내드립니다! 2021년도 다정페이와 함께 즐거운 더치페이 라이프를 즐겨보세요</MainTextStyle>
    } else if (emotionId === "thanks") {
        completeTitle = <img src={completeTitleThanks} alt="thanks"/>
        mainMockUp = <img src={thanksMockUp} alt="thanks"/>;
        receiptMockUp = <img src={thanksReceipt} alt="thanks"/>;
        completeText = <MainTextStyle>
        감사를 리워드로 택해주신 당신에게는 다가오는 2021년도 크고 작은 만남들 속에서 <br/> 감사함과 정을 느끼시길 바라는 마음을 담아 '받았정' 뱃지가 포함된 '감사 패키지'를 <br/> 보내드립니다! 2021년도 다정페이와 함께 즐거운 더치페이 라이프를 즐겨보세요</MainTextStyle>
    } else if (emotionId === "uncomfortable") {
        completeTitle = <img src={completeTitleUn} alt="uncomfortable"/>
        mainMockUp = <img src={unMockUp} alt="uncomfortable"/>;
        receiptMockUp = <img src={unReceipt} alt="uncomfortable"/>;
        completeText = <MainTextStyle>
        불편을 리워드로 택해주신 당신에게는 다가오는 2021년에는 크고 작은 만남들 속에서 <br/> 불편보다는 정다움을 느끼시길 바라는 마음을 담아 '정의의 용사' 뱃지가 포함된 '정의 패키지'를 <br/> 보내드립니다! 2021년도 다정페이와 함께 즐거운 더치페이 라이프를 즐겨보세요</MainTextStyle>
    } 

    return (
        <BackgroundWrapper>
            <TopWrapper>
                <TopLeftWrapper>
                    {completeTitle}
                    {completeText}
                </TopLeftWrapper>
            </TopWrapper>
            <MiddleWrapper>
                {mainMockUp}
            </MiddleWrapper>
            <RightWrapper>
                {receiptMockUp}
            </RightWrapper>
            <Link href="/main">
                <div style={{position:"absolute", bottom : 60, right : 120}}>
                <CommonButton title="돌아가기"/>
                </div>
            </Link>
        </BackgroundWrapper>
    )
}

export default EndingPage;

const BackgroundWrapper = styled.div`
    background-image: url(${backgroundImg});
    width : 1920px;
    height : 980px;
    top : 0;
    position : absolute;
`

const TopWrapper = styled.div`
    width : 1200px;
    margin : 100px auto 20px;
    display: flex;
    justify-content : space-between;
`

const TopLeftWrapper = styled.div`
    display : block;
`

const MainTextStyle = styled.p`
    font-size : 16px;
    line-height : 22px;
    letter-spacing : -0.48px;
    margin:30px 0 0 0;
    width : 650px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight : 500;
`

const MiddleWrapper = styled.div`
    margin-left : 328px;
`

const RightWrapper = styled.div`
    position : absolute;
    top : 100px;
    right : 341px;
`