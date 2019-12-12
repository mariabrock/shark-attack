const students = [
  {
    id: 'student1',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: '',
    lastName: '',
    isDead: false,
  },
];

const getStudents = () => students;

export default { getStudents };
