import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  
  render() {
  
    const quiz = [
      'Question 1: What is the command line to create a new React app?',
      'Question 2: What is a yarnlock?',
      'Question 3: Who will save your life when React gives you a 403 error?',
    ]
    
    const listQuestions = quiz.map( (i) => 
      <p><strong>{i}</strong></p> 
    )

    // Cards.js - build in process

    const cards = React.createElement(
      'div',
      {style: {
        width: '400px',
        height: '200px',
        marginLeft: '10px',
        marginRight: '10px',
        backgroundColor: 'white',
        border: 'solid black 1px',
        borderTop: 'solid black 10px', } 
      },
      listQuestions
    )

    const container = React.createElement(
      'div',
      {style: {
        margin: '20px auto 0 auto',
        width: '1200px',
        height: 'auto',
        padding: '10px',
        display: 'flex',
        }
      },
      cards,
      cards,
      cards,
    )

    return (
      <div className="App">
        <header className="App-header">
          <span className="App-title">REACT</span>
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-title">FLASH CARDS</span>
          <span className="author">BRIAN VUU . DEVPOINT LABS</span>
        </header>
        { React.createElement( 'div', {}, container ) }
        { React.createElement( 'div', {}, container ) }
      </div>
    );
  }
}

export default App;
