import { useState } from "react";
import Footer from "../Footer/Footer";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
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
            <h1 id="heading" style={{ width: "600px", fontSize: "50px" }}>
              Make your workplace Safe &Secure
            </h1>
            <p>
              The safety of your employees and the enivornment in which they
              operate is paramount.The future of modern offices will be
              check-ins.
            </p>
            {isShowMore && (
              <p>
                Employees and guests can check in safely with the Visitor
                Management System,Lowering the risk of infection
              </p>
            )}

            <button
              className="loginvisitor-read-more-less"
              onClick={toggleReadMoreLess}
            >
              {isShowMore ? "Read Less..." : "Read More...  "}
            </button>
          </div>
          <div
            style={{
              width: "500px",
              height: "350px",
            }}
          >
            <img
              style={{
                width: "100%",
                backgroundImage: "cover",
                borderRadius: "15px 50px",
                backgroundSize: "cover",
              }}
              src="https://trotons.com/wp-content/uploads/2020/12/Visitor-Management-Software.png"
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
