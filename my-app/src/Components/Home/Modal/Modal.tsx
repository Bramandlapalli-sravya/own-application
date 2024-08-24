import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { GenericProps } from './helpers';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minHeight: window.innerWidth > 400 ? '40%' : '40%',
        minWidth: '30%',
        maxWidth: window.innerWidth > 400 ? '70%' : '95%',
        maxHeight: '60%',
    },
};

export function MyModal({ isOpen, isCloseModal, children }) {

    return (

        <ReactModal
            isOpen={isOpen}
            onRequestClose={isCloseModal}
            style={customStyles}
        >
            {children}
        </ReactModal>

    );
}