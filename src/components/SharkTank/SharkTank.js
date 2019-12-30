import './SharkTank.scss';
import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import livingStudent from '../../helpers/data/studentsData';

import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
    livingStudents: PropTypes.func,
  }

  render() {
    const liveStudents = livingStudent.livingStudent();
    const studentCards = liveStudents.map((student) => (<LiveStudent key={student.id} student={student} />));

    return (
      <div className="shark-tank">
        <h3>Shark Tank</h3>
          {studentCards}
      </div>
    );
  }
}

export default SharkTank;
