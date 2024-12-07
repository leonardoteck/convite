import React from 'react';
import './App.css';
import { Background } from './hocs/background/background';
import { Content } from './hocs/content/content';

function App() {
  return (
    <>
      <Background />
      <Content />
    </>
  );
}

export default App;
