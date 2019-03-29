import styled from 'styled-components';
const magnifier = require('../../../static/magnifying-glass.svg');

const searchWrapper = styled.div`
  width: 438px;
  border-radius: 7px;
  border: solid 1px #051d1d;
  display: flex;
  background-color: #ffffff;
  padding: 0.8em;
`;

const Magnifier = styled.img.attrs({
  src: magnifier,
})`
  width: 1.525em;
  height: 1.525em;
  flex: 1;
`;
const Input = styled.input.attrs(() => ({
  // we can define static props
  type: 'text',
}))`
  color: #4a4a4a;
  font-size: 1em;
  padding: 0 0.2em;
  outline: none;
  flex: 12;
  border:none;
`;
export { searchWrapper, Magnifier, Input };
