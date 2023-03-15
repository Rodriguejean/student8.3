import './App.css';
import Student from './Student'
import { useState } from 'react';
import studentsData from './Data';

function App() {
  const [stu, setStu] = useState(studentsData);

  return (
    <div className="App">
      <h1>Student Score Sheet</h1>
      <Student stu={stu} />
    </div>
  );
}

export default App;