import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import CommonButton from '../components/commonButton';
import CurrentState from '../components/currentState';
import SelectCard from '../components/selectCard'
import backgroundImg from '../data/img/select_bg.png';
import rewordTitle from '../data/img/reword_title.png';
import selectGraphTitle from '../data/img/select_graph.png';
import graphBubble from '../data/img/select_graph_bubble.png';

const SelectPage = () => {
    return (
        <BackgroundWrapper>
            <TopWrapper>
                <TopLeftWrapper>
                    <img src={rewordTitle} alt={rewordTitle}/>
                    <MainTextStyle>
                    2020년 한 해를 다정하게 채워주웠던 만남들을 리마인드 해보세요.<br/> 만남 속에서 당신은 어떤 페이를 해오셨나요? <br/>기쁨, 다정함, 감사함, 불편했던 감정 들 중 당신이 느꼈던 감정을 나누어주세요.
                    </MainTextStyle>
                </TopLeftWrapper>
                <TopRightWrapper>
                    <CurrentState/>
                </TopRightWrapper>
            </TopWrapper>
            <MiddleWrapper>
                <MiddleLeftWrapper>
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
                        <SelectCard id="un"/>
                    </SelectCardWrapper>
                </MiddleLeftWrapper>
                <MiddelRightWrapper>
                    <GraphTitle>
                        <img src={selectGraphTitle}/>
                    </GraphTitle>
                    <GraphWrapper>
                        <GraphCard>
                            <GraphBubbleWrapper>
                                <img src={graphBubble}/>
                                <p>65%</p>
                            </GraphBubbleWrapper>
                            <GraphBackground>
                                <GraphFunctionJoy></GraphFunctionJoy>
                            </GraphBackground>
                            <GraphSubTitle>기쁨</GraphSubTitle>
                        </GraphCard>
                        <GraphCard>
                            <GraphBubbleWrapper>
                                <img src={graphBubble}/>
                                <p>65%</p>
                            </GraphBubbleWrapper>
                            <GraphBackground>
                                <GraphFunctionKind></GraphFunctionKind>
                            </GraphBackground>
                            <GraphSubTitle>다정</GraphSubTitle>
                        </GraphCard>
                        <GraphCard>
                            <GraphBubbleWrapper>
                                <img src={graphBubble}/>
                                <p>65%</p>
                            </GraphBubbleWrapper>
                            <GraphBackground>
                                <GraphFunctionThanks></GraphFunctionThanks>
                            </GraphBackground>
                            <GraphSubTitle>감사</GraphSubTitle>
                        </GraphCard>
                        <GraphCard>
                            <GraphBubbleWrapper>
                                <img src={graphBubble}/>
                                <p>65%</p>
                            </GraphBubbleWrapper>
                            <GraphBackground>
                                <GraphFunctionUn></GraphFunctionUn>
                            </GraphBackground>
                            <GraphSubTitle>불편</GraphSubTitle>
                        </GraphCard>
                    </GraphWrapper>
                </MiddelRightWrapper>
            </MiddleWrapper>
            <Link href="/test">
                <div style={{position:"absolute", bottom : 60, right : 120}}>
                <CommonButton title="신청하기"/>
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
    margin : 100px auto 59px;
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
    letter-spacing : -0.48px;
    margin:30px 0 0 0;
    width : 650px;
`

const MiddleWrapper = styled.div`
    width : 1200px;
    margin : 0 auto;
    display : flex;
`

const MiddleLeftWrapper = styled.div`
    width : 750px;
`

const SelectCardWrapper = styled.div`
    margin-bottom : 31px;
`

const MiddelRightWrapper = styled.div`
    width : 334px;
    margin-left : 116px;
`

const GraphTitle = styled.div`
    width : 193px;
    height : 55px;
    margin : 47px 0 59px 100px;
`

const GraphWrapper = styled.div`
    display : flex;
`

const GraphCard = styled.div`
    width : 67px;
    margin : 0 22px 0 0;
`

const GraphBubbleWrapper = styled.div`
    position : relative;
    width : 67px;
    height : 41px;

    & > p {
        position : absolute;
        top : 0;
        margin : 0;
        color : #ff7b7b;
        line-height : 34px;
        width : 67px;
        text-align : center;
    }
`

const GraphBackground = styled.div`
    background-color : white;
    position : relative;
    border-radius : 80px;
    width : 29px;
    height : 276px;
    border: solid 1.5px #6b4d4d;
    margin : 30px auto 20px;
`

const GraphFunction = styled.div`
    position : absolute;
    z-index : 999;
    width : 21px;
    bottom : 3px;
    left : 2px;
    border-radius : 20px 20px 40px 40px;
`

const GraphFunctionJoy = styled(GraphFunction)`
    background-color : #ff908a;
    height : 65%;
`

const GraphFunctionKind = styled(GraphFunction)`
    background-color : #ffe1e9;
    height : 65%;
`

const GraphFunctionThanks = styled(GraphFunction)`
    background-color : #fff8d9;
    height : 65%;
`

const GraphFunctionUn = styled(GraphFunction)`
    background-color : #def3ff;
    height : 65%;
`

const GraphSubTitle = styled.div`
    font-size : 20px;
    color : #333333;
    text-align : center;
`

export default SelectPage;