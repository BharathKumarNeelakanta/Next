import React from 'react';
import Proptypes from 'prop-types';
import * as styles from './TreatmentlayoutStyles';

class TreatmentLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayFrontLayout: true,
    };
  }

  displayRear = () => {
    this.setState({
      displayFrontLayout: false,
    });
  };

  displayFront = () => {
    this.setState({
      displayFrontLayout: true,
    });
  };

  shareButtonClick = () => {
    console.log('share button clicked');
  };

  likeButtonClick = () => {
    console.log('like button clicked');
  };

  onShowMore = () => {
    console.log('clicked show more button');
  };

  render() {
    const displayFront = () => (
      <styles.TreatmentLayoutFront theme={this.props.theme}>
        <styles.TreatmentLayoutFrontImagesample
          src={this.props.TreatmentJsonData.TreatmentSampleImage}
          alt="sampleimage"
        />
        <styles.TreatmentLayoutFrontTitle>
          <styles.H5>{this.props.TreatmentJsonData.TreatmentTitle}</styles.H5>
        </styles.TreatmentLayoutFrontTitle>
      </styles.TreatmentLayoutFront>
    );
    const displayRear = () => (
      <styles.TreatmentLayoutRear theme={this.props.theme}>
        <styles.TreatmentLayoutRearDataInnerStyle>
          <styles.TreatmentLayoutButtonWrapper>
            <styles.ShareButton>
              <styles.ShareImage
                src={this.props.TreatmentJsonData.ShareTreatment}
                alt="Treatment like"
                onClick={this.shareButtonClick}
              />
            </styles.ShareButton>
            <styles.LikeButton>
              <styles.LikeImage
                src={this.props.TreatmentJsonData.LikeTreatment}
                alt="Treatment like"
                onClick={this.likeButtonClick}
              />
            </styles.LikeButton>
          </styles.TreatmentLayoutButtonWrapper>
          <styles.H5>{this.props.TreatmentJsonData.TreatmentTitle}</styles.H5>
          <styles.H6>
            {this.props.TreatmentJsonData.TreatmentRearData}
          </styles.H6>
        </styles.TreatmentLayoutRearDataInnerStyle>
        <styles.TreatmentLayoutRearShowmore onClick={this.onShowMore}>
          <styles.TreatmentlayoutRearShowmoreFont>
            Show More
          </styles.TreatmentlayoutRearShowmoreFont>
          <styles.TreatmentlayoutRearShowmoreIcon
            src={this.props.TreatmentJsonData.ShowMoreIcon}
            alt="show more icon"
          />
        </styles.TreatmentLayoutRearShowmore>
      </styles.TreatmentLayoutRear>
    );
    return (
      <styles.TreatmentLayoutStyle
        onMouseEnter={this.displayRear}
        onMouseLeave={this.displayFront}
      >
        {this.state.displayFrontLayout ? displayFront() : displayRear()}
      </styles.TreatmentLayoutStyle>
    );
  }
}

TreatmentLayout.propTypes = {
  TreatmentJsonData: Proptypes.object,
  theme: Proptypes.object,
  TreatmentSampleImage: Proptypes.string,
};

export default TreatmentLayout;
