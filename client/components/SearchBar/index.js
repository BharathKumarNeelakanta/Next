import React, { Component } from 'react';
import * as styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { serachText: 'search' };
  }

  handleSearchCTexthange = e => {
    this.setState({ serachText: e.target.value });
  };

  render() {
    return (
      <styles.searchWrapper>
        <styles.Magnifier />
        <styles.Input
          onChange={this.handleSearchCTexthange}
          defaultValue=""
          placeholder={this.state.serachText}
        />
      </styles.searchWrapper>
    );
  }
}
