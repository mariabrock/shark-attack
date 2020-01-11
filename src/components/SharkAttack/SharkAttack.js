import React from 'react';
import PropTypes from 'prop-types';

import studentsData from '../../helpers/data/studentsData';

class SharkAttack extends React.Component {
    state = {
      students: [],
    };

static propTypes = {
  aliveStudents: PropTypes.array,
  dearlyDeparted: PropTypes.func,
  livingStudents: PropTypes.func,
  forceUpdate: PropTypes.func,
}

followTheLightEvent = () => {
  const { aliveStudents, forceUpdate } = this.props;
  const attackedStudentId = aliveStudents[Math.floor(Math.random() * aliveStudents.length)].id;
  studentsData.followTheLight(attackedStudentId);
  forceUpdate(); // takes student that was attacked by the shark and forces the state to update
}

render() {
  return (
        <button className="btn btn-primary" onClick={this.followTheLightEvent}>Shark Attack!</button>
  );
}
}

export default SharkAttack;
