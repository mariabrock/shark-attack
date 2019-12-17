import './Graveyard.scss';
import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

import Gravestone from '../Gravestone/Gravestone';

class Graveyard extends React.Component {
    static propTypes = {
      dearlyDeparted: PropTypes.arrayOf(studentShape.studentShape),
    }

    render() {
      const { dearlyDeparted } = this.props;
      const gravestone = dearlyDeparted.map((student) => (<Gravestone key={student.id} student={student} />));

      return (
            <div className="graveyard">
                Graveyard
                {gravestone}
            </div>
      );
    }
}

export default Graveyard;
