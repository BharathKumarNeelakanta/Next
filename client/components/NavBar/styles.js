import styled from 'styled-components';

const NavBarWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 12px 0 0 0;
`;

const NavItemWrapper = styled.li``;

const NavItem = styled.a`
  display: block;
  padding: 0px 40px;
  text-decoration: none;
  opacity: 0.7;
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #051d1d;
  :hover {
    background-color: #555;
    color: white;
  }
`;

export { NavBarWrapper, NavItem, NavItemWrapper };
