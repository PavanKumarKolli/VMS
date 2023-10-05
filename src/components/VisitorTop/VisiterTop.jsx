import "./VisiterTop.css";
import { FiUsers } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineDatabase } from "react-icons/ai";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const VisiterTop = ({ customer, Business, personal, job }) => {
  const [tabs, setTabs] = useState(1);

  const setTab = (value) => {
    setTabs(value);
  };

  console.log(tabs);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div>
      <div>
        <div>
          <div className="VisiterTop-container">
            <div>
              <Link to="/">
                <img
                  style={{ width: "150px", marginLeft: "20px" }}
                  src="https://brihaspathi.com/img/logo/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <label>{formattedTime}</label>
            </div>
            <div className="VisiterTop-options-container">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                Home
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Addreceptionlist"
              >
                Add New Visitor{" "}
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/viewreceptionlist"
              >
                {" "}
                View Receptionlist
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                My Profile
              </Link>
              <button>Logout</button>
            </div>
          </div>
        </div>
        <div className="VisiterTop-vistor-menu">
          <div onClick={() => setTab(1)} className="VisiterTop-vistors">
            <FiUsers size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
                textDecoration: "none",
              }}
            >
              <span>Vistors</span>
              <span>Total:9</span>
            </div>
          </div>
          <div onClick={() => setTab(2)} className="VisiterTop-Business">
            <MdOutlineBusinessCenter size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
                textDecoration: "none",
              }}
            >
              <span>Business </span>
              <span>Total:9</span>
            </div>
          </div>
          <div onClick={() => setTab(3)} className="VisiterTop-Personal">
            <BsEmojiSmile size={60} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
                textDecoration: "none",
              }}
            >
              <span>Personal</span>
              <span>Total:9</span>
            </div>
          </div>
          <div onClick={() => setTab(4)} className="VisiterTop-jobsvisit">
            <AiOutlineDatabase size={60} />
            <div
              onClick={() => setTab(4)}
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "24px",
                textDecoration: "none",
              }}
            >
              <span>Job Visit</span>
              <span>Total:9</span>
            </div>
          </div>
        </div>
      </div>
      <div className="visitor-tabdiv-container">
        <div
          style={{ display: tabs === 1 ? "block" : "none" }}
          className="Visitor-Appcontainer"
        >
          <div className="Visitor-classification-header">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {" "}
              <h1>Visitors</h1>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Addvisitor"
              >
                <button className="visitor-addbutton ">
                  <span>
                    <IoMdAdd size={20} style={{ color: "white" }} />
                  </span>{" "}
                  Add Visitor
                </button>
              </Link>
            </div>
            <div
              style={{
                overflowY: "scroll",
                height: "350px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <table className="vistior-table-container">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Purpose</th>
                  <th>To Meet</th>
                  <th>Date Of Visit</th>
                  <th>Action</th>
                </tr>
                {customer.map((i) => (
                  <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>
                      <img
                        style={{
                          width: "70px",
                          borderRadius: "50%",
                          height: "70px",
                          cursor: "pointer",
                        }}
                        src={i.Image}
                        alt=""
                      />
                    </td>
                    <td>{i.Age}</td>
                    <td>{i.Gender}</td>
                    <td>{i.Email}</td>
                    <td>{i.Phone}</td>
                    <td>{i.Purpose}</td>
                    <td>{i.Tomeet}</td>
                    <td>{i.DateofVisit}</td>
                    <th>
                      <span>
                        {" "}
                        <button>
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/Editdetails"
                          >
                            Edit
                          </Link>
                        </button>
                        <button>Delete</button>
                      </span>
                    </th>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: tabs === 2 ? "block" : "none" }}
        className="Visitor-Appcontainer"
      >
        <div className="Visitor-classification-header">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {" "}
            <h1>Visitors</h1>{" "}
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Addvisitor"
            >
              <button className="visitor-addbutton ">
                <span>
                  <IoMdAdd size={20} style={{ color: "white" }} />
                </span>{" "}
                Add Visitor
              </button>
            </Link>
          </div>

          <div
            style={{
              overflowY: "scroll",
              height: "350px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <table className="vistior-table-container">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Purpose</th>
                <th>To Meet</th>
                <th>Date Of Visit</th>
                <th>Action</th>
              </tr>
              {Business.map((i) => (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>
                    <img
                      style={{
                        width: "70px",
                        borderRadius: "50%",
                        height: "70px",
                        cursor: "pointer",
                      }}
                      src={i.Image}
                      alt=""
                    />
                  </td>
                  <td>{i.Age}</td>
                  <td>{i.Gender}</td>
                  <td>{i.Email}</td>
                  <td>{i.Phone}</td>
                  <td>{i.Purpose}</td>
                  <td>{i.Tomeet}</td>
                  <td>{i.DateofVisit}</td>
                  <th>
                    <span>
                      {" "}
                      <button>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/Editdetails"
                        >
                          Edit
                        </Link>
                      </button>
                      <button>Delete</button>
                    </span>
                  </th>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      <div
        style={{ display: tabs === 3 ? "block" : "none" }}
        className="Visitor-Appcontainer"
      >
        <div className="Visitor-classification-header">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {" "}
            <h1>Visitors</h1>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Addvisitor"
            >
              <button className="visitor-addbutton ">
                <span>
                  <IoMdAdd size={20} style={{ color: "white" }} />
                </span>{" "}
                Add Visitor
              </button>
            </Link>
          </div>

          <div
            style={{
              overflowY: "scroll",
              height: "350px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <table className="vistior-table-container">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Purpose</th>
                <th>To Meet</th>
                <th>Date Of Visit</th>
                <th>Action</th>
              </tr>
              {personal.map((i) => (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>
                    <img
                      style={{
                        width: "70px",
                        borderRadius: "50%",
                        height: "70px",
                        cursor: "pointer",
                      }}
                      src={i.Image}
                      alt=""
                    />
                  </td>
                  <td>{i.Age}</td>
                  <td>{i.Gender}</td>
                  <td>{i.Email}</td>
                  <td>{i.Phone}</td>
                  <td>{i.Purpose}</td>
                  <td>{i.Tomeet}</td>
                  <td>{i.DateofVisit}</td>
                  <th>
                    <span>
                      {" "}
                      <button>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/Editdetails"
                        >
                          Edit
                        </Link>
                      </button>
                      <button>Delete</button>
                    </span>
                  </th>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      <div
        style={{ display: tabs === 4 ? "block" : "none" }}
        className="Visitor-Appcontainer"
      >
        <div className="Visitor-classification-header">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {" "}
            <h1>Visitors</h1>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Addvisitor"
            >
              <button className="visitor-addbutton ">
                <span>
                  <IoMdAdd size={20} color="white" />
                </span>{" "}
                Add Visitor
              </button>
            </Link>
          </div>

          <div
            style={{
              overflowY: "scroll",
              height: "350px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <table className="vistior-table-container">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Purpose</th>
                <th>To Meet</th>
                <th>Date Of Visit</th>
                <th>Action</th>
              </tr>
              {job.map((i) => (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>
                    <img
                      style={{
                        width: "70px",
                        borderRadius: "50%",
                        height: "70px",
                        cursor: "pointer",
                      }}
                      src={i.Image}
                      alt=""
                    />
                  </td>
                  <td>{i.Age}</td>
                  <td>{i.Gender}</td>
                  <td>{i.Email}</td>
                  <td>{i.Phone}</td>
                  <td>{i.Purpose}</td>
                  <td>{i.Tomeet}</td>
                  <td>{i.DateofVisit}</td>
                  <th>
                    <span>
                      {" "}
                      <button>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/Editdetails"
                        >
                          Edit
                        </Link>
                      </button>
                      <button>Delete</button>
                    </span>
                  </th>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisiterTop;
