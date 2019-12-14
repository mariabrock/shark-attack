import './SharkTank.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Student from '../LiveStudents/LiveStudents';

import studentShape from '../../helpers/propz/studentTypes';

class SharkTank extends React.Component {
    static propTypes = {
      students: PropTypes.arrayOf(studentShape.studentShape),
      livingStudents: PropTypes.func,
      dearlyDeparted: PropTypes.func,
      followTheLight: PropTypes.func,
    }

    render() {
      const aStudent = this.props.students;

      const studentCards = aStudent.map((student) => (<Student key = {student.id} student={student} />));

      return (
            <div className="shark-tank">
                {studentCards}
            </div>
      );
    }
}

export default SharkTank;
