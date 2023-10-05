import "./VistorDetails.css";

const VistorDetails = () => {
  return (
    <div className="vistior-details-collediv">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "500px",
          height: "auto",
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "12px",
        }}
      >
        <div>
          <img
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            src="./RAVI.png"
            alt=""
          />
        </div>
        <div className="visitor-gri9d-details">
          <div className="visitor-gri9d-column">
            <span>VisitorId:</span>
            <span>Name:</span>
            <span>Gender:</span>
            <span>Email:</span>
            <span>Contact:</span>
            <span>Purpose:</span>
            <span>In Time:</span>
            <span>Out Time:</span>
            <span>Status:</span>
          </div>
          <div className="visitor-gri9d-column1">
            <span>607421</span>
            <span>M.Ravi Sekhar</span>
            <span>Male</span>
            <span>ravisekhar@gmail.com</span>
            <span>9632587410</span>
            <span>To visit Software Head</span>
            <span>12.42.12 Am</span>
            <span>12.42.12 Am</span>
            <span>Verified</span>
          </div>
        </div>
        <div className="vistor-detailsscanner-container">
          <img
            style={{ width: "150px", height: "150px" }}
            src="https://pngimg.com/d/qr_code_PNG5.png"
            alt=" "
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <button className="vistor-print-details">Print</button>
        </div>
      </div>
    </div>
  );
};

export default VistorDetails;
