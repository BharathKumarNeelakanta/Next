import React from 'react';
import * as styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class BeforeAfter extends React.PureComponent {
  render() {
    return (
      <styles.BeforeAfterWrapper>
        <styles.ImageWrapper>
          <styles.LeftImageWrapper>
            <styles.LeftImage />
          </styles.LeftImageWrapper>
          <styles.RightImageWrapper>
            <styles.RightImage />
          </styles.RightImageWrapper>
        </styles.ImageWrapper>
        <styles.TextWrapper>
          <styles.Label>Treatment Name</styles.Label>
          <styles.P>Lift and tighten your face</styles.P>
        </styles.TextWrapper>
      </styles.BeforeAfterWrapper>
    );
  }
}
