import React from 'react';
import Countdown from '../components/Countdown'

const Test = () => {
    return (
        <div>
        <Countdown timeTillDate="01 31 2022, 00:00 am" timeFormat="MM DD YYYY, h:mm a"/>
        </div>
    )
}

export default Test;