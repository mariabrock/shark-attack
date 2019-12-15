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

  livingStudents = (studentId) => {
    studentsData.getStudents(studentId);
    const students = studentsData.getStudents();
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <img src="https://c7.uihere.com/files/231/885/81/shark-attack-mug-gift-illustration-shark-heart-cliparts.jpg" alt="shark attack" /> */}
          <button className="btn btn-primary">Shark Attack!</button>
        </header>
        <SharkTank students={this.students} livingStudents={this.livingStudents} />
        <LiveStudents livingStudents={this.livingStudents} />
        {/* <Graveyard students={this.state.students} followTheLight={this.followTheLight} /> */}
      </div>
    );
  }
}

export default App;
