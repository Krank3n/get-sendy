import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
} from '@coreui/react';
import Stripe from '../Stripe/Stripe';

function FriendEmailForm({ chosenTask }) {
  const [visible, setVisible] = useState(false);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div>
      <p className="card-mw p-2 m-3 fst-italic">
        If you're looking for a way to finally achieve your goals, paying for accountability may be the key.
        <br />
        <br />
        {' '}
        When you have someone to check in with and be accountable to, you're much more likely to stay on track. Plus, you'll have the added bonus of knowing that you're investing in your future success.
      </p>
      <CForm
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CCard className="m-3 card-mw p-sm-4 p-2">
          <CCardBody>
            <div>
              <span>To:</span>
              {' '}
              <CFormInput
                className="d-inline-block input-mw m-2"
                placeholder="Friend's email"
                minLength="2"
                maxLength="20"
                aria-label="Friend's name"
                type="text"
                feedbackValid="Looks good!"
                id="validationCustom01"
                required
              />
            </div>
            <hr />
            <div>
              <span>Hey</span>
              {' '}
              <CFormInput
                className="d-inline-block input-mw m-2"
                placeholder="Friend's name"
                minLength="2"
                maxLength="20"
                aria-label="Friend's name"
                type="text"
                feedbackValid="Looks good!"
                id="validationCustom01"
                required
              />
              <span>,</span>
            </div>
            <div className="d-inline">
              <span>It&apos;s</span>
              {' '}
              <CFormInput className="d-inline-block input-mw m-2" placeholder="Your name" aria-label="Your name" />
              <br />
              <span>I'm committing to a challenge and putting </span>
              <CInputGroup className="m-2 input-mw d-inline-flex">
                <CInputGroupText>$</CInputGroupText>
                <CFormInput
                  className="text-end"
                  aria-label="Amount (to the nearest dollar)"
                  min={5}
                  max={10000}
                />
                <CInputGroupText>.00</CInputGroupText>
              </CInputGroup>
              <span>down for accountability. I need you to be a referee for my goal </span>
              <span className="text-info fw-bold">
                "
                {chosenTask}
                "
              </span>
              <span> by</span>
            </div>
            <div className="input-group date d-inline-block input-mw m-2" data-provide="datepicker">
              <input type="date" className="form-control w-100" />
              <div className="input-group-addon">
                <span className="glyphicon glyphicon-th" />
              </div>
            </div>
            <p>
              to see if I completed it or not.
            </p>
            <p>
              If I'm unsuccessful I'll lose my pledged money.
            </p>
            <p>
              If I'm successful I'll get my money back, will have completed my goal, and be on the wall of fame.
            </p>
            <div className="mb-4">
              <div className="m-4 d-flex justify-content-center">
                <CButton color="secondary" onClick={() => setVisible(!visible)}>Add Payment</CButton>
              </div>
              <div className="m-4 d-flex justify-content-center">

                <CButton
                  type="submit"
                >
                  Pay and send email
                </CButton>
              </div>
            </div>
          </CCardBody>
        </CCard>
        <CModal
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle>Payment details</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Stripe />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary">Cancel</CButton>
            <CButton color="primary">Confirm</CButton>
          </CModalFooter>
        </CModal>
      </CForm>
    </div>
  );
}

export default FriendEmailForm;
