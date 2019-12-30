import React from 'react';
import PropTypes from 'prop-types';

// import studentShape from '../../helpers/propz/studentShape';
import studentsData from '../../helpers/data/studentsData';

class SharkAttack extends React.Component {
    state = {
      livingStudents: [],
    };

static propTypes = {
//   students: this.propTypes.arrayOf(studentShape.studentShape),

  dearlyDeparted: PropTypes.func,
  followTheLight: PropTypes.func,
}

followTheLightEvent = (e) => {
  e.preventDefault();
  const { livingStudents } = this.state;
  const random = Math.floor(Math.random() * (livingStudents.length));
  console.log(random);
  const oneLivingStudent = livingStudents[random];
  studentsData.followTheLight(oneLivingStudent);
}

render() {
  return (
        <button className="btn btn-primary" onClick={this.followTheLightEvent}>Shark Attack!</button>
  );
}
}

export default SharkAttack;
