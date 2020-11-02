import React, { useState, useEffect } from 'react';
import moment from 'moment';
// 타이머 다시 보기
const Countdown = ( props ) => {
    const [days, setDays] = useState(undefined);
    const [seconds, setSeconds] = useState(undefined);

    useEffect(() => {
        setInterval(() => {
            const { timeTillDate, timeFormat } = props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const seconds = countdown.format('ss');
            setDays(days);
            setSeconds(seconds);
        }, 1000)

        return {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, []);
        return (
            <div>
                <div>
                    {days && (
                        <div>
                            {days}
                            <span>days</span>
                        </div>
                    )}
                    {seconds && (
                        <div>
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        );
}

export default Countdown;