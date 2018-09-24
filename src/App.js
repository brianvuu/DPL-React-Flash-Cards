import React from 'react';
import Cards from './components/Cards';
import AddQuestion from './components/AddQuestion';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  
  // Same as component() super() this.state ({quiz:..})
  componentWillMount(){
    this.setState({
      quiz: [
        { question: 'What is the command line to create a new React app?',
        answer: 'create-react-app' },
        { question: 'What is the command line to start a local server using Yarn?',
        answer: 'yarn start' },
        { question: 'Who will save your life when React gives you a 403 error?',
        answer: 'The awesome crew at DPL' },
      ]
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <span className="App-title">REACT</span>
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-title">FLASH CARDS</span>
          <span className="author">BRIAN VUU // DEVPOINT LABS</span>
        </header>
        <AddQuestion />
        <Cards quiz={this.state.quiz}/>
        {/* <Cards /> */}
      </div>
    );
  }
}

export default App;
