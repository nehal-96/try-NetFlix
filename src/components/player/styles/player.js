import styled from 'styled-components/macro';

export const Container = styled.div`
  font:normal;
`
export const Button = styled.button `
  background-color:#e50914;
  border-color:#ff0a10;
  width:114px;
  height:45px;
  text-transform:uppercase;
  font-weight:bold;
  color:white;
  font-size:18px;
  height:45px;
  margin-top:30px;
  cursor: pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  padding-left:0;
  &:hover {
    transform:scale(1.05);
    background-color:#ff0a16;
  }
`
export const Screen = styled.div `
  flex-direction:column;
  display:flex;
  justify-content:center;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0, 0, 0, 0.5);
  margin:auto auto;
  video {
    height:100%;
    width:100%;
    margin:auto auto 50px;
    position:relative;
    max-width:900px;
  }
`
export const Close = styled.button `
  position:absolute;
  right:30px;
  top:15px;
  width:40px;
  height:30px;
  opacity:0.5;
  background-color:transparent;
  border:0;
  cursor:pointer;

  &:hover {
    opacity:1;
  }
  &:before, &:after {
    position:absolute;
    left:5px;
    top:5px;
    color:white;
    content:'X';
    height:22px;
    width:30px;
    background-color:#333;
  }
  &:before {
    transform:rotate(45deg);
  }
  &:after {
    transform:rotate(-45deg);
  }
`