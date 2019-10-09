import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Navbar from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <div>Hello Bite-size!</div>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: white;
    
    font-family: 'Lato', sans-serif;
  }
   h1, h2, h3, h4, h5, h6 {
    font-family: 'Anton', sans-serif;
   }
`;
