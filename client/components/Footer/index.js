import React, { Component } from 'react';
import { FooterContainer , LeftImage } from './styles';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { footer: 'footer' };
  }

  render() {
    return <FooterContainer>{this.state.footer}</FooterContainer>;
  }
}
