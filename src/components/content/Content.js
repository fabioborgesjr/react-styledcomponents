import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: -webkit-fill-available;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Text = styled.p`
  text-align: center;
`;

export default function Content() {
  return (
    <Container>
      <Text>{"You can get started with Styled Components following the "}</Text>
      &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://styled-components.com/docs/basics#getting-started"
      >
        official documentation
      </a>
    </Container>
  );
}
