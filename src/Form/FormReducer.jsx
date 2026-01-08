import { useReducer, useState } from "react";

const initialState = {
    name: "",
    age: "",
    email: "",
    pass: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_AGE":
            return { ...state, age: action.payload };
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "SET_PASS":
            return { ...state, pass: action.payload };
        default:
            return state;
    }
}

function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(false);

    function validate() {
        const err = {};
        if (!state.name) err.name = "Name not given";
        if (!state.age || state.age < 0) err.age = "Enter valid age";
        if (!state.email.includes("@")) err.email = "Enter valid email";
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
                    value={state.name}
                    onChange={(e) =>
                        dispatch({ type: "SET_NAME", payload: e.target.value })
                    }
                />
                {errors.name && <h2>{errors.name}</h2>}

                <input
                    type="number"
                    placeholder="Enter Age"
                    value={state.age}
                    onChange={(e) =>
                        dispatch({ type: "SET_AGE", payload: e.target.value })
                    }
                />
                {errors.age && <h2>{errors.age}</h2>}

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={state.email}
                    onChange={(e) =>
                        dispatch({ type: "SET_EMAIL", payload: e.target.value })
                    }
                />
                {errors.email && <h2>{errors.email}</h2>}

                <button type="submit">Submit</button>
            </form>

            {message && <h1>Form Submitted</h1>}
        </>
    );
}

export default Form;
