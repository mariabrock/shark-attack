import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';


import studentsData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
import SharkAttack from '../components/SharkAttack/SharkAttack';

class App extends React.Component {
  state = {
    students: [],
    aliveStudents: [],
    deadStudents: [],
  }

  static propTypes = {
    dearlyDeparted: PropTypes.func,
    livingStudents: PropTypes.func,
    followTheLight: PropTypes.func,
  }

  forceUpdate = () => {
    const students = studentsData.getStudents();
    const aliveStudents = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyDeparted();
    this.setState({ students, aliveStudents, deadStudents });
  } // forces state to update when there is a change

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <SharkAttack aliveStudents={this.state.aliveStudents} forceUpdate={this.forceUpdate} />
        <div id="holdingDiv">
          <SharkTank livingStudents={this.state.aliveStudents} />
          <Graveyard dearlyDeparted={this.state.deadStudents} />
        </div>
      </div>
    );
  }
}

export default App;
