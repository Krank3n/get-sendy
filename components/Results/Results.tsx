import {
  CButton, CFormCheck, CInputGroupText, CCollapse, CFormInput, CLink,
} from '@coreui/react';
import React, { useState } from 'react';
import styles from '../AiForm/AiForm.module.scss';

export default function Results({
  chosenTask, setChosenTask, list, moreOptions, setMoreOptions, goToStage,
}) {
  const [writeYourOwn, setWriteYourOwn] = useState(false);

  return (
    <div
      className="fade-in card-mw p-2
    "
      onSubmit={(e) => goToStage(e, 3)}
    >
      <div className={styles.result}>
        <h3 className="text-center  mb-3">Which challenge do you accept?</h3>
        <div className="results m-4">
          {list.filter((item) => item.length > 0).map((item, index) => (
            <CFormCheck
              key={item + index}
              className="m-2"
              id={item + index}
              name="challenges"
              label={item}
              type="radio"
              value={item}
              onChange={(e) => setChosenTask(e.target.value)}
            />
          ))}
          <div className="p-2">
            <CLink className="mt-4" onClick={() => setWriteYourOwn(!writeYourOwn)}>
              Modify it
              {' >'}
            </CLink>
            <CCollapse className="m-2" visible={writeYourOwn}>
              <CFormInput
                key={1312}
                className=""
                id="yourOwn"
                name="challenges"
                type="text"
                value={chosenTask || ''}
                onChange={(e) => setChosenTask(e.target.value)}
              />
            </CCollapse>
          </div>
        </div>
        <CInputGroupText />
        <div className="align-items-center m-auto text-center">
          <div className="align-items-center m-2 mb-5 text-center">
            <div className="m-1">
              <CButton color="primary" type="submit" value="Find another" disabled={!chosenTask} onClick={(e) => goToStage(e, 3)}>
                Accept
                Challenge
              </CButton>
            </div>
            <div className="d-inline-flex m-1">
              <div className="m-1">
                <CButton
                  href="#moreOptions"
                  color="secondary"
                  type="button"
                  value="Find another"
                  variant="ghost"
                  onClick={(e) => goToStage(e, 1)}
                >
                  {'< '}
                  Go Back
                </CButton>
              </div>
              <div className="m-1">
                <CButton href="#moreOptions" active={false} color="warning" type="button" value="Find another" variant="ghost" onClick={() => setMoreOptions(!moreOptions)}>
                  {!moreOptions ? 'Refine challenge ideas' : 'show less'}
                </CButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
