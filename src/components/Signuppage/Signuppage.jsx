import "./Signuppage.css";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
const Signuppage = () => {
  return (
    <div>
      <div className="singup-mainform-div">
        <form className="signup-form-controller">
          <h2>SIGN UP</h2>
          <div className="signup-labels-container">
            <div>
              <label>Email Address:</label>
              <span>
                {" "}
                <input type="text" placeholder="Enter Email/User name" />
                <CiMail />
              </span>
            </div>
            <div>
              <label>Password:</label>
              <span>
                {" "}
                <input type="password" placeholder="Enter Password" />
                <AiOutlineLock />
              </span>
            </div>
            <div>
              <label>Name:</label>
              <span>
                {" "}
                <input type="text" placeholder="Enter Name" />
                <GoPerson />
              </span>
            </div>
            <div>
              <label>Phone Number:</label>
              <span>
                {" "}
                <input type="text" placeholder="Enter Phone number" />
                <PiPhoneCallBold />
              </span>
            </div>
            <div>
              <label> Address:</label>
              <span>
                {" "}
                <input type="text" placeholder="Address" />
                <FaRegAddressCard />
              </span>
            </div>
            <div>
              <label> Profile pic:</label>
              <span>
                {" "}
                <input
                  style={{
                    border: "none",
                    outlineStyle: "none",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                  }}
                  type="File"
                />
                <FiImage />
              </span>
            </div>
            <div>
              <button
                style={{
                  marginTop: "12px",
                  height: "35px",
                  backgroundColor: "blue",
                  outlineStyle: "none",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                Sign Up/Register
              </button>
              <p>
                <center>
                  Already have an account?/<Link to="/login"> Login</Link>
                </center>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signuppage;
