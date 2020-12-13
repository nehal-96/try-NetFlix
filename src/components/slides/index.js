import React, { createContext, useContext, useState } from "react";
import {Slide, Container, Title, Card, Info,
   Image, SubTitle, Text, Feature,  ShowText,
    Close, Content, Maturity
  } from './slides/slides'

const FeatureContext = createContext()


export default function Slides({children, ...restProps}) {
  const [showFeature, setShowFeature] = useState(false)
  const [slideFeature, setSlideFeature] = useState({})
  return (
    <FeatureContext.Provider value={{showFeature, setShowFeature, slideFeature, setSlideFeature}}>
    <Container {...restProps}>
      {children}
    </Container>
    </FeatureContext.Provider>
  )
}

Slides.Title = function SlidesTitle({children, ...restProps}) {
  return (
    <Title>
      {children}
    </Title>
  )
}
Slides.Card = function SlidesCard({children, ...restProps}) {
  return (
    <Card>
      {children}
    </Card>
  )
}
Slides.Slide = function SlidesSlide({slide, children, ...restProps}) {
  const {setShowFeature, setSlideFeature} = useContext(FeatureContext)
  return (
    <Slide onClick={()=>{
      setShowFeature(true)
      setSlideFeature(slide)
    }}
    {...restProps}>
      {children}
    </Slide>
  )
}
Slides.Text = function SlidesText({children, ...restProps}) {
  return (
    <Text {...restProps}>{children}</Text>
  )
}
Slides.SubTitle = function SlidesSubTitle({children, ...restProps}) {
  return (
    <SubTitle {...restProps}>{children}</SubTitle>
  )
}
Slides.Image = function SlidesImage({children, ...restProps}) {
  return (
    <Image {...restProps} />
  )
}
Slides.Info = function SlidesInfo({children, ...restProps}) {
  return (
    <Info>
      {children}
    </Info>
  )
}
Slides.Feature = function SlidesFeature({category, children, ...restProps}){
  const {showFeature, slideFeature, setShowFeature} = useContext(FeatureContext)
  return showFeature ? (
    <Feature 
    src={`/images/${category}/${slideFeature.genre}/${slideFeature.slug}/large.jpg`}
    {...restProps}>
      <Content>
        <Title>{slideFeature.title}</Title>
        <ShowText>{slideFeature.description}</ShowText>
        <Close onClick={()=> setShowFeature(false)} >
        <img src='/images/icons/close.png' alt='close' />
        </Close>
        <Maturity rating={slideFeature.maturity}>
          {slideFeature.maturity < 12 ? 'PG' : slideFeature.maturity}
          </Maturity>
          <ShowText fontWeight='bold'>
            {slideFeature.genre.toUpperCase()}
          </ShowText>
          {children}
        </Content>
    </Feature> 
  ): null
}

