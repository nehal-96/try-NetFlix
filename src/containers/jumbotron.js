import React from "react";
import { Jumbotron } from '../components';
import jumboData from "../fixtures/jumbo"

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>    
    {jumboData.map((item) => (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Text>
              <Jumbotron.Title>
              {item.title}
              </Jumbotron.Title>
              <Jumbotron.SubTitle>
                {item.subTitle}
              </Jumbotron.SubTitle>
              </Jumbotron.Text>
              <Jumbotron.Image src={item.image} alt={item.alt}>
              </Jumbotron.Image>
            </Jumbotron>
          )
        )}
  </Jumbotron.Container>
  );
}