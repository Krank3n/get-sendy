import React, { useEffect, useState } from 'react';
import {
  CImage, CCollapse,
} from '@coreui/react';
import { FormattedMessage } from 'react-intl';
import styles from './AiForm.module.scss';
import FriendEmailForm from '../FriendEmailForm/FriendEmailForm';
import Stage1BasicForm from './Stage1BasicForm';
import YouHaveChosen from '../YouHaveChosen/YouHaveChosen';
import BrainTextAnimation from '../../custom-hooks/BrainTextAnimation';
import ReplaceDigits, { CheckForAllDigits } from '../../custom-hooks/CheckForAllDigits';
import Results from '../Results/Results';
import BrainFog from '../BrainFog/BrainFog';
import RefineOptions from './RefineOptions';

export default function AiForm() {
  const [hobbyInput, setHobbyInput] = useState('');
  const [goalList, setGoalList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState('hard');
  const [purposeGoalType, setPurposeGoalType] = useState('goals');
  const [stage, setStage] = useState(1);
  const [chosenGoal, setChosenGoal] = useState('');
  const [goalOptions, setGoalOptions] = useState(false);

  async function onSubmit(event) {
    BrainTextAnimation([hobbyInput, purposeGoalType, difficulty, 'harness', 'collective', 'brainpower'], 500);
    event.preventDefault();
    setLoading(true);
    console.log('hobbyInput, purpose, difficulty,', hobbyInput, purposeGoalType, difficulty);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hobby: hobbyInput, difficulty, purpose: purposeGoalType }),
    });
    const data = await response.json();
    setGoalList(CheckForAllDigits(data.result.split(', ')));
    setLoading(false);
    setStage(2);
    setGoalOptions(false);
  }

  function goToStage(event, stageNumber) {
    event.preventDefault();

    setStage(stageNumber);
    console.log('stageNumber', stageNumber);
    console.log('stage', stage);

    if (stageNumber === 1) {
      setHobbyInput('');
      setDifficulty('realistic');
      setPurposeGoalType('goals');
      setGoalOptions(false);
    }
  }

  return (
    <div>
      <div className={styles.hero}>
        <BrainFog
          hobbyInput={hobbyInput}
          loading={loading}
        />
        <CImage align="center" fluid src="/AiGod.svg" />
      </div>
      {!loading && stage === 1
              && (
              <Stage1BasicForm
                hobbyInput={hobbyInput}
                setHobbyInput={setHobbyInput}
                onSubmit={onSubmit}
                setMoreOptions={setGoalOptions}
                moreOptions={goalOptions}
              />
              )}
      <CCollapse visible={!loading && goalList && stage === 2}>
        <Results
          setChosenTask={setChosenGoal}
          setDifficulty={setDifficulty}
          setMoreOptions={setGoalOptions}
          moreOptions={goalOptions}
          difficulty={difficulty}
          chosenTask={chosenGoal}
          hobbyInput={hobbyInput}
          goToStage={goToStage}
          list={goalList}
          onSubmit={onSubmit}
        />
      </CCollapse>
      <div className="card-mw">
        <CCollapse visible={goalOptions && !loading && stage < 3}>
          <RefineOptions
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            purpose={purposeGoalType}
            setPurpose={setPurposeGoalType}
            goToStage={goToStage}
            stage={stage}
            onSubmit={onSubmit}
          />
        </CCollapse>
        <CCollapse visible={!goalOptions && !loading && stage === 1}>
          <div className="fade-in m-auto d-flex justify-content-center">
            <div className="c-gray-700">
              <FormattedMessage id="getSendy.suggestions.SUGGESTIONS" defaultMessage="Suggestions" />
              :
              <ul className="fst-italic c-gray-700">
                <li><FormattedMessage id="getSendy.suggestions.PLAYINGWITHMYPETKITTEN" defaultMessage="playing with my pet kitten" /></li>
                <li><FormattedMessage id="getSendy.suggestions.ANNOYINGMYSISTER" defaultMessage="annoying my sister" /></li>
                <li><FormattedMessage id="getSendy.suggestions.BACON" defaultMessage="bacon" /></li>
                <li><FormattedMessage id="getSendy.suggestions.GOINGTONEWCAFES" defaultMessage="going to new cafes" /></li>
              </ul>
            </div>
          </div>
        </CCollapse>
      </div>
      {!loading && chosenGoal && stage === 3
            && (
            <div className={loading ? 'fade' : ''}>
              <YouHaveChosen
                chosenTask={chosenGoal}
                goToStage={goToStage}
              />
            </div>
            )}
      {!loading && chosenGoal && stage === 4
            && (
            <div className={loading ? 'fade' : ''}>
              <FriendEmailForm
                chosenTask={chosenGoal}
                goToStage={goToStage}
              />
            </div>
            )}
    </div>
  );
}
