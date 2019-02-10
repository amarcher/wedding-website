import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  direction: PropTypes.oneOf('left', 'right').isRequired,
};

function Chevron({ direction }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      transform={direction === 'left' ? 'scale(-1 1)' : ''}
      opacity={0.9}
      fill="#f7f7f7"
    >
      <path
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"
      />
    </svg>
  );
}

Chevron.propTypes = propTypes;
export default Chevron;
