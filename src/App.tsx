import React, { useState } from 'react';
import { Types } from "./reducers/BioReducer";
import { useLogin } from "./context/LoginContext";
import { useBio } from "./context/BioContext";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const { state, dispatch } = useBio();
  const [bioValues, setBioValues] = useState(state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setBioValues({ ...bioValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({
      type: Types.ADD_PERSONAL_QUESTIONS,
      payload: { ...bioValues },
    });

    dispatch({
      type: Types.IS_SUBMITTED,
      payload: { isSubmitted: true },
    });
  }

  return (
    <div>
      <p>{isLoggedIn ? "Hello Cláudio" : "Please Login"}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>

      {isLoggedIn && (
        <div>
          <ul>
            <li>First Name: {state.firstName}</li>
            <li>Last Name: {state.lastName}</li>
            <li>From Portugal: {state.isFromPortugal ? "Yes" : "No"}</li>
            <li>Favorite Colors: {state.favoriteColors.join(", ")}</li>
            <li>Submitted: {state.isSubmitted ? "Yes" : "No"}</li>
          </ul>

          <form onSubmit={(event) => handleSubmit(event)}>
            <fieldset>
              <legend>Fill with your bio.</legend>
              
              <label htmlFor="firstName">
                First Name:
              </label>
              <input type="text" name="firstName" id="firstName" value={bioValues.firstName} onChange={handleChange} />
              
              <label htmlFor="lastName">
                Last Name:
              </label>
              <input type="text" name="lastName" id="lastName" value={bioValues.lastName} onChange={handleChange} />

              <label>
                <input
                  type="checkbox"
                  name="isFromPortugal"
                  checked={bioValues.isFromPortugal}
                  onChange={handleChange}
                />
                Are you from Portugal?
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
