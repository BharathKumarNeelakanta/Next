import React, { Component } from 'react';
import * as style from './styles';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    const navbar = [
      { name: 'Treatments', url: '/treatment' },
      { name: 'Goals', url: '/goals' },
      { name: 'Find a Clinic', url: '/clinincs' },
      { name: 'Remember To Ask', url: '/remember' },
    ];
    this.state = { navbar };
  }

  render() {
    const Navbar = this.state.navbar.map(obj => (
      <style.NavItemWrapper>
        <style.NavItem href={obj.url}>{obj.name}</style.NavItem>
      </style.NavItemWrapper>
    ));
    return <style.NavBarWrapper>{Navbar}</style.NavBarWrapper>;
  }
}
