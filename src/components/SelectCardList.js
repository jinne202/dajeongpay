import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import SelectCard from './SelectCard';
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
import { selectEmotionAction } from '../reducers/selectedReducer';

const t = [
    {
        id : "joy",
        funding : fundingImg1,
        checkedTitle : joyWhite,
        unCheckedTitle : joyPink,
        keyword : "기쁨",
        keyword2 : "기쁜"
    },
    {
        id : "kind",
        funding : fundingImg2,
        checkedTitle : kindWhite,
        unCheckedTitle : kindPink,
        keyword : "다정함",
        keyword2 : "다정한"
    },
    {
        id : "thanks",
        funding : fundingImg3,
        checkedTitle : thanksWhite,
        unCheckedTitle : thanksPink,
        keyword : "감사함",
        keyword2 : "감사한"
    },
    {
        id : "uncomfortable",
        funding : fundingImg4,
        checkedTitle : unWhite,
        unCheckedTitle : unPink,
        keyword : "불편함",
        keyword2 : "불편한"
    },
]

const SelectCardList = () => {
    const [checkedId, setCheckedId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(selectEmotionAction({ checkedId }));
    }, [checkedId]);
    const handleCheckedId = (e, id) => {
        if (checkedId === id) {
            setCheckedId(null);
        } else {
            setCheckedId(id);
        }
    };
    return(
        <div>
            {t.map((el, key) => (
                <SelectCardWrapper>
                    <SelectCard
                        {...el}
                        key ={key}
                        check = {el.id === checkedId}
                        handleCheckedId={handleCheckedId}
                    />
                </SelectCardWrapper>
            ))}
        </div>
    )
}
// 깃 추가용
const SelectCardWrapper = styled.div`
    margin-bottom : 31px;
`

export default SelectCardList;