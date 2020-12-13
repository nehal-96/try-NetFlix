import styled from 'styled-components/macro';


export const Box = styled.div `
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  height:100%;
  max-width:950px;
  padding-top: .85rem;
  margin: 0 auto;
  margin-bottom:10px;
  h1 {
    padding: 0 5%;
    max-width: none;
    padding-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 400;
    margin:0px;
    width:100%;
    text-align:center;
  }
  input {
    min-width: 450px;
    height: 60px;
    box-sizing:border-box;
  }
  button {
    font-size: 1.625rem;
    height: 60px;
    padding: 0 1em;
    background-color: #e50914;
    max-width:none;
    width:auyo;
    display:inline-flex;
    align-items:center;
    border:0px
  }
  span {
    font-size: 1.625rem;
    color:#fff;
  }
  img {
    height: .75em;
    width: .50em;
    flex: 0 1 auto;
    margin: 0 0 0 .5em;
    position: relative;
    filter:invert(100%);
  }
`;

