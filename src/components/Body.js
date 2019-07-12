/* src/components/Body.js */

import React from "react";
import "../styles/Body.css"
import Drivers from "./Drivers";
import DriverCard from "./driverCard";
let shuffle = require('shuffle-array');
let Drivers2 = shuffle(Drivers);

function Body() {
   return (
      <div>
         <p>
         Click on an image to earn points, but don't click on any more than once!
         </p>
         <DriverCard drvs={Drivers2.slice(0, 5)} />
         <DriverCard drvs={Drivers2.slice(5, 10)} />
         <DriverCard drvs={Drivers2.slice(10, 15)} />
         <DriverCard drvs={Drivers2.slice(15, 20)} />
      </div>
   );
}

export default Body;
