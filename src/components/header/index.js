import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link as RouteLink} from 'react-router-dom';
import { Container, Logo, Button, Background, 
  TextHome, TextBrowse, Category, Profile, Dropdown,
   Search, SearchIcon, SearchInput, Play }
    from './styles/header';

const DisplayContext = createContext()

export default function Header({img, children, ...restProps}){
  return (
    <Background img={img} {...restProps}>{children}</Background >
  );
}
Header.Container = function HeaderContainer({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  );
}
Header.Button = function HeaderBiutton({to, children}) {
  return (
    <RouteLink to={to}>
      <Button>{children}</Button>
    </RouteLink>
  );
}

Header.Logo = function HeaderLogo({to}) {
  return (
    <RouteLink to={to}>
      <Logo src='images/Netflix_2015_logo.svg' alt='logo' />
    </RouteLink>
  );
}
Header.TextLink = function HeaderTextLink({children, ...restProps}) {
  return (
    <Category {...restProps}>
    {children}</Category>
  );
}
Header.Profile = function HeaderProfile({src, children, ...restProps}) {
  const [display, setDisplay] = useState(false)
  return (
    <DisplayContext.Provider value={{display}}>
    <Profile src={src} {...restProps} >
    <button src={src} onClick={()=>setDisplay(!display)}></button>
    {children}</Profile>
    </DisplayContext.Provider>
  );
}
Header.Dropdown = function HeaderDropdown({src, children, ...restProps}) {
  const {display} = useContext(DisplayContext)
  console.log(display)
  return (
    display? <Dropdown src={src} {...restProps}>
    <button src={src} ></button>
    {children}</Dropdown> : null
  );
}
Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
  const [activeState, setActiveState] = useState(false)
  return (
    <Search {...restProps}>
    <SearchIcon {...restProps} onClick={()=> setActiveState(!activeState)}>
      <img src='images/icons/search.png' alt='Search'></img>
    </SearchIcon>
    <SearchInput {...restProps} value={searchTerm} 
    active={activeState}
    onChange={({target})=>setSearchTerm(target.value)}>
    </SearchInput>
    </Search>
  );
}



Header.TextHome = function HeaderTextHome({children, ...restProps}) {
  return (
    <TextHome {...restProps}>
    {children}</TextHome>
  );
}

Header.TextBrowse = function HeaderTextBrowse({children, ...restProps}) {
  return (
    <TextBrowse {...restProps}>
    {children}</TextBrowse>
  );
}
Header.Play = function HeaderPlay({children, ...restProps}) {
  return (
    <Play {...restProps}>{children}</Play>
  )
}