import React from 'react';
import './App.scss';

import studentsData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyDeparted: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });
    const dearlyDeparted = studentsData.dearlyDeparted();
    this.setState({ dearlyDeparted });
  }

  haveSharkAttackEvent = (e) => {
    const { livingStudents } = this.state;
    const student = livingStudents[Math.floor(Math.random() * livingStudents.length)];
    e.preventDefault();
    studentsData.followTheLight(student.id);
    // this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-primary" onClick={this.haveSharkAttackEvent}>Shark Attack!</button>
        <SharkTank livingStudents={this.state.livingStudents} />
        <Graveyard dearlyDeparted={this.state.dearlyDeparted} />
      </div>
    );
  }
}

export default App;
