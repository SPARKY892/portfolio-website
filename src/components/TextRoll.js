import React from 'react';
import './TextRoll.scss';

const TextRoll = () => {
    return (
        <div className='textContent'>
            <div className='visibleText'>
                <p>I want to be</p>
                <ul className='textRollListWrapper'>
                    <li className='textRollList'>a Painter</li>
                    <li className='textRollList'>an Athlete</li>
                    <li className='textRollList'>a Lawyer</li>
                    <li className='textRollList'>a Web Developer</li>
                </ul>
            </div>
        </div>
    );
  };
  
  export default TextRoll;