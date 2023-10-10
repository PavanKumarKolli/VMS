import "./Newcustomer.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const Newcustomer = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function NewValidate() {
    if (Email.toString() === "") {
      alert("Enter Name");
      return;
    }
    if (password !== 9) {
      alert("Enter Password in correct format");
      return;
      // } else if (password.length < 10 && password.length > 5) {
      //   alert("Enter Password in correct format");
    }
  }

  return (
    <div className="new-main-totaldiv">
      <form className="new-from-controller">
        <h2>
          <center>SIGN IN</center>
        </h2>
        <div className="new-label-container">
          <div>
            <label>Email Address:</label>
            <span>
              <input
                type="text"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdOutlineMailOutline />
            </span>
          </div>
          <div>
            <label>Password:</label>
            <span>
              <input
                type="password"
                placeholder=" Minimum nine diits"
                onClick={(e) => setPassword(e.target.value)}
              />
              <AiOutlineLock />
            </span>
          </div>
        </div>
        <div className="new-checkbox-container">
          <span>
            {" "}
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">Remember me</label>
          </span>
          <span>Forgot Password?</span>
        </div>
        <button
          onClick={() => {
            NewValidate();
          }}
          style={{
            border: "none",
            borderRadius: "3px",
            backgroundColor: "blue",
            color: "white",
            width: "90%",
            height: "30px",
          }}
        >
          Login
        </button>
        <div className="new-donthaveaccount">
          <span>
            <span>Don't have an account?</span>
            <span>
              <Link to="/signup">Sign Up/Register</Link>
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Newcustomer;
