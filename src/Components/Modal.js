// Modal.js
import React from 'react';

const Modal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Trades</h2>
                {/* Display trade information or content */}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
