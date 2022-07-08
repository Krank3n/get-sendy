import React from 'react';
import { CLink } from '@coreui/react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <CLink href="https://thomasandrewhansen.com/">Thomas Andrew Hansen </CLink>
        <span>&copy; HansenDevelopment.</span>
      </div>
      <div>
        <span style={{ opacity: 0.5 }}>Powered by</span>
        {' '}
        the brains of the human collective @
        {' '}
        <span className="d-flex-inline">
          <CLink href="https://openai.com/">Open AI </CLink>
          <CLink href="https://openai.com/blog/gpt-3-apps/">GTP3 </CLink>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
