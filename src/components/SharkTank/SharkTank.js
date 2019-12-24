import './SharkTank.scss';
import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { livingStudents } = this.props;
    const studentCards = livingStudents.map((student) => (<LiveStudent key={student.id} student={student} />));

    return (
      <div className="shark-tank">
        <h3>Shark Tank</h3>
          {studentCards}
      </div>
    );
  }
}

export default SharkTank;
