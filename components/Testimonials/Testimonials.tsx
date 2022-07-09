import {
  CCarousel, CCarouselItem, CCarouselCaption, CImage, CCard, CCardImage, CCardTitle, CCardText, CCardBody, CButton,
} from '@coreui/react';
import React from 'react';
import SkiierUpsideDown from '../../public/SkiierUpsideDown.svg';

export default function Testimonials() {
  return (
    <CCarousel controls indicators dark>
      <CCarouselItem>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={SkiierUpsideDown} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </CCardText>
            <CButton href="#">Go somewhere</CButton>
          </CCardBody>
        </CCard>
      </CCarouselItem>
      <CCarouselItem>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={SkiierUpsideDown} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </CCardText>
            <CButton href="#">Go somewhere</CButton>
          </CCardBody>
        </CCard>
      </CCarouselItem>
      <CCarouselItem>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={SkiierUpsideDown} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </CCardText>
            <CButton href="#">Go somewhere</CButton>
          </CCardBody>
        </CCard>
      </CCarouselItem>
    </CCarousel>
  );
}
