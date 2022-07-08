import { CButton, CButtonGroup, CFormCheck } from '@coreui/react';
import React from 'react';

export default function RefineOptions({
  difficulty, setDifficulty, onSubmit, purpose, setPurpose, stage,
}) {
  console.log('difficulty', difficulty);
  console.log('purpose', purpose);
  return (
    <div className="refine-options">
      <form id="moreOptions" onSubmit={onSubmit}>
        <div className="refine-challenge align-items-center m-3 text-center">
          <div>
            <div className="align-items-center m-1 text-center d-inline-flex" onChange={(e) => setDifficulty(e.target.value)}>
              <CButtonGroup>
                <CFormCheck
                  name="difficulty"
                  type="radio"
                  button={{ color: 'warning', variant: 'outline', size: 'sm' }}
                  id="btn-check-outlined"
                  autoComplete="off"
                  label="easy"
                  value="easy"
                  defaultChecked={difficulty === 'easy'}
                />
                <CFormCheck
                  name="difficulty"
                  type="radio"
                  className="m-1"
                  button={{ color: 'warning', variant: 'outline', size: 'sm' }}
                  id="btn-check-outlined2"
                  autoComplete="off"
                  label="realistic"
                  value="realistic"
                  defaultChecked={difficulty === 'realistic'}
                />
                <CFormCheck
                  name="difficulty"
                  type="radio"
                  className="m-1"
                  button={{ color: 'warning', variant: 'outline', size: 'sm' }}
                  id="btn-check-outlined3"
                  autoComplete="off"
                  label="hard"
                  value="hard"
                  defaultChecked={difficulty === 'hard'}
                />
                <CFormCheck
                  name="difficulty"
                  type="radio"
                  className="m-1"
                  button={{ color: 'warning', variant: 'outline', size: 'sm' }}
                  id="btn-check-outlined4"
                  autoComplete="off"
                  label="ridiculous"
                  value="ridiculous"
                  defaultChecked={difficulty === 'ridiculous'}
                />
              </CButtonGroup>
            </div>
          </div>
          <div>
            <div className="align-items-center m-1 text-center d-inline-flex" onChange={(e) => setPurpose(e.target.value)}>
              <div className="m-1">
                <CFormCheck
                  name="challengeType"
                  type="radio"
                  className="m-1"
                  button={{ color: 'warning', variant: 'outline', size: 'sm' }}
                  id="btn-radio-outlined"
                  autoComplete="off"
                  label="challenging"
                  value="goals"
                  defaultChecked={purpose === 'goals'}
                />
              </div>
              <div className="m-1">
                <CFormCheck
                  name="challengeType"
                  type="radio"
                  className="m-1"
                  button={{ color: 'warning', variant: 'outline', size: 'sm' }}
                  id="btn-radio-outlined1"
                  autoComplete="off"
                  label="purposeful"
                  value="purposes"
                  defaultChecked={purpose === 'purposes'}
                />
              </div>
            </div>
          </div>
          {stage !== 1
            && (
            <div className="align-items-center m-4 text-center d-inline-flex flex-column">
              <CButton color="primary" type="submit" value="Find another">Give me some more!</CButton>
            </div>
            )}
        </div>
      </form>
    </div>
  );
}
