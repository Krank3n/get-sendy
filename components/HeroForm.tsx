import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
} from '@coreui/react';
import Stripe from './stripe';

function HeroForm() {
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
    <CForm
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCard className="m-3 card-mw p-sm-4 p-2">
        <CCardBody>
          <div>
            <span>Yo!</span>
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
            <span>I am betting</span>
            <CInputGroup className="m-2 input-mw d-inline-flex">
              <CInputGroupText>$</CInputGroupText>
              <CFormInput aria-label="Amount (to the nearest dollar)" />
              <CInputGroupText>.00</CInputGroupText>
            </CInputGroup>
            <span>that I will land a</span>
            <CFormSelect
              aria-label="Default select example"
              className="m-2 d-inline-block input-mw"
              options={[
                { label: 'Back flip', value: '1' },
                { label: '360', value: '2' },
                { label: 'Misty', value: '3' },
              ]}
            />
            <span>by</span>
          </div>
          <div className="input-group date d-inline-block input-mw m-2" data-provide="datepicker">
            <input type="date" className="form-control w-100" />
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-th" />
            </div>
          </div>
          <p>
            If I dont complete it by then, you’ll get half of  money,
            else please confirm I have landed it and I’ll get my money back.
          </p>
          <div className="mb-4">
            <CButton color="secondary" onClick={() => setVisible(!visible)}>Add Payment</CButton>
          </div>
          <CButton
            type="submit"
          >
            Pay and send email
          </CButton>

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
  );
}

export default HeroForm;
