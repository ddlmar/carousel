import React, { useState } from "react";

import image from "/vite.svg";

import {
  ButtonToLeft,
  ButtonToRight,
  Container,
  Content,
  ImageCont,
  ImageContainer,
} from "./styles";

function App() {
  const [position, setPosition] = useState(0);

  const imageArray = [
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
  ];

  const arrayLength = imageArray.length;

  return (
    <Container>
      <Content>
        {imageArray.map((image, index) => (
          <ImageContainer key={index} value={position}>
            {index > 0 && (
              <ButtonToLeft
                onClick={() => setPosition((prevState) => prevState - 1)}
              >
                <span>{"<"}</span>
              </ButtonToLeft>
            )}
            <ImageCont src={image} alt="teste" draggable={false} />
            {index < arrayLength - 1 && arrayLength > 1 && (
              <ButtonToRight
                onClick={() => setPosition((prevState) => prevState + 1)}
              >
                <span>{">"}</span>
              </ButtonToRight>
            )}
          </ImageContainer>
        ))}
      </Content>
    </Container>
  );
}

export default App;
