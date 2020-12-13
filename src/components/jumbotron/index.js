import React from "react";
import {Item, Container, Text, Title, Image, SubTitle} from './styles/jumbotron';

export default function Jumbotron({direction='row', children, ...restprops}) {
  return (
  <Item direction={direction} {...restprops}>{children}</Item>
  );
}

Jumbotron.Container = ({children}) => {
  return (
    <Container>{children}</Container>
  );
}

Jumbotron.Text = ({children}) => {
  return (
    <Text>{children}</Text>
  );
}

Jumbotron.Title = ({children}) => {
  return (
    <Title>{children}</Title>
  );
}

Jumbotron.SubTitle = ({children}) => {
  return (
    <SubTitle>{children}</SubTitle>
  );
}

Jumbotron.Image = ({...restprops}) => {
  return (
    <Image {...restprops}/>
  );
}

//notice styled component with .img would be <Image/> not <Image></Image>