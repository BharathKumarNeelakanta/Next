import styled from 'styled-components';
const backgroundImage2 = require('../../../static/dot_2.png');
const stepsImage = require('../../../static/steps-body.png');

const StepsWrapper = styled.div`
  padding: 32px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
`;

const StepsContainer = styled.div`
  background-image: url(${backgroundImage2});
  background-repeat: no-repeat;
  background-position: bottom left;
  position: relative;
`;
const StepsImage = styled.img.attrs({
  src: stepsImage,
})`
  margin-bottom: 30px;
`;

const StepText = styled.h4`
  opacity: 0.45;
  margin: 0;
  font-family: Poppins;
  font-size: 80px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
`;
const StepNumber = styled(StepText)`
  opacity: 0.45;
  left: auto;
  top: auto;
  bottom: 0;
  right: 0;
`;
export { StepsWrapper, StepsContainer, StepsImage, StepText, StepNumber };
