import "./RegisterLogin.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function RegisterLogin() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //for show password
  const [showPassword, setShowPassword] = useState(false);
  //  this field is required
  // please enter a valid email
  //messages
  const [erros, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [valid, setValid] = useState({
    email: true,
    password: true,
  });

  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
    username: "",
    confirmpass: "",
  });
  //for show password
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  //  this field is required
  // please enter a valid email
  //messages
  const [errosRegister, setErrorsRegister] = useState({
    emailError: "",
    passwordError: "",
    usernameError: "",
    confirmpassError: "",
  });

  const [validRegister, setValidRegister] = useState({
    email: true,
    password: true,
    usernameError: true,
    confirmpassError: true,
  });

  const chageUserData = (e) => {
    if (e.target.name === "email" || e.target.name === "username") {
      const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z]+$/;
      const nameRegex = /^[a-zA-Z0-9_]{2,}$/;
      setValid({
        ...valid,
        email:
          emailRegex.test(e.target.value) || nameRegex.test(e.target.value),
      });

      setUserData({
        ...userData,
        email: e.target.value,
      });
      setErrors({
        ...erros,
        emailError:
          e.target.value.length == 0
            ? "This Field Is Required"
            : !valid.email && "please enter a valid email or username",
      });
    } else if (e.target.name === "password") {
      const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/; ///[\D]*.{8,}/;
      setShowPassword((prev) => !prev);
      setValid({
        ...valid,
        password: passRegex.test(e.target.value),
      });
      setUserData({
        ...userData,
        password: e.target.value,
      });
      setErrors({
        ...erros,
        passwordError:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !valid.password &&
              "please enter at least 8 characters containes special characters",
      });
    }
  };
  const submitData = (e) => {
    e.preventDefault();

    if ((!erros.emailError && !erros.usernameError) || !erros.passwordError) {
      e.preventDefault();
    }
  };

  const chageUserRegister = (e) => {
    if (e.target.name === "email") {
      const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z]+$/;
      setValidRegister({
        ...validRegister,
        email: emailRegex.test(e.target.value),
      });

      setUserRegister({
        ...userRegister,
        email: e.target.value,
      });
      setErrorsRegister({
        ...errosRegister,
        emailError:
          e.target.value.length == 0
            ? "This Field Is Required"
            : !validRegister.email && "please enter a valid email",
      });
    } else if (e.target.name === "password") {
      const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/; ///[\D]*.{8,}/;
      setShowPasswordRegister((prev) => !prev);
      setValidRegister({
        ...validRegister,
        password: passRegex.test(e.target.value),
      });
      setUserRegister({
        ...userRegister,
        password: e.target.value,
      });
      setErrorsRegister({
        ...errosRegister,
        passwordError:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !validRegister.password &&
              "please enter at least 8 characters containes special characters",
      });
    } else if (e.target.name == "username") {
      const nameRegex = /^[a-zA-Z0-9_]{2,}$/;
      setUserRegister({
        ...userRegister,
        username: e.target.value,
      });
      setValidRegister({
        ...validRegister,
        username: nameRegex.test(e.target.value),
      });
      setErrors({
        ...errosRegister,
        usernameError:
          e.target.value.length == 0
            ? "This Field Is Required"
            : e.target.value.length < 3
            ? "Enter at least three characters"
            : !validRegister.username && "please enter a valid name",
      });
    } else {
      setUserRegister({
        ...userRegister,
        confirmpass: e.target.value,
      });

      setErrorsRegister({
        ...errosRegister,
        confirmpassError:
          e.target.value != userData.password && "Doesn't match password",
      });
    }
  };

  const submitRegister = (e) => {
    e.preventDefault();

    if (
      !errosRegister.emailError ||
      !errosRegister.usernameError ||
      !errosRegister.passwordError ||
      !errosRegister.confirmpassError
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="tabbar col-6">
      <Tabs
        defaultActiveKey="Login"
        id="uncontrolled-tab-example"
        className="mb-3 "
        style={{ color: "red" }}
      >
        <Tab eventKey="Login" title="Login">
          <div
            className=" tab-pane fade show Tab "
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={(e) => submitData(e)}>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4 ">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="loginName"
                >
                  Email or username:
                </label>
                <input
                  type="email"
                  id="loginName"
                  name="email"
                  className="form-control"
                  onChange={(e) => chageUserData(e)}
                />
                <p className="text-danger d-flex justify-content-start">
                  {" "}
                  {erros.emailError}{" "}
                </p>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="loginPassword"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  className="form-control"
                  onChange={(e) => chageUserData(e)}
                />
                <p className="text-danger d-flex justify-content-start">
                  {" "}
                  {erros.emailError}{" "}
                </p>
              </div>

              {/* <!-- 2 column grid layout --> */}
              <div className=" mb-4 d-flex justify-content-between">
                <div className="checkBox">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      checked
                      //   onChange={(e) => chageUserData(e)}
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="forgot">
                  {/* <!-- Simple link --> */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="mb-4 d-flex justify-content-center col-12 submit_button"
              >
                <i className="fa fa-sign-in me-2"></i> Sign in
              </button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  Not a member? <a href="#!">Register</a>
                </p>
              </div>
            </form>
          </div>
        </Tab>
        <Tab eventKey="Register" title="Register">
          <div
            className="tab-pane fade show active"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form onSubmit={(e) => submitRegister(e)}>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="registerEmail"
                >
                  Email address:
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  name="email"
                  className="form-control"
                  onChange={(e) => chageUserRegister(e)}
                />
                <p className="text-danger d-flex justify-content-start">
                  {" "}
                  {errosRegister.emailError}{" "}
                </p>
              </div>

              {/* <!-- Username input --> */}
              <div className="form-outline mb-4">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="registerUsername"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="registerUsername"
                  name="username"
                  className="form-control"
                />
              </div>
              <p className="text-danger d-flex justify-content-start">
                {" "}
                {errosRegister.usernameError}{" "}
              </p>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="registerPassword"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  name="password"
                  className="form-control"
                  onChange={(e) => chageUserRegister(e)}
                />
                <p className="text-danger d-flex justify-content-start">
                  {" "}
                  {errosRegister.passwordError}{" "}
                </p>
              </div>

              {/* <!-- Repeat Password input --> */}
              <div className="form-outline mb-4">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="registerRepeatPassword"
                >
                  Confirm password:
                </label>
                <input
                  type="password"
                  id="registerRepeatPassword"
                  name="confirmpassword"
                  className="form-control"
                  onChange={(e) => chageUserRegister(e)}
                />
                <p className="text-danger d-flex justify-content-start">
                  {" "}
                  {errosRegister.confirmpassError}{" "}
                </p>
              </div>

              {/* <!-- Checkbox --> */}
              <div className="checkBox form-check mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                  checked
                  aria-describedby="registerCheckHelpText"
                  //   onChange={(e) => chageUserRegister(e)}
                />
                <label
                  className="form-check-label d-flex justify-content-start"
                  htmlFor="registerCheck"
                >
                  I have read and agree to the terms
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" className=" mb-4 col-12 submit_button">
                <i className="fa fa-sign-in me-2"></i> Sign Up
              </button>
            </form>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default RegisterLogin;
