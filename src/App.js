import React from "react";
import "./styles.css";
import styled from "styled-components";

const Box = styled.div`
  border: 2px solid black;
  padding: 10px;
  margin: 10px;
  background-color: salmon;
  font-family: Arial, Helvetica, sans-serif;
`;

const H = styled.h1`
  font-size: 26pt;
  font-weight: normal;
`;

const Text = styled.p`
  font-size: 16pt;
  color: #333333;
`;

export default function App() {
  return (
    <Box>
      <H>this is a heading</H>
      <Text>this is some text on a page.</Text>
    </Box>
  );
}
