import styled from 'styled-components';
const afterImage = require('../../../static/arm.png');

const FooterContainer = styled.div`
  display: flex;
  height: 25%;
  color: blue;
`;
const LeftImage = styled.img.attrs({
  src: afterImage,
})`
  width: 100%;
`;
export { FooterContainer , LeftImage};
