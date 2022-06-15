import React, { useState } from 'react';
import {
  CButton, CButtonGroup, CFormCheck, CFormInput, CImage, CInputGroup, CSpinner,
} from '@coreui/react';
import styles from './QuickStart.module.css';

export default function AiForm() {
  const [animalInput, setAnimalInput] = useState('');
  const [list, setList] = useState();
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(1);
  const [chosenTask, setChosenTask] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setAnimalInput('');
    setList(data.result.split(','));
    setLoading(false);
    setStage(2);
  }

  function onAcceptChallenge(event) {
    event.preventDefault();
    setStage(3);
  }

  function goToStage(stageNumber) {
    setStage(stageNumber);
  }

  return (
    <div>
      <main className="align-items-center">
        <CImage align="center" fluid className={styles.hero} src="/AiGod.svg" />
        {stage === 1
                && (
                <div className="fade-in">
                  <h5 className="text-center">What is my</h5>
                  <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Purpose?</h2>
                  <form onSubmit={onSubmit}>
                    <CInputGroup className="mb-4">
                      <CFormInput
                        type="text"
                        name="hobby"
                        placeholder="Enter an hobby"
                        value={animalInput}
                        onChange={(e) => setAnimalInput(e.target.value)}
                      />
                      <br />
                      <div className="align-items-center m-auto text-center">
                        <CButton type="submit" value="Ask">Ask</CButton>
                      </div>
                    </CInputGroup>
                  </form>
                </div>
                )}
        {loading
            && (
            <div className="align-items-center m-auto text-center mb-5 fade-in">
              <CSpinner />
            </div>
            )}
        {!loading && list && stage === 2
            && (
            <form className="fade-in" onSubmit={onAcceptChallenge}>
              <div className={styles.result}>
                <h3 className="text-center mb-3">Which challenge do you accept?</h3>
                {list.filter((item) => item.length > 0).map((item, index) => (
                  <div>
                    {' '}
                    <CFormCheck
                      id={item + index}
                      name="challenges"
                      label={item}
                      type="radio"
                      value={item}
                      onChange={(e) => setChosenTask(e.target.value)}
                    />
                  </div>
                ))}
                <div className="align-items-center m-auto text-center">
                  <CButtonGroup className="align-items-center m-2 text-center">
                    <CButton color="primary" type="submit" value="Find another" disabled={!chosenTask}>Accept Challenge</CButton>
                    <CButton color="secondary" type="reset" onClick={() => goToStage(1)} value="Find another">Find another</CButton>
                  </CButtonGroup>
                </div>
              </div>
            </form>
            )}
        {!loading && chosenTask && stage === 3
            && (
            <form>
              <div className={styles.result}>
                <p className="text-center mb-3">You have chosen</p>
                <h3 className="text-center mb-3">{chosenTask}</h3>
                <div className="align-items-center m-auto text-center">
                  <p className="text-center mb-3">The power is within you...</p>
                  <CButtonGroup className="align-items-center m-2 text-center">
                    <CButton color="primary" type="submit" onClick={() => goToStage(1)} value="Good Luck">Continue</CButton>
                  </CButtonGroup>
                </div>
              </div>
            </form>
            )}
      </main>
    </div>
  );
}
