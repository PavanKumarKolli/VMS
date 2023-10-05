import "./EditDetails.css";

import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { GoPerson, GoPeople } from "react-icons/go";
import { PiPhoneCallBold } from "react-icons/pi";
import { GiDetour } from "react-icons/gi";

const EditDetails = () => {
  return (
    <div>
      <div className="Edituserdetails-mainform-div">
        <form className="Edituserdetails-form-controller">
          <h2>Edit Visitor Details</h2>
          <div className="Edituserdetails-labels-container">
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
              <label> Reason For Visit:</label>
              <select>
                <option>Job</option>
                <option>Business</option>
                <option>Personal</option>
                {/* <input type="text" placeholder="Address" /> */}
                <GiDetour />
              </select>
            </div>
            <div>
              <label> Date Of Visit:</label>
              <span>
                {" "}
                <input
                  style={{ width: "100%" }}
                  type="datetime-local"
                  placeholder="Enter Date"
                />
              </span>
            </div>
            <div>
              <label> To meet:</label>
              <span>
                {" "}
                <input type="text" placeholder="To meet" />
                <GoPeople />
              </span>
            </div>

            <div>
              <label> Status:</label>
              <select>
                <option>Completed</option>
                <option>Incomplete</option>
                <option>Excepted</option>
                {/* <input type="text" placeholder="Address" /> */}
                <GiDetour />
              </select>
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
                Submit
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
export default EditDetails;
