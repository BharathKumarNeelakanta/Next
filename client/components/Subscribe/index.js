import React from 'react';
import * as styles from './styles';
// eslint-disable-next-line react/prefer-stateless-function
export default class Subscribe extends React.PureComponent {
  render() {
    return (
      <styles.SubscribeWrapper>
        <styles.SubscribeLeftImage />
        <styles.SubscribeRightImage />
        <styles.SubscribeContentWrapper>
          <styles.SubscribeIcon />
          <styles.SubscribeContent>
            <styles.Label>Subscribe now</styles.Label>
            <styles.P>Get Advice, Consulation & More</styles.P>
          </styles.SubscribeContent>
          <styles.SubscribeEmail />
          <styles.SubscribeBtn>Subscribe</styles.SubscribeBtn>
        </styles.SubscribeContentWrapper>
      </styles.SubscribeWrapper>
    );
  }
}
