import styled from 'styled-components';

const ClinicLayoutStyle = styled.div`
  background-color: #ffffff;
  width: 29%;
  margin: 1%;
  border-radius: 5px;
  padding: 2% 1%;
`;

const ClinicNameFont = styled.p`
  font-size: 1.9375em;
  color: #3e4c5b;
  line-height: 50px;
  font-weight: 700;
`;

const ClinicPractionerCertifiedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ClinicPractionerNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PractinerIcon = styled.img`
  height: 18px;
  width: 20px;
`;

const ClinicPractionerNumberFont = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: #9aa8b6;
  padding-left: 10px;
`;

const ClinicPractionerCertified = styled.div`
  height: 18px;
  width: 25%;
  border-radius: 8px;
  background-color: #269900;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CertifiedIconWrapper = styled.img`
  height: 10px;
  width: 9px;
  padding-right: 2px;
`;

const CertifiedFont = styled.p`
  font-size: 0.5em;
  letter-spacing: 0.7px;
  color: #ffffff;
`;

const ClinicImageContainer = styled.div`
  padding: 20px 0 16px 0;
  position: relative;
`;

const ClinicImageWrapper = styled.img`
  height: 193px;
  width: 100%;
`;

const ClinicLikeIconWrapper = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  top: 33%;
  right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClinicLikeIcon = styled.img`
  height: 18px;
  width: 20px;
`;

const ClinicShareIconWrapper = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  top: 55%;
  right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClinicShareIcon = styled.img`
  height: 18px;
  width: 20px;
`;

const ClinicAvailability = styled.div`
  padding: 0 0 10px 0;
  display: inline-flex;
`;

const ClinicTimingDays = styled.p`
  font-size: 1.25em;
  line-height: 1.55;
  color: #000000;
  text-transform: uppercase;
`;

const ClinicTiming = styled(ClinicTimingDays)`
  color: rgba(0, 0, 0, 0.54);
  padding-left: 10px;
`;

const ClinicTreatmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ClinicTreatment = styled.p`
  width: 48%;
  border-radius: 20px;
  border: solid 1px ${props => props.color};
  background-color: #ffffff;
  color: ${props => props.color};
  padding: 4px 0;
  line-height: 1.89;
  font-size: 1em;
  text-align: center;
  height: 40px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ClinicAddressTitle = styled.p`
  font-size: 1.25em;
  line-height: 1.5em;
  color: rgba(0, 0, 0, 0.54);
`;

const ClinicAddressData = styled(ClinicAddressTitle)`
  font-size: 1em;
`;

const ViewClinicButton = styled(ClinicTreatment)`
  width: 35%;
  font-size: 0.875em;
  border-radius: 10px;
  text-transform: uppercase;
  margin-top: 8px;
`;

export {
  ClinicLayoutStyle,
  ClinicNameFont,
  ClinicPractionerCertifiedWrapper,
  ClinicPractionerNumberWrapper,
  PractinerIcon,
  ClinicPractionerNumberFont,
  ClinicPractionerCertified,
  CertifiedIconWrapper,
  CertifiedFont,
  ClinicImageContainer,
  ClinicImageWrapper,
  ClinicLikeIconWrapper,
  ClinicLikeIcon,
  ClinicShareIconWrapper,
  ClinicShareIcon,
  ClinicAvailability,
  ClinicTimingDays,
  ClinicTiming,
  ClinicTreatmentContainer,
  ClinicTreatment,
  ClinicAddressTitle,
  ClinicAddressData,
  ViewClinicButton,
};
