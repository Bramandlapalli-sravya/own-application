import React from "react";
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";
import "../../Home/Notification/index.css";

const iconStyle = { marginRight: "10px" }

const icon = {
    success: <AiOutlineCheckCircle style={iconStyle} />,
    error: <AiOutlineCloseCircle style={iconStyle} />,
    info: <AiOutlineInfoCircle style={iconStyle} />,
    warning: <AiOutlineWarning style={iconStyle} />,
}

const Notification = ({ type, message, onClose, duration }) => {
    return (
        <div className={`notification ${type}`}>
            {icon[type]}
            {message}
            <AiOutlineClose onClick={() => onClose} color="white" className="close-btn" />
        </div>
    )
}

export default Notification