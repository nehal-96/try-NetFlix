import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Button, Container, Screen, Close } from "./styles/player";

const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [play, setPlay] = useState(false);
  return (
    <PlayerContext.Provider value={{ play, setPlay }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}
Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { play, setPlay } = useContext(PlayerContext);
  return play
    ? ReactDOM.createPortal(
        <Screen  onClick={() => setPlay(false)} {...restProps} data-testid='player'>
          <video id="netflix-player" controls>
            <source src={src} type="video/mp4" />
          </video>
          <Close />
        </Screen>,
        document.body
      )
    : null;
};
Player.Button = function PlayerButton() {
  const { setPlay } = useContext(PlayerContext);
  return <Button onClick={() => setPlay(true)}>Play</Button>;
};
