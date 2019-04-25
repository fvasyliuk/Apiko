import React from 'react';
import PropTypes from 'prop-types';


function MoreButton({ onClick }) {
    return <button onClick={onClick}>
        More
    </button>
}


MoreButton.propTypes = {
    onClick: PropTypes.func,
}

export default MoreButton;