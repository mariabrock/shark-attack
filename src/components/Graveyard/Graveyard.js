import './Graveyard.scss';
import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import studentsData from '../../helpers/data/studentsData';

import Gravestone from '../Gravestone/Gravestone';

class Graveyard extends React.Component {
    static propTypes = {
      students: PropTypes.arrayOf(studentShape.studentShape),
      dearlyDeparted: PropTypes.func,
    }

    render() {
      const gravestone = studentsData.dearlyDeparted().map((student) => (<Gravestone key={student.id} student={student} />));

      return (
            <div className="graveyard">
                <h3>Graveyard</h3>
                {gravestone}
            </div>
      );
    }
}

export default Graveyard;
