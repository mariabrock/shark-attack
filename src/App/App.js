import React from 'react';
import './App.scss';


import studentsData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
import SharkAttack from '../components/SharkAttack/SharkAttack';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentsData.getStudents();
    this.setState({ students });
  }

  followTheLightEvent = () => {
    const { students } = this.state;
    const livingStudents = studentsData.livingStudents();
    if (livingStudents.length >= 1) {
      const selectedStudentIndex = Math.floor(Math.random() * livingStudents.length);
      studentsData.followTheLight(livingStudents[selectedStudentIndex].id);
      this.setState({ students });
    }
  }

  render() {
    return (
      <div className="App">
        <SharkAttack students={this.students} followTheLightEvent={this.followTheLightEvent} />
        <div id="holdingDiv">
          <SharkTank livingStudents={this.state.livingStudents} />
          <Graveyard dearlyDeparted={this.state.dearlyDeparted} />
        </div>
      </div>
    );
  }
}

export default App;
