import styled from 'styled-components';
const beforeImage = require('../../../static/arm.png');
const afterImage = require('../../../static/arm.png');

const BeforeAfterWrapper = styled.div`
  width: 20%;
  margin: 2.5%;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LeftImageWrapper = styled.div`
  flex: 1;
  padding-right: 2px;
`;
const RightImageWrapper = styled.div`
  flex: 1;
  padding-left: 2px;
`;
const LeftImage = styled.img.attrs({
  src: beforeImage,
})`
  width: 100%;
`;

const RightImage = styled(LeftImage).attrs({
  src: afterImage,
})``;

const TextWrapper = styled.div`
  padding: 15px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1d7c7e;
  margin: 0;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #051d1d;
  margin: 0;
`;

export {
  BeforeAfterWrapper,
  ImageWrapper,
  LeftImageWrapper,
  RightImageWrapper,
  LeftImage,
  RightImage,
  TextWrapper,
  Label,
  P,
};
