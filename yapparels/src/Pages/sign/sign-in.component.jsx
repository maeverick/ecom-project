import { React, Component } from "react";
import FormField from "../../Component/form-field/form-field.component";
import "./sign.style.css";
import CustomButton from "../../Component/custom button/custom-button.component";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    this.setState({ email: "", password: "" });
  };
  handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  render() {
    return (
      <div className="sign">
        <form action="" className="form">
          <h1>Sign In</h1>
          <FormField
            placeholder={"email"}
            type={"email"}
            name={"email"}
            value={this.state.email}
            handlechange={this.handleChange}
          />
          <FormField
            placeholder={"password"}
            type={"password"}
            name={"password"}
            value={this.state.password}
            handlechange={this.handleChange}
          />
          <CustomButton type={"submit"}>Sign in</CustomButton>
          <CustomButton clickEvent={this.handleGoogleSignIn}>
            Sign in with Google
          </CustomButton>
          <p>
            Don't have an account? <Link to={"/sign-up"}>create one</Link>
          </p>
        </form>
      </div>
    );
  }
}
export default SignIn;
