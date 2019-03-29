import React from 'react';
import Proptypes from 'prop-types';

import * as styles from './GoalsLayoutStyles';
class GoalsLayout extends React.PureComponent {
  shareButtonClick = () => {
    console.log('share button clicked');
  };

  likeButtonClick = () => {
    console.log('like button clicked');
  };

  render() {
    return (
      <styles.GoalsLayoutStyle width={this.props.width}>
        <styles.GoalsImageWrapper>
          <styles.GoalsImage src={this.props.GoalsJsonData.GoalImage} />
          <styles.LikeButton>
            <styles.LikeImage
              src={this.props.GoalsJsonData.LikeHeartIcon}
              alt="Goal like"
              onClick={this.likeButtonClick}
            />
          </styles.LikeButton>
          <styles.ShareButton>
            <styles.ShareImage
              src={this.props.GoalsJsonData.ShareIcon}
              alt="Goal share"
              onClick={this.shareButtonClick}
            />
          </styles.ShareButton>
        </styles.GoalsImageWrapper>
        <styles.GoalsTitleWrapper>
          <styles.GoalsTitle>
            {this.props.GoalsJsonData.GoalTitle}
          </styles.GoalsTitle>
        </styles.GoalsTitleWrapper>
      </styles.GoalsLayoutStyle>
    );
  }
}

GoalsLayout.propTypes = {
  GoalsJsonData: Proptypes.object,
  width: Proptypes.string,
};

export default GoalsLayout;
