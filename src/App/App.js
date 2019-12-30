import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

import studentsData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
import SharkAttack from '../components/SharkAttack/SharkAttack';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyDeparted: [],
  }

  static props = {
    followTheLightEvent: PropTypes.func,
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudent();
    this.setState({ livingStudents });
    const dearlyDeparted = studentsData.dearlyDeparted();
    this.setState({ dearlyDeparted });
  }

  render() {
    return (
      <div className="App">
        <SharkAttack followTheLightEvent={followTheLightEvent} />
        <div id="holdingDiv">
          <SharkTank livingStudents={this.state.livingStudents} />
          <Graveyard dearlyDeparted={this.state.dearlyDeparted} />
        </div>
      </div>
    );
  }
}

export default App;
