import React, { useState, useEffect } from 'react';
// 타이머 다시 보기
const Countdown = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year + 1}-01-14`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          };
        }
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());

      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000 * 60 * 60);
      });
      
      console.log(timeLeft);
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]}
          </span>
        );
      });
      return (
        <div>
          {timerComponents.length ? timerComponents : <span>마감</span>}
        </div>
      );
}

export default Countdown;