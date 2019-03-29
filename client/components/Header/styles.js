import styled from 'styled-components';
const facebook = require('../../../static//facebook-logo-button.svg');
const twitter = require('../../../static//twitter-logo-button.svg');
const instagram = require('../../../static//instagram-logo-button.svg');
const notification = require('../../../static//notification.svg');

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  border: solid 1px #eeeeee;
  background-color: #f97269;
  padding: 2%;
`;

const LeftSection = styled.div`
  flex: 4;
`;

const MiddleSection = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

const RightSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: row;
  flex-wrap: wrap;
`;

const FacebookIcon = styled.img.attrs({
  src: facebook,
})`
  flex: 1;
  padding-left: 2%;
`;
const TwitterIcon = styled.img.attrs({
  src: twitter,
})`
  padding-left: 2%;
  flex: 1;
`;
const InstagramIcon = styled.img.attrs({
  src: instagram,
})`
  padding-left: 2%;
  flex: 1;
`;

const NotificationIcon = styled.img.attrs({
  src: notification,
})`
  padding-left: 2%;
  flex: 1;
`;

export {
  HeaderContainer,
  LeftSection,
  MiddleSection,
  RightSection,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  NotificationIcon,
};
