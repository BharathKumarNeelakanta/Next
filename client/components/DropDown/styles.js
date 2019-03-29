import styled from 'styled-components';

const DropDownWrapper = styled.div`
  border-radius: 20px;
  position: relative;
  background-color: #ffffff;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  border: 1px solid;
  margin: auto;
`;

const DropDownBtn = styled.div`
  text-align: center;
  width: 100%;
`;

const DropDownList = styled(DropDownWrapper)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  text-align: center;
  height: 100px;
  border-radius: 0px;
  flex-direction: column;
  overflow: scroll;
`;

const ArrowSpan = styled.span`
  float: right;
  padding: 0 10px;
`;

const DropDownItem = styled.div``;

export { DropDownBtn, DropDownList, DropDownWrapper, DropDownItem, ArrowSpan };
