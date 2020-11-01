import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import subTitleImg1 from '../data/img/backer.png';
import subTitleImg2 from '../data/img/day.png';
import subTitleImg3 from '../data/img/status.png';

// * 오른쪽 위쪽 후원자, 남은 기간, 전체 펀딩 현황
const CurrentState = () => {
    const { joyNumber, kindNumber, thanksNumber, unComfNumber } = useSelector((state) => state.countReducer);

    const plusAll = joyNumber + kindNumber + thanksNumber + unComfNumber

    return (
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
                <p>{plusAll}%</p>
                <span><img src={subTitleImg3} alt={subTitleImg3}/></span>
            </ListStyle>
        </ul>
    )
}


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
export default CurrentState;