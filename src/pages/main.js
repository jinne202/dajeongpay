import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import CommonButton from '../components/buttonComp';
import titleImgMini from '../data/img/main_title_mini.png';
import backgroundImg from '../data/img/main_bg.png';
import subTitleImg1 from '../data/img/backer.png';
import subTitleImg2 from '../data/img/day.png';
import subTitleImg3 from '../data/img/status.png';
import mainMockup from '../data/img/main_mockup.png';
import mainImg from '../data/img/main_img1.png';
import mainGraphTitle from '../data/img/main_graph_title.png';
import mainGraphBox from '../data/img/main_graph_box.png';

const MainPage = () => {
    return (
        <BackgroundWrapper>
            <TopWrapper>
                <TopLeftWrapper>
                    <img src={titleImgMini} alt={titleImgMini}/>
                    <MainTextStyle>
                    2020년 한 해 동안 여러 만남을 갖고 더치페이를 하면서 어떤 감정을 느끼셨나요?<br/>
                    기쁨, 다정함, 감사함, 불편했던 감정들 중 당신이 느꼈던 감정을 나누어주세요.<br/>
                    다정이로 디자인된 ‘QR테이블 부착 스티커’, ‘뱃지’ 로 구성된 다정 패키지를 보내드립니다.
                    </MainTextStyle>
                </TopLeftWrapper>
                <TopRightWrapper>
                    <ul>
                        <ListBorderStyle>
                            <p>60</p>
                            <span><img src={subTitleImg1} alt={subTitleImg1}/></span>
                        </ListBorderStyle>
                        <ListBorderStyle>
                            <p>30</p>
                            <span><img src={subTitleImg2} alt={subTitleImg2}/></span>
                        </ListBorderStyle>
                        <ListStyle>
                            <p>65%</p>
                            <span><img src={subTitleImg3} alt={subTitleImg3}/></span>
                        </ListStyle>
                    </ul>
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
                    {/* 이 밑 그래프는 함수 처리 에정 */}
                    <GraphFunction></GraphFunction>
                    {/* 함수 처리 예정 */}
                </GraphWrapper>
                <GraphNumBack>
                    {/* 함수처리 할 곳 */}
                    <p>65%</p>
                    {/* 함수처리 할 곳 */}
                    <img src={mainGraphBox}/>
                </GraphNumBack>
            </BottomWrapper>
            <Link href="/select">
                <div style={{position:"absolute", margin : "10px 0 70px", right : 120}}>
                <CommonButton title="펀딩하기"/>
                </div>
            </Link>
        </BackgroundWrapper>
    )
}

const BackgroundWrapper = styled.div`
    background-image: url(${backgroundImg});
    width : 1920px;
    height : 1080px;
    top : 0;
    position : absolute;
`

const TopWrapper = styled.div`
    width : 1200px;
    margin : 129px auto 79px;
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

const ListStyle = styled.li`
    float : left;
    width : 160px;
    text-align : center;
    height : 100px;

    & > p {
        font-size : 45px;
        margin : 10px 0 0 0;
        line-height : 45px;
        color : #ff6464;
    }

    & > span {
        margin-top : 9px;
        display : inline-block;
    }
`

const ListBorderStyle = styled(ListStyle)`
    border : 0;
    border-right : 1px solid #ff6464;
    border-style: dashed;
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
    margin : 40px auto 0;
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
    width : 65%;
    height : 28px;
    top : 6px;
    left : 6px;
    border-radius : 40px 20px 20px 40px;
`

const GraphNumBack = styled.div`
    height : 92px;
    margin-left : calc(65% - 60px);
    position : relative;

    & > p {
        position : absolute;
        font-size : 36px;
        color : #ff7b7b;
        margin : 26px 32px 0;
        text-align : center;
    }
`

export default MainPage;