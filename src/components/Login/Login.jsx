import Footer from "../Footer/Footer";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="login-background-div">
        <div className="login-maindiv-container">
          <div>
            <img
              style={{ width: "150px", marginLeft: "20px" }}
              src="https://brihaspathi.com/img/logo/logo.png"
              alt=""
            />
          </div>
          <div className="login-header-container">
            <Link style={{ textDecoration: "none", color: "white" }} to="/home">
              Home
            </Link>
            <span>About Us</span>
            <span>Freatures</span>
            <span>Pricing</span>
            <div>
              <button>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontFamily: "Arial",
                    fontWeight: "600",
                  }}
                  to="login"
                >
                  Log In
                </Link>
              </button>
              <button>
                <select className="visitor-signup-options">
                  <Link style={{ textDecoration: "none" }} to="/signup"></Link>
                  <option>Sign Up </option>
                  <Link
                    style={{
                      textDecoration: "none",
                      fontFamily: "Arial",
                      fontWeight: "600",
                    }}
                    to="/signup"
                  ></Link>
                  <option>Reception</option>{" "}
                </select>
              </button>
            </div>
          </div>
        </div>

        <div className="login-middle-div">
          <div className="login-homeleftside-con">
            <h1 style={{ width: "600px", fontSize: "50px" }}>
              Make your workplace Safe &Secure
            </h1>
            <p>
              The safety of your employees and the enivornment in which they
              operate is paramount.The future of modern offices will be
              check-ins.Employees and guests nbcan check in safely with the
              Visitor Management System,Lowering the risk of infection
            </p>
          </div>
          <div>
            <img
              style={{ width: "500px", borderRadius: "6px" }}
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE2wSVH_RE4dchU:VP1-539x349?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=90&fmt=png-alpha"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

<Footer />;

export default Login;
