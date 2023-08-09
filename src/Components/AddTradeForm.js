import { useState } from 'react';
import "./AddUserForm.css"
function TradeForm() {
    const [name, setName] = useState("");
    const [action, setAction] = useState("Buy");
    const handleChange = (event) => {
        setAction(event.target.value)
    };
    const [securityStatus, setStatus] = useState("Not Matured");
    const handleStatus = (event) => {
        setStatus(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form className="addUser" onSubmit={handleSubmit}>
            <label>Book Id:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Counterparty Id:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Security Id:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Trade Date:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Settlement Date:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <select value={action} onChange={handleChange}>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
            </select>
            <select value={securityStatus} onChange={handleChange}>
                <option value="Settled">Settled</option>
                <option value="Unsettled">Unsettled</option>
                <option value="Not Matured">Not Matured</option>
            </select>
            <input type="submit" />
        </form>
    )
}

export default TradeForm