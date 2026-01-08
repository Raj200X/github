import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setAge, setEmail, setPass } from "../Global/slice1";

function Form() {
    const { name, age, email, pass } = useSelector((state) => state.slice1);
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(false);

    function validate() {
        const err = {};
        if (!name) err.name = "Name not given";
        if (!age || age < 0) err.age = "Enter valid age";
        if (!email.includes("@")) err.email = "Enter valid email";
        if (pass.length < 8) err.pass = "Password must be at least 8 characters";
        return err;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const err = validate();

        if (Object.keys(err).length > 0) {
            setErrors(err);
            setMessage(false);
            return;
        }

        setErrors({});
        setMessage(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => dispatch(setName(e.target.value))}
                />
                {errors.name && <h2>{errors.name}</h2>}

                <input
                    type="number"
                    placeholder="Enter Age"
                    value={age}
                    onChange={(e) => dispatch(setAge(e.target.value))}
                />
                {errors.age && <h2>{errors.age}</h2>}

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                />
                {errors.email && <h2>{errors.email}</h2>}

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={pass}
                    onChange={(e) => dispatch(setPass(e.target.value))}
                />
                {errors.pass && <h2>{errors.pass}</h2>}

                <button type="submit">Submit</button>
            </form>

            {message && <h1>Form Submitted</h1>}
        </>
    );
}

export default Form;
