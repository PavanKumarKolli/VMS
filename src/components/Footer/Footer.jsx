import "./Footer.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div className="footer-main-divcontainer">
        <div className="footer-down-logoi">
          <img
            style={{ width: "200px" }}
            src="https://www.viithiisys.com/images/uploads/logo.png"
            alt=""
          />
        </div>
        <div className="footer-sidelines-container">
          <div className="footer-sidelines-containerdiv">
            <span>USEFULL LINKS</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "#075bed",
              }}
            >
              <AiOutlineArrowRight />
              Home
            </span>
          </div>
          <div className="footer-sidelines-containerdiv">
            <span>OUR SERVICES</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "#075bed",
              }}
            >
              {" "}
              <AiOutlineArrowRight />
              Web Design
            </span>
          </div>
          <div className="footer-sidelines-containerdiv">
            <span>CONTACT US</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "#075bed",
              }}
            >
              <AiOutlineArrowRight />
              A10 Audits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
