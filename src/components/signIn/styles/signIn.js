import styled from 'styled-components';
import {Link as RouteLink} from 'react-router-dom'
export const Frame = styled.div `
  display:flex;
  flex-direction:column;
  min-height: 660px;
  padding: 60px 68px 40px;
  border-radius: 4px;
  background-color: rgba(0,0,0,.75);
  max-width: 450px;
  margin: 0 auto 0px;
  box-sizing:border-box;
  color: #b3b3b3;
`;
export const Form = styled.form `
  flex-grow:1;
  font-size: 13px;
  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin:0px;
    margin-bottom: 28px;
    padding: 0;
  }
  label {
    padding:7px;
  }
  span {
    float:right;
  }
`;
export const Input = styled.input `
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  margin-bottom:16px;
  line-height: 50px;
  padding: 10px 20px 6px;
  background: #333;
  width:100%;
  box-sizing: border-box;
`;
export const Submit = styled.button `
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  width: 100%;
  padding: 16px;
  background: #e50914;
  border:0px;
  color: #fff;
`;

export const Text = styled.div `
    color: #737373;
    font-size: 13px;
    font-weight: 500;
    margin-top: 16px;
    min-height:216px;

  img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    display:inline-block;
  }
  div {
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
  }
`;
export const Link = styled(RouteLink)`
  color:#fff;
  margin-left:5px;
`;
export const Error = styled.div `
    display: table-cell;
    vertical-align: middle;
    padding: 10px 200px;
    color: #fff;
    font-size: 14px;
    background: #e87c03;
    margin:0px;
    border-radius: 4px;

`;