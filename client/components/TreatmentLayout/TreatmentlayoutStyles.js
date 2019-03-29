import styled from 'styled-components';

const TreatmentLayoutStyle = styled.div`
  height: 332px;
  width: 20%;
  margin: 2.5%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const TreatmentLayoutFront = styled.section`
  background: ${props => props.theme.primary};
  height: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const TreatmentLayoutFrontImagesample = styled.img`
  height: 251px;
  width: 100%;
  repeat: no-repeat;
`;

const TreatmentLayoutFrontTitle = styled.div`
  height: 81px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H5 = styled.h5`
  font-size: 1.125em;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: #3e4c5b;
  margin: 0;
  padding: 0 0.5em 0 0.5em;
  text-align: center;
  text-transform: capitalize;
`;

const TreatmentLayoutRear = styled.div`
  height: 332px;
  background: ${props => props.theme.primary};
  border-radius: 5px;
`;

const TreatmentLayoutRearDataInnerStyle = styled.div`
  height: 251px;
  padding: 45px 40px 10px 40px;
`;

const TreatmentLayoutButtonWrapper = styled.div`
  margin: 10% 1%;
  display: flex;
  justify-content: center;
`;

const ShareButton = styled.button`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  cursor: pointer;
`;

const ShareImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const LikeButton = styled.button`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LikeImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const H6 = styled.h6`
  font-size: 0.8125em;
  font-weight: 500;
  color: #777777;
  margin: 0;
  padding: 0 0.5em 0 0.5em;
  text-align: center;
`;

const TreatmentLayoutRearShowmore = styled.div`
  width: 100%;
  height: 81px;
  padding-right: 5%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const TreatmentlayoutRearShowmoreFont = styled.p`
  font-size: 0.75em;
  color: #061d1d;
  font-weight: 500;
`;

const TreatmentlayoutRearShowmoreIcon = styled.img`
  width: 19px;
  height: 10px;
`;

export {
  TreatmentLayoutStyle,
  TreatmentLayoutFront,
  TreatmentLayoutFrontImagesample,
  TreatmentLayoutFrontTitle,
  H5,
  TreatmentLayoutRear,
  TreatmentLayoutRearDataInnerStyle,
  TreatmentLayoutButtonWrapper,
  ShareButton,
  ShareImage,
  LikeButton,
  LikeImage,
  H6,
  TreatmentLayoutRearShowmore,
  TreatmentlayoutRearShowmoreFont,
  TreatmentlayoutRearShowmoreIcon,
};
