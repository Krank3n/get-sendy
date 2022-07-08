import React from 'react';

export default function BrainFog({ loading, hobbyInput }) {
  return (
    <div>
      <div className={`${!loading ? 'fade' : ''} brain-chosen-text position-absolute text-center mt-5 w-100 h3`}>
        {hobbyInput
        && (
        <div className="d-flex justify-content-center">
          <strong id="text1" className="position-absolute">
            {hobbyInput || ' '}
          </strong>
          <strong id="text2" className="position-absolute">
            {hobbyInput || ' '}
          </strong>
        </div>
        )}
      </div>
    </div>
  );
}
