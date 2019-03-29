import React, { Component } from 'react';
import * as styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'All',
      data: ['drop1', 'drop2', 'drop3', 'drop4'],
      isDropdownOpen: false,
    };
  }

  handleItemClick = e => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
    this.setState({ label: e.target.innerText });
  };

  handleDropDownCLick = () => {
    const { isDropdownOpen } = this.state;
    this.setState({ isDropdownOpen: !isDropdownOpen });
  };

  render() {
    const dropDownListItems = this.state.data.map(obj => (
      <styles.DropDownItem onClick={this.handleItemClick}>
        {obj}
      </styles.DropDownItem>
    ));
    return (
      <styles.DropDownWrapper>
        <styles.DropDownBtn onClick={this.handleDropDownCLick}>
          {this.state.label}
          <styles.ArrowSpan>^</styles.ArrowSpan>
        </styles.DropDownBtn>
        {this.state.isDropdownOpen ? (
          <styles.DropDownList>{dropDownListItems}</styles.DropDownList>
        ) : (
          ''
        )}
      </styles.DropDownWrapper>
    );
  }
}
