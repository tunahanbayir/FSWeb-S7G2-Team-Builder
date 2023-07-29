import { useState } from 'react';

function Form ({addTeamMember}) {
    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        rol: ""
    });


    function handleChange (event) {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    }

    return <form onSubmit={(e) => {
        e.preventDefault();
        addTeamMember(teamMember)}} >
        <label>
            Name:
        <input name="name" type="text" onChange={handleChange}/>
        </label>
        <br />
        <label>
            Email:
        <input name="email" type="text" onChange={handleChange} />
        </label>
        <br />
        <label>
            Rol:
        <input name="rol" type="text" onChange={handleChange}/>
        </label>
        <br />
        <button type="submit">Kaydet</button>
    </form>;
}



export default Form;