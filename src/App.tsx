import React from 'react';
import './App.css';
import { Background } from './components/hocs/background/background';
import { Content } from './components/hocs/content/content';

function App() {
  return (
    <>
      <Background />
      <Content />
    </>
  );
}

export default App;
