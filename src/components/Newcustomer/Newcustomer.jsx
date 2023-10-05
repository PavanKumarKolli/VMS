import "./Newcustomer.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Newcustomer = () => {
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
              <input type="text" placeholder="Email address" />
              <MdOutlineMailOutline />
            </span>
          </div>
          <div>
            <label>Password:</label>
            <span>
              <input type="password" placeholder=" Password" />
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
