import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length >= 8);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !firstNameIsValid &&
      !lastNameIsValid &&
      !enteredEmailIsValid &&
      !enteredPasswordIsValid
    ) {
      return;
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    console.log(enteredPassword);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">
              First name input field must not be empty!
            </p>
          )}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">
              Last name input field must not be empty!
            </p>
          )}
        </div>

        <div className={emailClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email address!</p>
          )}
        </div>

        <div className={passwordClasses}>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="name"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          {passwordHasError && (
            <p className="error-text">Password has to be at least 8 characters long!</p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
