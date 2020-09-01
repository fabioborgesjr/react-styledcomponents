import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
  background-color: palevioletred;
  position: fixed;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.a`
  font-size: 16px;
  font-family: Read;
  font-weight: bold;
  margin: 20px;
  color: white;
`;

export default function Header() {
  return (
    <Navbar>
      <Item>Home</Item>
      <Item>About</Item>
      <Item>Contact</Item>
    </Navbar>
  );
}
