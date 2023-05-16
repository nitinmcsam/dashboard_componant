import "./App.css";
import "./index.css";
import StatsCard from "./miniComponant/StatsCard";
import DetailsCard from "./miniComponant/DetailsCard";
import { BsHouseFill } from "react-icons/bs";
import { DiApple } from "react-icons/di";
import TableCompnant from "./miniComponant/TableCompnant";
import userData from "./miniComponant/userData.js";
import BackImageCard from "./miniComponant/backImageCard";
import PicChart from "./miniComponant/PicChart";
import Graph from "./miniComponant/Graph.js";
function App() {
  console.log(userData, "data");
  return (
    <div className="App">
      <div className="flex flex-wrap flex-col sm:flex-row">
        {/* <StatsCard
          mainIcon={<BsHouseFill />}
          iconBg={"#ef4444"}
          category={"Website Visits"}
          CategoryValue={"184"}
          footerIcon={<DiApple />}
          footerText={"Get More Space..."}
        /> */}
      </div>
      <div className="flex items-center justify-center max-sm:m-[10px] m-[2rem]   flex-wrap">
        {/* <DetailsCard /> */}
        {/* <TableCompnant
        tableHeader={["Author","Status",	"Technology",	"Employed"]}
        userDetils={userData}
        /> */}

        {/* <BackImageCard bgimage={'image/2bg.jpg'}/> */}

        <Graph />
      </div>
    </div>
  );
}

export default App;
