import { React, Component } from "react";
import FormField from "../../Component/form-field/form-field.component";
import CustomButton from "../../Component/custom button/custom-button.component";
import { Link } from "react-router-dom";
import "./sign.style.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = "";
  }
  render() {
    return (
      <div className="sign">
        <form action="" className="form">
          <h1>Sign Up</h1>
          <CustomButton type={"invert"}> Continue with Google</CustomButton>
          <h3>OR</h3>
          <FormField placeholder={"email"} name={"email"} type={"email"} />
          <FormField
            placeholder={"password"}
            name={"password"}
            type={"password"}
          />
          <p>* shall include 0-9 a-z A-Z in 4 to 10 characters</p>
          <FormField
            placeholder={"confirm password"}
            name={"password"}
            type={"password"}
          />
          <CustomButton>Sign up</CustomButton>
          <p>Already have an account? Please <Link to={"/sign-in"}>Sign in</Link></p>
        </form>
      </div>
    );
  }
}
export default SignUp;
