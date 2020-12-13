import styled from 'styled-components';

export const Background = styled.div `
  background-image:url(${({img})=> img});
  display:flex;
  flex-direction:column;
  padding-bottom:70px;
  border-bottom: 8px solid #222;
  background-size:cover;
`;

export const Container = styled.div `
  background-color: transparent;
  color:#fff;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  z-index: 10;
`;

export const Button = styled.button `
  background-color: #e50914;
  line-height: normal;
  margin-right:3.5rem;
  padding: 6px 17px;
  font-weight: 400;
  font-size: 1rem;
  float: right;
  color:#fff;
  border:0px;
  border-radius: 3px;
  margin-top: .5rem;
`;
export const Logo = styled.img `
  height: 36px;
  width: 134px;
  margin-left:3.5rem;
  padding-top: .5rem;
  display:inline-block;
  background-color: initial;
  filter: saturate(1.3);
`;
export const TextHome = styled.div `
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  font-size: 1.50rem;
  font-weight: 400;
  h1 {
    padding-top:55px;
    margin:0 auto;
    max-width:60%
  }
  p {
    margin: 1rem auto 0px;
  }
`;

export const TextBrowse = styled.div `
  color:white;
  height:64px;
  line-height:normal;
  padding:140px 0 400px 0;
  margin:0 65px;
  text-shadow:2px 2px 4px rgba(0, 0, 0, 0.45);
  font-size:22px;
  width:50%;
  h1, p {
    padding:0px;
    margin:0px;
  }
  h1 {
    font-size:50px;
    font-weight:bold;
    margin-bottom:20px;  
  }
`;
export const Play = styled.button `
  box-shadow:0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color:#e6e6e6;
  color:#000;
  font-weight:bold;
  border-width:0;
  padding:10px 20px;
  border-radius:5px;
  max-width:130px;
  font-size:20px;
  margin-top:30px;
  cursor: pointer;
  &:hover {
    background-color:#ff1e1e;
    color:white;
  }
`
export const Category = styled.p `
  color:white;
  text-decoration:none;
  position:relative;
  bottom:5px;
  margin-left:30px;
  font-weight:${({active})=>(active==='true' ? '700':'normal')};
  cursor:pointer;
  display: inline;
  &:hover {
    font-weight:bold;
  }
  &:last-of-type {
  margin-right:0;
  }
`

export const Picture = styled.button `
background-image:url(${({src})=>src});
background-size:contain;
border:0;
width:32px;
height:32px;
cursor: pointer;
`
export const Dropdown = styled.div `
  background-color:black;
  position:absolute;
  padding:10px;
  width:100px;
  top:32px;
  right:10px;

  &:last-of-type {

    margin-bottom:0px;
  }
  
  button {
    margin-right:10px;
  }
  p {
  font-size:12px;
  margin-bottom:0px;
  margin-left:5px;
  }
  p:last-of-type {
    display:block;
}
`
export const Profile = styled.div `
  display:flex;
  align-items:center;
  margin-left:20px;
  position:relative;
  float:right;
  margin-right: 3.5rem;
  padding-top: .5rem;
  button {
    background-image:url(${({src})=>`/images/users/${src}.png`});
    background-size:contain;
    border:0;
    width:32px;
    height:32px;
    cursor: pointer;
  }
  
`
export const Search = styled.div `
display:inline-flex;
align-items:center;
float:right;
padding-top: .5rem;
svg {
  color:white;
  cursor:pointer;
}
`;

export const SearchIcon = styled.button `
  cursor:pointer;
  background-color:transparent;
  border:0;
  img {
    filter:brightness(0) invert(1);
    width:16px;
  }
`
export const SearchInput = styled.input `
background-color:#44444459;
color:white;
border:1px solid white;
transition:width 0.5s;
height:30px;
font-size:14px;
margin-left:${({active})=>(active===true?'10px':'0')};
padding:${({active})=>(active===true?'0 10px':'0')};
opacity:${({active})=>(active===true?'1':'0')};
width:${({active})=>(active===true?'200px':'0')};

`

