import React, {useContext, useEffect, useState} from "react";
import Fuse from 'fuse.js'
import {ProfilesSelectionContainer} from './profilesSelection'
import {FirebaseContext} from '../context/firebase';
import { Profiles, Header, Slides, Player } from "../components";


export function BrowseContainer({slides}) {
  const {firebase} = useContext(FirebaseContext);
  const [searchTerm, setSearchTerm] = useState('')
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const user = firebase.auth().currentUser || {}
  const [category, setCategory] = useState('films')
  const [categorySlides, setCategorySlides] = useState([])
  useEffect(()=>
  setTimeout(()=>{
    setLoading(false)
  }, 3000)
  ,[profile.displayName])
  useEffect(()=> {
    const fuse = new Fuse(categorySlides, {
      keys: ['data.description', 'data.title', 'data.genre']
    })
    const results = fuse.search(searchTerm).map(({item})=> item)
    if (searchTerm.length > 3 && results.length > 0) {
      setCategorySlides(results)
    } else {
      setCategorySlides(slides[category])
    }
  }, [searchTerm])
  useEffect(()=>{ 
    setCategorySlides(slides[category])
  }, [slides, category])
  let x=0;
  return (
    profile.displayName ? (loading?<Profiles.Loading src={user.photoURL} />:
      <>
      <Header img='/images/misc/joker1.jpg'>
        <Header.Container>
        <Header.Logo to='/home' />
        <Header.TextLink onClick={()=>setCategory('series')}
        active={category==='series'?'true':'false'}
        >Series</Header.TextLink>
        <Header.TextLink onClick={()=>setCategory('films')}
        active={category==='films'?'true':'false'}
        >Films</Header.TextLink>
        <Header.Profile src={user.photoURL}>
          <Header.Dropdown src={user.photoURL}>
          <Header.TextLink>{user.displayName}</Header.TextLink>
            <Header.TextLink onClick={()=>
            firebase.auth.signOut()
            }>Sign out</Header.TextLink>
            </Header.Dropdown>
        </Header.Profile>
        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Header.Container>
        <Header.TextBrowse>
          <h1>Watch Joker Now</h1>
          <p>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. </p>
          <Header.Play>Play</Header.Play>
          </Header.TextBrowse>
      </Header>
        {categorySlides.map((categoryItem)=> (
          <Slides key={`${category}-${categoryItem.title.toLowerCase()}`}>  
            <Slides.Title>{categoryItem.title}</Slides.Title>
            <Slides.Card>
              {categoryItem.data.map((slide)=>(
                <Slides.Slide key={`slide.docId ${++x}`} slide={slide}>
                  <Slides.Image src={`/images/${category}/${slide.genre}/${slide.slug}/small.jpg`} />
                  <Slides.Info>
                  <Slides.SubTitle>{slide.title}</Slides.SubTitle>
                  <Slides.Text>{slide.description}</Slides.Text>
                  </Slides.Info>
                </Slides.Slide>
              ))}
              </Slides.Card>
              <Slides.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4" />
                  </Player>
                </Slides.Feature>
          </Slides>
        ))}
      </>):
    <ProfilesSelectionContainer user={user} setProfile={setProfile} />
  )
}