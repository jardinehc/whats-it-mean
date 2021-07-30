import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Input } from 'semantic-ui-react'

function App() {


  
  return (
    <div className="App">
      <header className="header">
      <Header as='h1'>What does it mean?</Header>
      </header>
      <body className="body">
        <div className="search">
          <p className="searchtext">Search Plate</p>
            <Input size='massive' placeholder='Search...' />
        </div>
        </body>
    </div>
  );
}

export default App;
