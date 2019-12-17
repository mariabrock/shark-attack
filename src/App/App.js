import React from 'react';
import './App.scss';

import studentsData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';
// import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    livingStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-primary">Shark Attack!</button>
        <SharkTank livingStudents={this.state.livingStudents} />
        {/* <Graveyard students={this.state.students} followTheLight={this.followTheLight} /> */}
      </div>
    );
  }
}

export default App;
