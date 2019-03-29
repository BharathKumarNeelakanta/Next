import React from 'react';
import SearchBar from '../../components/SearchBar/index';
import NavBar from '../../components/NavBar/index';
import Steps from '../../components/Steps/index';
import ClinicLayout from '../../components/ClinicLayout/index';
import TreatmentLayout from '../../components/TreatmentLayout/index';
import GoalsLayout from '../../components/GoalsLayout/index';
import DropDown from '../../components/DropDown/index';
import Subscribe from '../../components/Subscribe/index';
import BeforeAfter from '../../components/BeforeAfter/index';

import ClinicImage from '../../../static/clinicimage.png';
import PractionerIcon from '../../../static/PractionerIcon.svg';
import CertifiedTick from '../../../static/CertifiedTick.svg';
import LikeHeartIcon from '../../../static/LikeHeartIcon.svg';
import ShareIcon from '../../../static/ShareIcon.svg';
import MicroNeedling from '../../../static/MicroNeedling.png';
import ShowMoreIcon from '../../../static/ShowMoreIcon.svg';

import * as styles from './styles';
const GoalImage = require('../../../static/arm.png');

const ClinicJsonData = {
  ClinicName: 'Brighter Life Med',
  HealthCarePractioners: 4,
  ClinicImage,
  PractionerIcon,
  CertifiedTick,
  LikeHeartIcon,
  ShareIcon,
};

const TreatmentJsonData = {
  TreatmentTitle: 'GLYCOLIC PEEL',
  TreatmentData:
    'A glycolic peel, or alpha hydroxy acid peel, removed the top layer of the skin..',
  // TreatmentSampleImage: 'https://i.stack.imgur.com/ZeHms.jpg',
  TreatmentSampleImage: MicroNeedling,
  LikeTreatment: LikeHeartIcon,
  ShareTreatment: ShareIcon,
  TreatmentRearData:
    'A micro needling or alpha hydeoxy acid peel, removes the top layer of skin..',
  ShowMoreIcon,
};

const GoalsJsonData = {
  GoalTitle: 'arm fat',
  GoalImage,
  LikeHeartIcon,
  ShareIcon,
};

const blueTheme = {
  primary: '#dffffd',
};

// eslint-disable-next-line react/prefer-stateless-function
export default class Body extends React.PureComponent {
  render() {
    const StepsComponent = [1, 2, 3].map(obj => <Steps stepNumber={obj} />);
    const GoalsComponent = [1, 2, 3, 4].map(() => (
      <GoalsLayout GoalsJsonData={GoalsJsonData} />
    ));
    const TreatmentsComponents = [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
      <TreatmentLayout
        TreatmentJsonData={TreatmentJsonData}
        theme={blueTheme}
      />
    ));
    const ClinicsComponents = [1, 2, 3, 4, 5, 6].map(() => (
      <ClinicLayout ClinicJsonData={ClinicJsonData} />
    ));

    const BeforeAfterComponents = [1, 2, 3, 4, 5, 6].map(() => <BeforeAfter />);
    return (
      <div>
        <styles.SearchAndNavWrapper>
          <styles.NavWrapper>
            <NavBar />
          </styles.NavWrapper>
          <styles.SearchWrapper>
            <SearchBar />
          </styles.SearchWrapper>
        </styles.SearchAndNavWrapper>
        <styles.HomeBannerWrapper>
          <styles.HomeBannerLeftWrapper>
            <styles.HomeBannerLeft />
          </styles.HomeBannerLeftWrapper>
          <styles.HomeBannerRightWrapper>
            <styles.HomeBannerRight>
              <styles.H1>Find a right Treatment for you</styles.H1>
              <styles.P>Let ’s discover your top options</styles.P>
            </styles.HomeBannerRight>
          </styles.HomeBannerRightWrapper>
        </styles.HomeBannerWrapper>
        <styles.StepsWrapper>{StepsComponent}</styles.StepsWrapper>
        {
          // Goals Sections
        }
        <styles.SectionWrapper>
          <styles.SectionFilterWrapper>
            <styles.SectionFilter>
              <styles.SectionLabel> Goals </styles.SectionLabel>
              <styles.DropDownWrapper>
                <DropDown />
              </styles.DropDownWrapper>
            </styles.SectionFilter>
            <styles.SectionViewBtnWrapper>
              <styles.SectionViewBtn>View All</styles.SectionViewBtn>
            </styles.SectionViewBtnWrapper>
          </styles.SectionFilterWrapper>
          <styles.GoalsInnerWrapper1>
            {GoalsComponent}
          </styles.GoalsInnerWrapper1>
          <styles.GoalsInnerWrapper2>
            {GoalsComponent}
          </styles.GoalsInnerWrapper2>
          <styles.GoalsInnerWrapper3>
            {GoalsComponent}
          </styles.GoalsInnerWrapper3>
        </styles.SectionWrapper>
        <Subscribe />
        {
          // Before After
        }
        <styles.SectionWrapper>
          <styles.SectionFilterWrapper>
            <styles.SectionFilter>
              <styles.SectionLabel>
                {' '}
                Before After Images/Videos{' '}
              </styles.SectionLabel>
              <styles.DropDownWrapper>
                <DropDown />
              </styles.DropDownWrapper>
            </styles.SectionFilter>
          </styles.SectionFilterWrapper>
          <styles.TreatmentsInnerWrapper>
            {BeforeAfterComponents}
          </styles.TreatmentsInnerWrapper>
        </styles.SectionWrapper>
        {
          // Treatments
        }
        <styles.SectionWrapper>
          <styles.SectionFilterWrapper>
            <styles.SectionFilter>
              <styles.SectionLabel> Treatments </styles.SectionLabel>
              <styles.DropDownWrapper>
                <DropDown />
              </styles.DropDownWrapper>
            </styles.SectionFilter>
            <styles.SectionViewBtnWrapper>
              <styles.SectionViewBtn>View All</styles.SectionViewBtn>
            </styles.SectionViewBtnWrapper>
          </styles.SectionFilterWrapper>
          <styles.TreatmentsInnerWrapper>
            {TreatmentsComponents}
          </styles.TreatmentsInnerWrapper>
        </styles.SectionWrapper>
        {
          // Clinics
        }
        <styles.SectionWrapper>
          <styles.SectionFilterWrapper>
            <styles.SectionFilter>
              <styles.SectionLabel> Most Popular Clinics </styles.SectionLabel>
              <styles.DropDownWrapper>
                <DropDown />
              </styles.DropDownWrapper>
            </styles.SectionFilter>
            <styles.SectionViewBtnWrapper>
              <styles.SectionViewBtn>View All</styles.SectionViewBtn>
            </styles.SectionViewBtnWrapper>
          </styles.SectionFilterWrapper>
          <styles.TreatmentsInnerWrapper>
            {ClinicsComponents}
          </styles.TreatmentsInnerWrapper>
        </styles.SectionWrapper>
      </div>
    );
  }
}
