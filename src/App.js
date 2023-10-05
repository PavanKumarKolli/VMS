import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Openpage from "./components/Openpage/Openpaje";
import Signuppage from "./components/Signuppage/Signuppage";
import Newcustomer from "./components/Newcustomer/Newcustomer";
import VisiterTop from "./components/VisitorTop/VisiterTop";
import Reception from "./components/ReceptionLogin/Reception";
import Receptionsignup from "./components/ReceptionSignup/Receptionsignup";
import UpdateuserDetails from "./components/UpdateUserDetails/UpdateUserDetails";
import EditDetails from "./components/EditDetails/EditDetails";
import ResceptionList from "./components/ReceptionList/ReceptionList";
import AddReceptionlist from "./components/AddReceptionlist/AddReceptionlist";
import EditReceptionlist from "./components/EditReceptionlist/EditReceptionlist";

const customer = [
  {
    id: "1",
    name: "Sruthi",
    Image:
      "https://media.istockphoto.com/id/1311107714/photo/satisfied-good-looking-young-african-american-stylish-woman-freelancer-student-or-real-estate.jpg?s=612x612&w=0&k=20&c=aRrpF6MEuYCCLOc4-kJcwYPcaSEeridlrpvWAD0gR2o=",
    Age: "21",
    Gender: "Female",
    Address: "Bhimavaram",
    Email: "Sruthi@gmail.com",
    Phone: "1234567890",
    Purpose: "Job ",
    Tomeet: " Director",
    DateofVisit: "30/09/2023",
  },
  {
    id: "2",
    name: "Ravi",
    Image: "./RAVI.png",
    Age: "21",
    Gender: "Male",
    Address: "Hyderabad",
    Email: "Ravi@gmail.com",
    Phone: "2345678991",
    Purpose: "Personal",
    Tomeet: "Vice Principle",
    DateofVisit: "01/10/2023",
  },
  {
    id: "3",
    name: "Rakesh",
    Image:
      "https://st3.depositphotos.com/1046751/14790/i/450/depositphotos_147907087-stock-photo-concept-take-care-of-your.jpg",
    Age: "21",
    Gender: "Male",
    Address: "Sr nagar",
    Email: "Rakesh@gmail.com",
    Phone: "7894561230",
    Purpose: "Business",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
  {
    id: "4",
    name: "Pavan",
    Image:
      "https://st4.depositphotos.com/4259987/30794/i/450/depositphotos_307945264-stock-photo-attractive-smiling-white-collar-worker.jpg",
    Age: "23",
    Gender: "Male",
    Address: "Tdp",
    Email: "Pavan@gmail.com",
    Phone: "4569871237",
    Purpose: "Job",
    Tomeet: "Hr",
    DateofVisit: "30/12/2023",
  },
  {
    id: "5",
    name: "Akhil",
    Image:
      "https://cdn.create.vista.com/api/media/small/157011698/stock-photo-young-businessman-using-smartphone",
    Age: "28",
    Gender: "Male",
    Address: "Central jail",
    Email: "Akhil@gmail.com",
    Phone: "7854963210",
    Purpose: "Job",
    Tomeet: "Graphical Head",
    DateofVisit: "15/02/2023",
  },
  {
    id: "6",
    name: "Pavani",
    Image:
      "https://media.istockphoto.com/id/1378157947/photo/portrait-of-a-cheerful-woman-working-from-home.jpg?s=612x612&w=0&k=20&c=hz-DRplOHxgAWTudZrD2_oK2875UGScL4BcOvsOW2HM=",
    Age: "26",
    Gender: "Male",
    Address: "Banglore",
    Email: "Pavani@gmail.com",
    Phone: "1234567890",
    Purpose: "Job ",
    Tomeet: " Director",
    DateofVisit: "30/09/2023",
  },
  {
    id: "7",
    name: "Rajeswari",
    Image:
      "https://media.istockphoto.com/id/1311977351/photo/focused-on-success-and-growth.jpg?s=612x612&w=0&k=20&c=ZC4825QyArXmHB_quCjr184x1xm_mEDKGq3-52KVh7w=",
    Age: "30",
    Gender: "Female",
    Address: "Hyderabad",
    Email: "Rajeswari@gmail.com",
    Phone: "2345678991",
    Purpose: "Personal",
    Tomeet: "Vice Principle",
    DateofVisit: "01/10/2023",
  },
  {
    id: "8",
    name: "Rakesh",
    Image:
      "https://img.freepik.com/free-photo/elegant-smiling-man-typing-computer_23-2147580170.jpg",
    Age: "35",
    Gender: "Male",
    Address: "Sr nagar",
    Email: "Rakesh@gmail.com",
    Phone: "7894561230",
    Purpose: "Business",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
  {
    id: "9",
    name: "Vani",
    Image:
      "https://media.istockphoto.com/id/1170514756/photo/yes-rock-and-roll-portrait-of-amazed-beautiful-stylish-young-woman-in-glasses-sitting-looking.jpg?s=612x612&w=0&k=20&c=7jllc4kaczglz5CPWR1076duTCET_uk1CaPEkNHKMFA=",
    Age: "23",
    Gender: "Female",
    Address: "Tdp",
    Email: "Vani@gmail.com",
    Phone: "4569871237",
    Purpose: "Job",
    Tomeet: "Hr",
    DateofVisit: "30/12/2023",
  },
  {
    id: "10",
    name: "Raja",
    Image:
      "https://img.freepik.com/free-photo/busy-male-enterpreneur-work-with-papers-documents-office-holds-pen_273609-8197.jpg?w=2000",
    Age: "26",
    Gender: "Male",
    Address: "Central jail",
    Email: "Raja@gmail.com",
    Phone: "7854963210",
    Purpose: "Job",
    Tomeet: "Graphical Head",
    DateofVisit: "15/02/2023",
  },
  {
    id: "11",
    name: "Sai",
    Image:
      "https://media.istockphoto.com/id/1073415944/photo/serious-and-pensive-man-sitting-at-the-workplace-in-office.jpg?s=612x612&w=0&k=20&c=2hVTD0-N81tX_B-pE72dNRhjN3WLTOlV1AE-lS30tPY=",
    Age: "45",
    Gender: "Male",
    Address: "Bhimavaram",
    Email: "Sai@gmail.com",
    Phone: "1234567890",
    Purpose: "Job ",
    Tomeet: " Director",
    DateofVisit: "30/09/2023",
  },
  {
    id: "12",
    name: "Divya",
    Image:
      "https://media.istockphoto.com/id/1150018740/photo/every-call-is-top-quality.jpg?s=612x612&w=0&k=20&c=3SZGgiYh_TR0ZUt1sg5Qv-wlK6UZj-C1ymB7rTTGiVk=",
    Age: "21",
    Gender: "Female",
    Address: "Hyderabad",
    Email: "Divya@gmail.com",
    Phone: "2345678991",
    Purpose: "Personal",
    Tomeet: "Vice Principle",
    DateofVisit: "01/10/2023",
  },
  {
    id: "13",
    name: "Chandana",
    Image: "https://thumbs.dreamstime.com/b/woman-work-23076801.jpg",
    Age: "25",
    Gender: "Female",
    Address: "Sr nagar",
    Email: "Chandana@gmail.com",
    Phone: "7894561230",
    Purpose: "Business",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
  {
    id: "14",
    name: "Mouni",
    Image:
      "https://media.istockphoto.com/id/1434694491/photo/ethnic-small-business-owner-having-a-video-call-in-a-warehouse.webp?b=1&s=170667a&w=0&k=20&c=3zAT4aGOxPP3djaYbKHHG00719MUi8PUUYqzE8vlYnw=",
    Age: "28",
    Gender: "Female",
    Address: "Tdp",
    Email: "Mouni@gmail.com",
    Phone: "4569871237",
    Purpose: "Job",
    Tomeet: "Hr",
    DateofVisit: "30/12/2023",
  },
  {
    id: "15",
    name: "Ashi",
    Image:
      "https://media.istockphoto.com/id/1348209421/photo/smiling-business-woman-working-with-laptop-while-looking-at-camera-in-modern-startup-office.jpg?s=612x612&w=0&k=20&c=-YOjhdxdWLjflmpzPyUjtYL80zhbJYqSANk6hhDPXL0=",
    Age: "23",
    Gender: "Female",
    Address: "Central jail",
    Email: "Ashi@gmail.com",
    Phone: "7854963210",
    Purpose: "Job",
    Tomeet: "Technical Head",
    DateofVisit: "15/02/2023",
  },
  {
    id: "16",
    name: "Prasad",
    Image:
      "https://media.istockphoto.com/id/1032561720/photo/smiling-african-american-businessman-with-crossed-arms-in-office.webp?b=1&s=170667a&w=0&k=20&c=gskDp2yGhrItXjBMSJHF5Ph84ljyc1qX80ez5YAIhbM=",
    Age: "21",
    Gender: "Male",
    Address: "Bhimavaram",
    Email: "Prasad@gmail.com",
    Phone: "1234567890",
    Purpose: "Job ",
    Tomeet: " Director",
    DateofVisit: "30/09/2023",
  },
  {
    id: "17",
    name: "Srikanth",
    Image:
      "https://media.istockphoto.com/id/1358280405/photo/confident-businessman-in-his-office.jpg?s=170667a&w=0&k=20&c=Ko8gWDFcJbw0ZZ2KgDyMZC9O7Pu6TKhrLRRtQEFF-PE=",
    Age: "21",
    Gender: "Male",
    Address: "Hyderabad",
    Email: "Srikanth@gmail.com",
    Phone: "2345678991",
    Purpose: "Personal",
    Tomeet: "Vice Principle",
    DateofVisit: "01/10/2023",
  },
  {
    id: "18",
    name: "Lakshmi",
    Image:
      "https://media.istockphoto.com/id/1028691008/photo/her-business-is-thriving-with-the-help-of-technology.jpg?s=612x612&w=0&k=20&c=b8RH9SNoOwedNI7QJeMXWE9KdstL2zHZ-i4sLNZxHSs=",

    Age: "26",
    Gender: "Female",
    Address: "Sr nagar",
    Email: "Lakshmi@gmail.com",
    Phone: "7894561230",
    Purpose: "Business",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
  {
    id: "19",
    name: "Nani",
    Image:
      "https://media.istockphoto.com/id/1152603283/photo/happy-mature-black-man-using-laptop.jpg?s=612x612&w=0&k=20&c=cC3vuS10Sn0h8mwESMgZOf_jx2J6dWIskLC8K7p8j3Y=",
    Age: "31",
    Gender: "Male",
    Address: "Tdp",
    Email: "Nani@gmail.com",
    Phone: "4569871237",
    Purpose: "Job",
    Tomeet: "Hr",
    DateofVisit: "30/12/2023",
  },
  {
    id: "20",
    name: "Radhika",
    Image:
      "https://manastars.com/wp-content/uploads/2022/02/neha-shetty-3-1.jpg",
    Age: "28",
    Gender: "Female",
    Address: "Central jail",
    Email: "Radhika@gmail.com",
    Phone: "7854963210",
    Purpose: "Job",
    Tomeet: "political purpose",
    DateofVisit: "15/02/2023",
  },
];

const Business = [
  {
    id: "21",
    name: "Radhika",
    Image:
      "https://manastars.com/wp-content/uploads/2022/02/neha-shetty-3-1.jpg",
    Age: "28",
    Gender: "Female",
    Address: "Central jail",
    Email: "Radhika@gmail.com",
    Phone: "7854963210",
    Purpose: "Business",
    Tomeet: "Business",
    DateofVisit: "15/02/2023",
  },
  {
    id: "22",
    name: "Lakshmi",
    Image:
      "https://media.istockphoto.com/id/1028691008/photo/her-business-is-thriving-with-the-help-of-technology.jpg?s=612x612&w=0&k=20&c=b8RH9SNoOwedNI7QJeMXWE9KdstL2zHZ-i4sLNZxHSs=",

    Age: "26",
    Gender: "Female",
    Address: "Sr nagar",
    Email: "Lakshmi@gmail.com",
    Phone: "7894561230",
    Purpose: "Business",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
  {
    id: "23",
    name: "Rajesh",
    Image:
      "https://img.freepik.com/free-photo/elegant-smiling-man-typing-computer_23-2147580170.jpg",
    Age: "35",
    Gender: "Male",
    Address: "Sr nagar",
    Email: "Rakesh@gmail.com",
    Phone: "7894561230",
    Purpose: "Business",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
  {
    id: "24",
    name: "Rakesh",
    Image:
      "https://img.freepik.com/free-photo/elegant-smiling-man-typing-computer_23-2147580170.jpg",
    Age: "35",
    Gender: "Male",
    Address: "Sr nagar",
    Email: "Rakesh@gmail.com",
    Phone: "7894561230",
    Purpose: "Business",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
  {
    id: "25",
    name: "Srinivas",
    Image:
      "https://img.freepik.com/free-photo/elegant-smiling-man-typing-computer_23-2147580170.jpg",
    Age: "35",
    Gender: "Male",
    Address: "Sr nagar",
    Email: "Rakesh@gmail.com",
    Phone: "7894561230",
    Purpose: "Business",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
];
const personal = [
  {
    id: "26",
    name: "Sruthi",
    Image:
      "https://media.istockphoto.com/id/1311107714/photo/satisfied-good-looking-young-african-american-stylish-woman-freelancer-student-or-real-estate.jpg?s=612x612&w=0&k=20&c=aRrpF6MEuYCCLOc4-kJcwYPcaSEeridlrpvWAD0gR2o=",
    Age: "21",
    Gender: "Female",
    Address: "Bhimavaram",
    Email: "Sruthi@gmail.com",
    Phone: "1234567890",
    Purpose: "Personal ",
    Tomeet: " Director",
    DateofVisit: "30/09/2023",
  },
  {
    id: "27",
    name: "Nani",
    Image:
      "https://media.istockphoto.com/id/1152603283/photo/happy-mature-black-man-using-laptop.jpg?s=612x612&w=0&k=20&c=cC3vuS10Sn0h8mwESMgZOf_jx2J6dWIskLC8K7p8j3Y=",
    Age: "31",
    Gender: "Male",
    Address: "Tdp",
    Email: "Nani@gmail.com",
    Phone: "4569871237",
    Purpose: "Personal",
    Tomeet: "Hr",
    DateofVisit: "30/12/2023",
  },
  {
    id: "28",
    name: "Prasad",
    Image:
      "https://media.istockphoto.com/id/1032561720/photo/smiling-african-american-businessman-with-crossed-arms-in-office.webp?b=1&s=170667a&w=0&k=20&c=gskDp2yGhrItXjBMSJHF5Ph84ljyc1qX80ez5YAIhbM=",
    Age: "21",
    Gender: "Male",
    Address: "Bhimavaram",
    Email: "Prasad@gmail.com",
    Phone: "1234567890",
    Purpose: "Personal ",
    Tomeet: " Director",
    DateofVisit: "30/09/2023",
  },
  {
    id: "29",
    name: "Mouni",
    Image:
      "https://media.istockphoto.com/id/1434694491/photo/ethnic-small-business-owner-having-a-video-call-in-a-warehouse.webp?b=1&s=170667a&w=0&k=20&c=3zAT4aGOxPP3djaYbKHHG00719MUi8PUUYqzE8vlYnw=",
    Age: "28",
    Gender: "Female",
    Address: "Tdp",
    Email: "Mouni@gmail.com",
    Phone: "4569871237",
    Purpose: "Personal",
    Tomeet: "Hr",
    DateofVisit: "30/12/2023",
  },
  {
    id: "30",
    name: "Ashi",
    Image:
      "https://media.istockphoto.com/id/1348209421/photo/smiling-business-woman-working-with-laptop-while-looking-at-camera-in-modern-startup-office.jpg?s=612x612&w=0&k=20&c=-YOjhdxdWLjflmpzPyUjtYL80zhbJYqSANk6hhDPXL0=",
    Age: "23",
    Gender: "Female",
    Address: "Central jail",
    Email: "Ashi@gmail.com",
    Phone: "7854963210",
    Purpose: "Personal",
    Tomeet: "Technical Head",
    DateofVisit: "15/02/2023",
  },
  {
    id: "31",
    name: "Vani",
    Image:
      "https://media.istockphoto.com/id/1170514756/photo/yes-rock-and-roll-portrait-of-amazed-beautiful-stylish-young-woman-in-glasses-sitting-looking.jpg?s=612x612&w=0&k=20&c=7jllc4kaczglz5CPWR1076duTCET_uk1CaPEkNHKMFA=",
    Age: "23",
    Gender: "Female",
    Address: "Tdp",
    Email: "Vani@gmail.com",
    Phone: "4569871237",
    Purpose: "Personal",
    Tomeet: "Hr",
    DateofVisit: "30/12/2023",
  },
  {
    id: "32",
    name: "Raja",
    Image:
      "https://img.freepik.com/free-photo/busy-male-enterpreneur-work-with-papers-documents-office-holds-pen_273609-8197.jpg?w=2000",
    Age: "26",
    Gender: "Male",
    Address: "Central jail",
    Email: "Raja@gmail.com",
    Phone: "7854963210",
    Purpose: "Personal",
    Tomeet: "Graphical Head",
    DateofVisit: "15/02/2023",
  },
  {
    id: "33",
    name: "Sai",
    Image:
      "https://media.istockphoto.com/id/1073415944/photo/serious-and-pensive-man-sitting-at-the-workplace-in-office.jpg?s=612x612&w=0&k=20&c=2hVTD0-N81tX_B-pE72dNRhjN3WLTOlV1AE-lS30tPY=",
    Age: "45",
    Gender: "Male",
    Address: "Bhimavaram",
    Email: "Sai@gmail.com",
    Phone: "1234567890",
    Purpose: "Personal ",
    Tomeet: " Director",
    DateofVisit: "30/09/2023",
  },
];
const job = [
  {
    id: "34",
    name: "Ravi",
    Image: "./RAVI.png",
    Age: "21",
    Gender: "Male",
    Address: "Hyderabad",
    Email: "Ravi@gmail.com",
    Phone: "2345678991",
    Purpose: "Job",
    Tomeet: "Vice Principle",
    DateofVisit: "01/10/2023",
  },
  {
    id: "35",
    name: "Rakesh",
    Image:
      "https://st3.depositphotos.com/1046751/14790/i/450/depositphotos_147907087-stock-photo-concept-take-care-of-your.jpg",
    Age: "21",
    Gender: "Male",
    Address: "Sr nagar",
    Email: "Rakesh@gmail.com",
    Phone: "7894561230",
    Purpose: "Job",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
  {
    id: "36",
    name: "Pavan",
    Image:
      "https://st4.depositphotos.com/4259987/30794/i/450/depositphotos_307945264-stock-photo-attractive-smiling-white-collar-worker.jpg",
    Age: "23",
    Gender: "Male",
    Address: "Tdp",
    Email: "Pavan@gmail.com",
    Phone: "4569871237",
    Purpose: "Job",
    Tomeet: "Hr",
    DateofVisit: "30/12/2023",
  },
  {
    id: "37",
    name: "Akhil",
    Image:
      "https://cdn.create.vista.com/api/media/small/157011698/stock-photo-young-businessman-using-smartphone",
    Age: "28",
    Gender: "Male",
    Address: "Central jail",
    Email: "Akhil@gmail.com",
    Phone: "7854963210",
    Purpose: "Job",
    Tomeet: "Graphical Head",
    DateofVisit: "15/02/2023",
  },
  {
    id: "35",
    name: "Pavani",
    Image:
      "https://media.istockphoto.com/id/1378157947/photo/portrait-of-a-cheerful-woman-working-from-home.jpg?s=612x612&w=0&k=20&c=hz-DRplOHxgAWTudZrD2_oK2875UGScL4BcOvsOW2HM=",
    Age: "26",
    Gender: "Male",
    Address: "Banglore",
    Email: "Pavani@gmail.com",
    Phone: "1234567890",
    Purpose: "Job ",
    Tomeet: " Director",
    DateofVisit: "30/09/2023",
  },
  {
    id: "39",
    name: "Rajeswari",
    Image:
      "https://media.istockphoto.com/id/1311977351/photo/focused-on-success-and-growth.jpg?s=612x612&w=0&k=20&c=ZC4825QyArXmHB_quCjr184x1xm_mEDKGq3-52KVh7w=",
    Age: "30",
    Gender: "Female",
    Address: "Hyderabad",
    Email: "Rajeswari@gmail.com",
    Phone: "2345678991",
    Purpose: "Job",
    Tomeet: "Vice Principle",
    DateofVisit: "01/10/2023",
  },
  {
    id: "40",
    name: "Rakesh",
    Image:
      "https://img.freepik.com/free-photo/elegant-smiling-man-typing-computer_23-2147580170.jpg",
    Age: "35",
    Gender: "Male",
    Address: "Sr nagar",
    Email: "Rakesh@gmail.com",
    Phone: "7894561230",
    Purpose: "Job",
    Tomeet: "Software Head",
    DateofVisit: "12/02/2024",
  },
  {
    id: "41",
    name: "Vani",
    Image:
      "https://media.istockphoto.com/id/1170514756/photo/yes-rock-and-roll-portrait-of-amazed-beautiful-stylish-young-woman-in-glasses-sitting-looking.jpg?s=612x612&w=0&k=20&c=7jllc4kaczglz5CPWR1076duTCET_uk1CaPEkNHKMFA=",
    Age: "23",
    Gender: "Female",
    Address: "Tdp",
    Email: "Vani@gmail.com",
    Phone: "4569871237",
    Purpose: "Job",
    Tomeet: "Hr",
    DateofVisit: "30/12/2023",
  },
];
const reception = [
  {
    id: "1",
    name: "Sruthi",
    Phone: "1234567890",
    Gender: "Female",
    Username: "xxx@hdhs",
    Userroles: "Receptionist",
  },
];

function App() {
  return (
    <div className="App">
      <Routers>
        <div className="main">
          <Routes>
            {/* <Footer /> */}
            <Route
              path="/"
              element={
                <>
                  <Login />
                  {/* <Footer /> */}
                  {/* <VistorDetails /> */}
                  {/* <Reception />
                  <Receptionsignup /> */}
                  {/* <UpdateuserDetails /> */}
                  {/* <Headerform /> */}
                </>
              }
            />
            <Route path="/home" element={<Openpage />} />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/login" element={<Newcustomer />} />
            <Route path="/Receptionsignin" element={<Reception />} />
            <Route path="receptionsignup" element={<Receptionsignup />} />
            <Route path="/Addvisitor" element={<UpdateuserDetails />} />
            <Route path="/Editdetails" element={<EditDetails />} />
            <Route
              path="/viewreceptionlist"
              element={<ResceptionList reception={reception} />}
            />
            <Route path="/Editreceptionlist" element={<EditReceptionlist />} />
            <Route path="/Addreceptionlist" element={<AddReceptionlist />} />

            <Route
              path="/visitorlist"
              element={
                <VisiterTop
                  customer={customer}
                  Business={Business}
                  personal={personal}
                  job={job}
                />
              }
            />
          </Routes>
        </div>
      </Routers>
    </div>
  );
}

export default App;
