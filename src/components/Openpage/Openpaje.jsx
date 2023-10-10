import "./Openpage.css";
import { FiUsers } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineDatabase } from "react-icons/ai";
import { Link } from "react-router-dom";

const Openpage = () => {
  return (
    <div>
      <div>
        <div className="open-header-container">
          <div>
            <Link to="/">
              <img
                style={{ width: "150px", marginLeft: "20px" }}
                src="https://brihaspathi.com/img/logo/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="open-header-options-container">
            <span>Home</span>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/visitorlist"
            >
              Visitor List
            </Link>

            <span>My Profile</span>
            <Link
              to="/viewreceptionlist"
              style={{ textDecoration: "none", color: "white" }}
            >
              View ResceptionList
            </Link>
            <button>Logout</button>
          </div>
        </div>
        <div className="open-vistor-menu">
          <div className="open-vistors">
            <FiUsers size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <span>Vistors</span>
              <span>Total:9</span>
            </div>
          </div>
          <div className="open-Business">
            <MdOutlineBusinessCenter size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <span>Business </span>
              <span>Total:9</span>
            </div>
          </div>
          <div className="open-Personal">
            <BsEmojiSmile size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <span>Personal</span>
              <span>Total:9</span>
            </div>
          </div>
          <div className="open-jobsvisit">
            <AiOutlineDatabase size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <span>Job Visit</span>
              <span>Total:9</span>
            </div>
          </div>
        </div>
        <div>
          <div className="open-total-profilediv">
            <div className="open-admin-container">
              {" "}
              <img
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                src="https://st2.depositphotos.com/6672578/9743/i/450/depositphotos_97431594-stock-photo-businessman-smiling-confidently-at-camera.jpg"
                alt=""
              />
              <h3>ADMIN</h3>
              <span>Hyderabad</span>
            </div>
            <div className="open-profile-container">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span>Name</span>
                <span>Ravi Shekhar</span>
              </div>
              <hr />
              <div>
                <span>Email</span>
                <span>ravishekar@gmail.com</span>
              </div>
              <hr />
              <div>
                <span>Phone</span>
                <span>9658741230</span>
              </div>
              <hr />
              <div>
                <span>Address</span>
                <span> Sr Nagar</span>
              </div>
              <hr />
              <div>
                <span>Location</span>
                <span>Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Openpage;
