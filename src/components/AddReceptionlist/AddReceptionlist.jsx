import "./AddReceptionlist.css";

import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { PiPhoneCallBold } from "react-icons/pi";
import { FiImage } from "react-icons/fi";

const AddReceptionlist = () => {
  return (
    <div>
      <div className="Addrecplist-mainform-div">
        <form className="Addrecplist-form-controller">
          <h2>Add Receptionlist</h2>
          <div className="Addrecplist-labels-container">
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
                Add Receptionlist
              </button>
              <button
                style={{
                  marginTop: "12px",
                  height: "35px",
                  backgroundColor: "grey",
                  outlineStyle: "none",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddReceptionlist;
