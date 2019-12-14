import './LiveStudents.scss';
import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentTypes';


class LiveStudents extends React.Component {
    static propTypes = {
      students: studentShape.studentShape,
      livingStudents: PropTypes.func,
      dearlyDeparted: PropTypes.func,
      followTheLight: PropTypes.func,
    }

    render() {
      const student = this.props;

      return (
            <div className="card col-3">
                <img src="https://i.pinimg.com/originals/1e/d2/9e/1ed29eca5273e2eea99f1b79cc52dee9.png" className="card-img-top" alt={student.firstName} />
                <div className="card-body">
                    <h6 className="firstName">{student.firstName}</h6>
                    <h6 className="lastName">{student.lastName}</h6>
                </div>
            </div>
      );
    }
}

export default LiveStudents;
