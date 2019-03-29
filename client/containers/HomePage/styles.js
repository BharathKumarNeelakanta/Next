import styled from 'styled-components';

const bannerImage = require('../../../static/home-banner.png');
const bannerImage2 = require('../../../static/home-banner-back.png');
const HomeContainer = styled.div``;
const Header = styled.div``;
const Footer = styled.div``;
const Body = styled.div``;

const HomeBannerWrapper = styled.div`
  height: 500px;
  display: flex;
`;

const HomeBannerLeftWrapper = styled.div`
  flex: 1;
`;
const HomeBannerRightWrapper = styled(HomeBannerLeftWrapper)`
  background-image: url(${bannerImage2});
`;
const HomeBannerLeft = styled.img.attrs({
  src: bannerImage,
})`
  width: 100%;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  flex: 1;
`;
const HomeBannerRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const H1 = styled.h1`
  font-size: 80px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.9;
  letter-spacing: normal;
  color: #fa7369;
  margin: 0;
`;

const P = styled.p`
  margin: 0;
`;

const StepsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Steps = styled.div``;

const SearchAndNavWrapper = styled.div`
  display: flex;
  padding: 1em;
  flex-wrap: wrap;
  flex-direction: row;
`;

const SearchWrapper = styled.div`
  flex: 4;
`;
const NavWrapper = styled.div`
  flex: 12;
`;

const SectionWrapper = styled(StepsWrapper)`
  max-width: 1200px;
  margin: auto;
`;
const SectionFilterWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 30px 20px 30px;
`;
const SectionFilter = styled.div`
  flex: 2;
  display: flex;
`;

const SectionLabel = styled.div`
  display: inline-block;
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  color: #3e4c5b;
  padding-right: 72px;
`;

const DropDownWrapper = styled.div`
  display: inline-block;
`;

const SectionViewBtnWrapper = styled.div`
  flex: 1;
  text-align: right;
`;
const SectionViewBtn = styled.div`
  width: 134px;
  height: 53px;
  text-align: center;
  border-radius: 20px;
  background-color: #f97269;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.7;
  letter-spacing: normal;
  color: #ffffff;
  display: block;
  float: right;
`;
const GoalsInnerWrapper1 = styled.div`
  flex: 2;
`;
const GoalsInnerWrapper2 = styled(GoalsInnerWrapper1)``;
const GoalsInnerWrapper3 = styled(GoalsInnerWrapper1)`
  flex: 1;
`;

const TreatmentsInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export {
  HomeContainer,
  Header,
  Footer,
  Body,
  HomeBannerWrapper,
  HomeBannerRightWrapper,
  HomeBannerLeftWrapper,
  HomeBannerLeft,
  HomeBannerRight,
  H1,
  P,
  SearchAndNavWrapper,
  StepsWrapper,
  Steps,
  SearchWrapper,
  NavWrapper,
  SectionWrapper,
  SectionViewBtnWrapper,
  SectionFilterWrapper,
  SectionFilter,
  SectionLabel,
  DropDownWrapper,
  SectionViewBtn,
  GoalsInnerWrapper1,
  GoalsInnerWrapper2,
  GoalsInnerWrapper3,
  TreatmentsInnerWrapper,
};
