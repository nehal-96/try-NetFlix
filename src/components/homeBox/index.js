import React from "react";
import {Box} from './styles/homeBox';

export default function HomeBox() {
  return (
  <Box>
    <h1>Ready to watch? Enter your email to create or restart your membership.</h1>
    <input placeholder='Email Address'></input>
    <button>
      <span>GET STARTED</span>
      <img src='\images\icons\chevron-right.png' alt='btn'></img>
    </button>
  </Box>
  );
};