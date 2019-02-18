import React from 'react';
import PropTypes from 'prop-types';

import './Story.scss';

const propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Story({ paragraphs }) {
  return (
    <div className="story">
      {paragraphs.map(paragraph => (
        <p className="story__paragraph" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

Story.propTypes = propTypes;
export default Story;
