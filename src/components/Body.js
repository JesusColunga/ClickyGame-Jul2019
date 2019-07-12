/* src/components/Body.js */

import React from "react";
import "../styles/Body.css"
import Drivers from "./Drivers";
import DriverCard from "./driverCard";

function Body() {
   return (
      <div>
         <h1>Body</h1>
         <DriverCard drvs={Drivers.slice(0, 5)} />
         <DriverCard drvs={Drivers.slice(5, 10)} />
         <DriverCard drvs={Drivers.slice(10, 15)} />
         <DriverCard drvs={Drivers.slice(15, 20)} />
      </div>
   );
}

export default Body;
