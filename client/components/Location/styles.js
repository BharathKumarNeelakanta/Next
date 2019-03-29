import styled from 'styled-components';
const location = require('../../../static/location-point.svg');
const gps = require('../../../static/gps-location-symbol.svg');
const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 7px;
  border: solid 1px #ffffff;
  width: 300px;
  height: 39px;
  padding: 5px;
`;

const LocationIcon = styled.img.attrs({
  src: location,
})`
  width: 100%;
  height: 100%;
  padding-bottom: 2%;
  flex: 1;
`;

const GeoButton = styled.button`
  color: blue;

  ::before {
   
  }

  :hover {
    color: red;
  }
`;
const GeoLocationIcon = styled.img.attrs({
  src: gps,
})`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  flex: 1;
`;

const Input = styled.input.attrs(({ size }) => ({
  // we can define static props
  type: 'text',
  // or we can define dynamic ones
  margin: size || '1em',
  padding: size || '1em',
}))`
  color: #ffffff;
  font-size: 1em;
  /* here we use the dynamically computed props */
  padding: 0 12px;
  outline: none;
  flex: 5;
  background: transparent;
  border: none;
`;

const LocationDetectBtnContainer = styled(LocationContainer)`
  width: auto;
  padding: 11px 18px;
  height: auto;
  margin: 0;
`;
const Paragraph = styled.p`
  font-family: Poppins;
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin: 0;
`;
export {
  LocationContainer,
  Input,
  LocationIcon,
  LocationDetectBtnContainer,
  GeoLocationIcon,
  GeoButton,
  Paragraph,
};
