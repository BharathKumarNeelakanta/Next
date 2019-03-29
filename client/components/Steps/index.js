/* eslint-disable react/prop-types */
import React from 'react';
import DropDown from '../DropDown/index';
import * as styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Steps extends React.PureComponent {
  render() {
    // eslint-disable-next-line global-require
    const backgroundImage = require('../../../static/bg_2.png');
    // eslint-disable-next-line global-require
    const image = this.props.backgroundImage
      ? // eslint-disable-next-line global-require
        require(`../../../static/${this.props.backgroundImage}`)
      : backgroundImage;
    return (
      <styles.StepsWrapper image={image}>
        <styles.StepsContainer>
          <styles.StepsImage />
          <DropDown />
          <styles.StepText> STEP</styles.StepText>
          <styles.StepNumber>{this.props.stepNumber}</styles.StepNumber>
        </styles.StepsContainer>
      </styles.StepsWrapper>
    );
  }
}
