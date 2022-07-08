import { CButton, CFormInput, CInputGroup } from '@coreui/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function Stage1BasicForm({
  hobbyInput, setHobbyInput, onSubmit, moreOptions, setMoreOptions,
}) {
  return (
    <div className="fade-in card-mw w-100">
      <h6 className="text-center mb-4">
        <FormattedMessage id="getSendy.homepage.YOUSEEKPURPOSE" defaultMessage="You seek purpose..." />
      </h6>
      <h5 className="text-center"><FormattedMessage id="getSendy.homepage.TELLME" defaultMessage="Tell me" /></h5>
      <h3 className="text-center mb-4" style={{ fontWeight: 'bold' }}>
        <FormattedMessage id="getSendy.homepage.WHATEXCITESYOU" defaultMessage="What excites you?" />
      </h3>
      <form onSubmit={onSubmit}>
        <CInputGroup className="mb-4 w-100">
          <FormattedMessage id="getSendy.homepage.ENTERANINTEREST" defaultMessage="Enter an interest">
            {(placeholder) => (
              <CFormInput
                type="text"
                name="hobby"
                placeholder={placeholder}
                value={hobbyInput}
                aria-valuemax={30}
                onChange={(e) => setHobbyInput(e.target.value)}
              />
            )}
          </FormattedMessage>

          <CButton type="submit" value="Ask" disabled={!hobbyInput}>
            <FormattedMessage id="getSendy.homepage.CHECKIT" defaultMessage="Check it >" />
          </CButton>
        </CInputGroup>
        <div className="mt-3 mb-3 w-100 d-flex justify-content-end">
          <CButton className="show-more" active={false} color="info" type="button" value="Find another" variant="ghost" onClick={() => setMoreOptions(!moreOptions)}>
            {!moreOptions
              ? <FormattedMessage id="getSendy.homepage.MOREOPTIONS" defaultMessage="More options" />
              : <FormattedMessage id="getSendy.homepage.SHOWLESS" defaultMessage="Show less" />}
          </CButton>
        </div>
      </form>
    </div>
  );
}
