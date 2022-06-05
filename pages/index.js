import Head from 'next/head'
import {useState} from "react";
import styles from '../styles/Home.module.scss'
import {
  CButton,
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect, CImage,
  CInputGroup,
  CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle
} from "@coreui/react";
import Stripe from '../components/stripe';


export default function Home() {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Get Sendy</title>
        <meta name="description" content="Get Sendy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="d-flex flex-column">
          <CImage src="/SkiierUpsideDown.svg" />
          <h2 className={styles.title}>
          <span className="small">Be Accountable &</span><br /><span>Get that back flip!</span>
        </h2>
        </div>
        <div className="align-items-center">
        <CCard className="m-3 card-mw p-sm-4 p-2">
          <CCardBody>
            <p><span>Yo!</span> <CFormInput  className="d-inline-block input-mw m-2" placeholder="Friend's name" aria-label="Friend's name" /><span>,</span></p>
            <p><span>It's</span> <CFormInput  className="d-inline-block input-mw m-2" placeholder="Your name" aria-label="Your name" /><br />
            <span>I am betting</span>
              <CInputGroup  className="m-2 input-mw d-inline-flex">
              <CInputGroupText>$</CInputGroupText>
              <CFormInput aria-label="Amount (to the nearest dollar)"/>
              <CInputGroupText>.00</CInputGroupText>
            </CInputGroup>
            <span>that I will land a</span>
              <CFormSelect
                  
                  aria-label="Default select example"
                  className="m-2 d-inline-block input-mw"
                  options={[
                    { label: 'Backflip', value: '1' },
                    { label: '360', value: '2' },
                    { label: 'Misty', value: '3' }
                  ]}
              />
              <span>by</span>
              <span className="input-group date d-inline-block input-mw m-2" data-provide="datepicker">
                <input type="date" className="form-control w-100" />
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-th"></span>
                </span>
              </span>
            </p>
            <p>
              If I dont complete it by then, you’ll get half of  money, else please confirm I have landed it and I’ll get my money back.
            </p>
            <div className="mb-4"><CButton color="secondary" onClick={() => setVisible(!visible)}>Add Payment</CButton></div>
            <CButton>Pay and send email</CButton>

          </CCardBody>
        </CCard>
        </div>

        <CModal
            visible={visible} onClose={() => setVisible(false)}
        >
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle>Payment details</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Stripe></Stripe>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary">Cancel</CButton>
            <CButton color="primary">Confirm</CButton>
          </CModalFooter>
        </CModal>

      </main>

      <footer className={styles.footer}>
        <p>
          Copyright{' '}
          <span>
            Get Sendy
          </span>
        </p>
      </footer>
    </div>
  )
}
