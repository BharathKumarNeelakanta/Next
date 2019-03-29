import styled from 'styled-components';
const subscribeDotsImage = require('../../../static/subscribe-bg.png');
const subscribeIcon = require('../../../static/subscribe-icon.png');
const SubscribeWrapper = styled.div`
  background-color: #65d7d1;
  position: relative;
`;
const SubscribeLeftImage = styled.img.attrs({
  src: subscribeDotsImage,
})`
  position: absolute;
  left: 0;
  bottom: 0;
  top: auto;
`;

const SubscribeRightImage = styled(SubscribeLeftImage)`
  transform: rotate(180deg);
  left: auto;
  top: 0;
  right: 0;
  bottom: auto;
`;

const SubscribeIcon = styled.img.attrs({
  src: subscribeIcon,
})`
  flex: 1;
  width: 190px;
  padding-right: 40px;
`;

const SubscribeContentWrapper = styled.div`
  display: flex;
  align-items: space-inbetween;
  max-width: 1200px;
  margin: auto;
`;

const SubscribeContent = styled.div`
  flex: 1;
  text-align: right;
  padding-right: 15px;
  padding-top: 30px;
`;
const SubscribeEmail = styled.input.attrs({
  type: 'email',
  placeholder: 'subscribe',
})`
  flex: 1;
  opacity: 0.43;
  border-radius: 18px;
  background-color: #ffffff;
  height: 50px;
  padding: 0 10px;
  margin-top: 30px;
  border:none;
`;

const SubscribeBtn = styled.div`
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 4;
  letter-spacing: 1px;
  text-align: center;
  color: #f97269;
  width: 174px;
  height: 50px;
  border-radius: 24px;
  background-color: #ffffff;
  margin-top: 30px;
  margin-left: 10px;
`;

const Label = styled.label`
  font-size: 34px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  color: #ffffff;
  margin: 0;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin: 0;
`;

export {
  SubscribeWrapper,
  SubscribeLeftImage,
  SubscribeRightImage,
  SubscribeIcon,
  SubscribeContentWrapper,
  SubscribeContent,
  SubscribeEmail,
  SubscribeBtn,
  Label,
  P,
};
