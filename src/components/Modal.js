import './Modal.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {

    return ReactDOM.createPortal(
        <div className={props.modalShown ? 'modal' : 'modal hidden'} onClick={props.onClick}>
            <div className='modalContent' onClick={(e) => e.stopPropagation()}>
                <div>Hello Modal {props.title}</div>
            </div>   
        </div>
        , document.querySelector('#modal')
    );
};

export default Modal;