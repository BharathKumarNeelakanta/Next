import React, { Component } from 'react';
import Location from '../Location/index';
import * as styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  render() {
    return (
      <styles.HeaderContainer>
        <styles.LeftSection>
          <Location />
        </styles.LeftSection>
        <styles.MiddleSection>
          <styles.FacebookIcon />
          <styles.TwitterIcon />
          <styles.InstagramIcon />
        </styles.MiddleSection>
        <styles.RightSection>
          <styles.NotificationIcon />
          <div> Login/signup</div>
        </styles.RightSection>
      </styles.HeaderContainer>
    );
  }
}
