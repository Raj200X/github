import { useState } from "react";

function FormState() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert("Name is Required");
            return;
        }
        if (pass.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }
        if (!email.includes("@")) {
            alert("Enter valid email");
            return;
        }
        if (age < 18) {
            alert("Age must be greater than 18");
            return;
        }

        setMessage(true);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="number"
                    value={age}
                    placeholder="Enter Age"
                    onChange={(e) => setAge(e.target.value)}
                />

                <input
                    type="text"
                    value={email}
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    value={pass}
                    placeholder="Enter Password"
                    onChange={(e) => setPass(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>

            {message && <h1>Form Submitted Successfully</h1>}
        </>
    );
}

export default FormState;
