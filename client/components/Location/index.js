import React, { Component } from 'react';
import * as style from './styles';

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = { location: 'Bangalore' };
  }

  handleChange = e => {
    this.setState({ location: e.target.value });
  };

  handleLocationClick = e => {
    // eslint-disable-next-line no-console
    console.log(e.target);
  };

  render() {
    return (
      <style.LocationContainer>
        <style.LocationIcon />
        <style.Input
          onChange={this.handleChange}
          defaultValue={this.state.location}
        />
        <style.LocationDetectBtnContainer onClick={this.handleLocationClick}>
          <style.GeoLocationIcon />
          <style.Paragraph>Detect</style.Paragraph>
        </style.LocationDetectBtnContainer>
      </style.LocationContainer>
    );
  }
}
