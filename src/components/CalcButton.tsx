import React from 'react';
import PropTypes from "prop-types";

import './CalcButton.css';

type Props = {
    className?: string,
    onClick: any,
    children: any
}

const CalcButton: React.FC<Props> = props => {
    const { className, onClick, children } = props;
    return (
        <button
            className={"calc-button " + className} 
            onClick={onClick}
            >
            {children}
        </button>
    )
}

export default CalcButton;