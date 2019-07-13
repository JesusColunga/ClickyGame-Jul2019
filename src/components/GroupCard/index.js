/* src/components/GroupCard/index.js */

import React from "react";
import "./style.css"
import DriverCard from "../DriverCard";

function GroupCard(props) {
   return (
      <div>
         <div className="card-group">
            {props.drvs.map( driver => 
               <DriverCard driv={driver} key={driver} shuffleDriversArr={props.shuffleDriversArr} />
            )}
         </div>
      </div>
   );
}

export default GroupCard;
