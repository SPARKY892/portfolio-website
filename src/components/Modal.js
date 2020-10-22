import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {

    return ReactDOM.createPortal(
        <div>
            <div onClick={(e) => e.stopPropagation()}>
                <div>Hello Modal {props.title}</div>
            </div>   
        </div>
        , document.querySelector('#modal')
    );
};

export default Modal;