import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div `
  display:flex;
  flex-direction:column;
  margin:auto;
  justify-content:center;
  align-items:center;
  max-width:80%;
`;
//list = container
export const Title = styled.h1 `
  width:100%;
  font-size:48px;
  text-align:center;
  font-weight:500;
  
`;

export const User = styled.ul `
  padding:0px;
  margin:0px;
  display:flex;
  flex-direction:row;
  li {
    max-height:200px;
    max-width:200px;
    list-style-type:none;
    text-align: center;
    margin-right:30px;
    &:hover img {
      border:3px solid white;
    }
    &:hover p {
      font-weight:bold;
      
    }
    &:last-of-type {
      margin-right:0;
    }
    }
    img {
      widows:100%;
      max-width:150px;
      height:auto;
      border:3px solid black;
      cursor:pointer;
    }
    p {
      color:#808080;
      text-overflow:ellipsis;
      font-size:16px;
      &:hover {
        font-weight:bold;
        color:#e5e5e5;
      }
    }

`;

export const Spinner = styled.div `
  position:fixed;
  width:100%;
  height:100%;
  z-index:999;
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url(/images/misc/spinner.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -150px;
    margin-left: -75px;
    width: 150px;
    height: 150px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const HideBody = createGlobalStyle`
  body {
    overflow:hidden;
  }  
`

export const Picture = styled.img`
  width:50px;
  height:50px;
  position:absolute;
  top:50%;
  left:50%;
  margin-top:-100px;
  margin-left:-22px;
`;