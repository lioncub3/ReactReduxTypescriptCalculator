import React from 'react';
import PropTypes from "prop-types";


const CalcText = ({text}) => (
    <div>
        <span className="">{text}</span>
    </div>
)


CalcText.propsTypes = {
    text: PropTypes.string.isRequired
}

export default CalcText;