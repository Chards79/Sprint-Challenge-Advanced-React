import React from 'react';
import './App.css';
import axios from 'axios';
import MappedCards from './components/MappedCards';
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    players: []
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log('Own Goal', err));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Women World Cup Stars</h1>
        <div className="cards">
          <MappedCards players={this.state.players} />
        </div>
      </div>
    );
  }
}
export default App;
