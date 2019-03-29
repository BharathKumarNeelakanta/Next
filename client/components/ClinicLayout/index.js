import React from 'react';
import Proptypes from 'prop-types';
import * as styles from './ClinicLayoutStyles';

class ClinicLayout extends React.PureComponent {
  shareButtonClick = () => {
    console.log('share button clicked');
  };

  likeButtonClick = () => {
    console.log('like button clicked');
  };

  render() {
    return (
      <styles.ClinicLayoutStyle>
        <styles.ClinicNameFont>
          {this.props.ClinicJsonData.ClinicName}
        </styles.ClinicNameFont>
        <styles.ClinicPractionerCertifiedWrapper>
          <styles.ClinicPractionerNumberWrapper>
            <styles.PractinerIcon
              src={this.props.ClinicJsonData.PractionerIcon}
              alt="Practiner Icon"
            />
            <styles.ClinicPractionerNumberFont>
              {this.props.ClinicJsonData.HealthCarePractioners}
              Healthcare Practitioner
            </styles.ClinicPractionerNumberFont>
          </styles.ClinicPractionerNumberWrapper>
          <styles.ClinicPractionerCertified>
            <styles.CertifiedIconWrapper
              src={this.props.ClinicJsonData.CertifiedTick}
            />
            <styles.CertifiedFont>CERTIFIED</styles.CertifiedFont>
          </styles.ClinicPractionerCertified>
        </styles.ClinicPractionerCertifiedWrapper>
        <styles.ClinicImageContainer>
          <styles.ClinicImageWrapper
            src={this.props.ClinicJsonData.ClinicImage}
            alt="clinic sample image"
          />
          <styles.ClinicLikeIconWrapper>
            <styles.ClinicLikeIcon
              src={this.props.ClinicJsonData.LikeHeartIcon}
              alt="share icon"
            />
          </styles.ClinicLikeIconWrapper>
          <styles.ClinicShareIconWrapper>
            <styles.ClinicShareIcon
              src={this.props.ClinicJsonData.ShareIcon}
              alt="share icon"
            />
          </styles.ClinicShareIconWrapper>
        </styles.ClinicImageContainer>
        <styles.ClinicAvailability>
          <styles.ClinicTimingDays>mon-sun</styles.ClinicTimingDays>
          <styles.ClinicTiming>9:00 AM-9:00 PM</styles.ClinicTiming>
        </styles.ClinicAvailability>
        <styles.ClinicTreatmentContainer>
          <styles.ClinicTreatment color="rgba(0, 0, 0, 0.54)">
            Face Wrinkles
          </styles.ClinicTreatment>
          <styles.ClinicTreatment color="rgba(0, 0, 0, 0.54)">
            Anti Aging
          </styles.ClinicTreatment>
          <styles.ClinicTreatment color="rgba(0, 0, 0, 0.54)">
            Hair Removal
          </styles.ClinicTreatment>
        </styles.ClinicTreatmentContainer>
        <styles.ClinicAddressTitle>Address</styles.ClinicAddressTitle>
        <styles.ClinicAddressData>
          # 23, 2nd Floor, Promax Plaza, 2nd Stage, BTM Layout, Bengaluru -
          560076
        </styles.ClinicAddressData>
        <styles.ViewClinicButton color="#ff6761">
          View Clinic
        </styles.ViewClinicButton>
      </styles.ClinicLayoutStyle>
    );
  }
}

ClinicLayout.propTypes = {
  ClinicJsonData: Proptypes.object,
  HealthCarePractioners: Proptypes.number,
};

export default ClinicLayout;
