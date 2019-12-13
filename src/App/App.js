import React from 'react';
import './App.scss';

import studentsData from '../helpers/data/studentsData';

import LiveStudents from '../components/LiveStudents/LiveStudents';
import SharkTank from '../components/SharkAttack/SharkAttack';
// import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentsData.getStudents();
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src="https://c7.uihere.com/files/231/885/81/shark-attack-mug-gift-illustration-shark-heart-cliparts.jpg" alt="shark attack" />
          <button className="btn btn-primary">Shark Attack!</button>
        </header>
        <SharkTank students={this.state.students} livingStudents={this.livingStudents} dearlyDeparted={this.dearlyDeparted} followTheLight={this.followTheLight} />
        <LiveStudents students={this.state.students} />
        {/* <Graveyard students={this.state.students} followTheLight={this.followTheLight} /> */}
      </div>
    );
  }
}

export default App;
