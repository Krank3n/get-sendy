import { CButton } from '@coreui/react';
import React from 'react';
import { tSDeclareFunction } from '@babel/types';
import styles from '../AiForm/AiForm.module.scss';

export default function YouHaveChosen({ chosenTask, goToStage }) {
  return (
    <form className={styles.result}>
      <div className="fade-in">
        <p className="text-center mb-3">You have chosen</p>
        <h3 className="text-center mb-3">{chosenTask}</h3>
        <div className="align-items-center m-auto text-center">
          <p className="text-center mb-3">Are you going to commit?...</p>
          <div className="align-items-center m-2 text-center">
            <CButton color="primary" type="button" onClick={(e) => goToStage(e, 4)} value="Good Luck">Commit</CButton>
            {' '}
            <CButton
              color="secondary"
              type="button"
              onClick={(e) => goToStage(e, 2)}
              value="Good Luck"
            >
              No... I am weak
            </CButton>
          </div>
        </div>
      </div>
    </form>
  );
}
