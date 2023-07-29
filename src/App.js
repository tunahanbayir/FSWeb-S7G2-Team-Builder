
import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Tunahan",
      email: "tunahan@tunahan.com",
      rol: "fullstack developer"
    },
    {
      id: 2,
      name: "ali",
      email: "ali@ali.com",
      rol: "backend developer"
    }
  ]);

  const addTeamMember = (teamMember) => {
    setTeamMembers([ ...teamMembers, teamMember]);
  };

  useEffect(() => {
    console.log(teamMembers)
  }, [teamMembers])
  return (
    <div className="App">
    <Form addTeamMember={addTeamMember} />

    <ul>
      {teamMembers.map((teamMember, i) => (
        <li key={i}>
         {teamMember.name} - {teamMember.rol}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
