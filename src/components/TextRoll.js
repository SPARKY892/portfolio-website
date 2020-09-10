import React from 'react';
import './TextRoll.scss';

const TextRoll = () => {
    return (
        <section className='wrapper'>
                <h2 className='sentence'>I want to be
                    <div className='slidingVertical'>
                        <span>a Painter</span>
                        <span>an Athlete</span>
                        <span>a Lawyer</span>
                        <span>a Web Developer</span>
                    </div>
                </h2>
        </section>
    );
  };
  
  export default TextRoll;