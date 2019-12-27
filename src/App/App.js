import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

import studentsData from '../helpers/data/studentsData';
import studentShape from '../helpers/propz/studentShape';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  static propTypes = {
    livingStudent: PropTypes.arrayOf(studentShape.studentShape),
  }

  state = {
    livingStudents: [],
    dearlyDeparted: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudent();
    this.setState({ livingStudents });
    const dearlyDeparted = studentsData.dearlyDeparted();
    this.setState({ dearlyDeparted });
  }

  followTheLight = (deadStudentId) => {
    studentsData.killAStudent(deadStudentId);
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ deadStudents });
    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });
  }

  followTheLightEvent = (e) => {
    e.preventDefault();
    const { followTheLight, livingStudent } = this.props;
    const random = Math.floor(Math.random() * livingStudent.length);
    console.log(random);
    const oneLivingStudent = livingStudent[random];
    followTheLight(oneLivingStudent.id);
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-primary" onClick={this.followTheLightEvent}>Shark Attack!</button>
        <div id="holdingDiv">
          <SharkTank livingStudents={this.state.livingStudents} followTheLight={this.followTheLight} />
          <Graveyard dearlyDeparted={this.state.dearlyDeparted} />
        </div>
      </div>
    );
  }
}

export default App;
