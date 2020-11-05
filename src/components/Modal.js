import './Modal.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {

    return ReactDOM.createPortal(
        <div className={props.modalShown ? 'modal' : 'modal hidden'} onClick={props.onClick}>
            <div className='modalContent' onClick={(e) => e.stopPropagation()}>
                <div className='modalHeader'>
                    <div className='modalTitle'>{props.title}</div>
                    <i className='fas fa-times modalClose' onClick={props.onClick}></i>
                </div>
                <div className='contentImage'>Image to go here</div>
                <div className='contentDescription'>{props.description}</div>
            </div>   
        </div>
        , document.querySelector('#modal')
    );
};

export default Modal;