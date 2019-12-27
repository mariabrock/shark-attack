const students = [
  {
    id: 'student1',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Gabriel',
    lastName: 'Seals',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Jasmine',
    lastName: 'Williams',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
  },
  {
    id: 'student24',
    firstName: 'Callan',
    lastName: 'Morrison',
    isDead: true,
  },
  {
    id: 'student25',
    firstName: 'Greg',
    lastName: 'Korte',
    isDead: false,
  },
  {
    id: 'student26',
    firstName: 'Michael',
    lastName: 'Clark',
    isDead: false,
  },
  {
    id: 'student27',
    firstName: 'Left',
    lastName: 'Shark',
    isDead: false,
  },
  {
    id: 'student28',
    firstName: 'Right',
    lastName: 'Shark',
    isDead: true,
  },
  {
    id: 'student29',
    firstName: 'Baby',
    lastName: 'Shark',
    isDead: false,
  },
  {
    id: 'student30',
    firstName: 'Zoe',
    lastName: 'Ames',
    isDead: true,
  },
];

const getStudents = () => students;

const livingStudent = () => {
  const notDead = []; // empty array
  students.forEach((student) => { // loop
    if (student.isDead === false) {
      notDead.push(student); // push a student who is not dead into the array
    }
  });
  return notDead; // returns an array of students who are not dead
};

const dearlyDeparted = () => {
  const veryDead = [];
  students.forEach((student) => {
    if (student.isDead === true) {
      veryDead.push(student);
    }
  });
  return veryDead;
};

const killAStudent = (studentId) => {
  const deadStudent = students.find((student) => student.id === studentId);
  deadStudent.isDead = true;
};

// const followTheLight = () => {};

export default {
  getStudents,
  livingStudent,
  dearlyDeparted,
  killAStudent,
};
