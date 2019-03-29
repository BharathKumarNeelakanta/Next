import styled from 'styled-components';

const GoalsLayoutStyle = styled.div`
  height: 261px;
  width: ${props => props.width};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  margin: 30px;
`;

const GoalsImageWrapper = styled.div`
  height: 197px;
  width: 100%;
  position: relative;
`;

const GoalsImage = styled.img`
  width: 100%;
  height: 197px;
`;

const ShareButton = styled.button`
  height: 48px;
  width: 49px;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  top: 53%;
  right: 2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ShareImage = styled.img`
  height: 25px;
  width: 28px;
`;

const LikeButton = styled.button`
  height: 48px;
  width: 49px;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  top: 18%;
  right: 2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LikeImage = styled.img`
  height: 25px;
  width: 28px;
`;

const GoalsTitleWrapper = styled.div`
  height: 64px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GoalsTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #3e4c5b;
  text-transform: uppercase;
  text-align: center;
`;

export {
  GoalsLayoutStyle,
  GoalsImageWrapper,
  GoalsImage,
  ShareButton,
  ShareImage,
  LikeButton,
  LikeImage,
  GoalsTitleWrapper,
  GoalsTitle,
};
