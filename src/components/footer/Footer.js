import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: tomato;
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const GithubLink = styled.a`
  color: white;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <Container>
      This app uses Styled Components - Check my &nbsp;
      <GithubLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/fabioborgesjr"
      >
        Github
      </GithubLink>
      &nbsp; for more.
    </Container>
  );
}
