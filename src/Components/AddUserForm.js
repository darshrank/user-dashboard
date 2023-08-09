import { useState } from 'react';
import "./AddUserForm.css"
function UserForm() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("User");
    const handleChange = (event) => {
        setRole(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form className="addUser" onSubmit={handleSubmit}>
            <label>User's Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Password:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <select value={role} onChange={handleChange}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
            <input type="submit" />
        </form>
    )
}

export default UserForm