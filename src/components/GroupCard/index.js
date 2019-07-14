/* src/components/GroupCard/index.js */

import React from "react";
import "./style.css"
import DriverCard from "../DriverCard";

function GroupCard(props) {
   return (
      <div>
         <div className="card-group">
            {props.drvs.map( driver => 
               <DriverCard 
                  driv={driver.name} 
                  key={driver.name} 
                  selected={driver.selected}
                  shuffleDriversArr={props.shuffleDriversArr} 
                  addScore={props.addScore} 
                  resetScore={props.resetScore}
                  changeDriverState={props.changeDriverState}
               />
            )}
         </div>
      </div>
   );
}

export default GroupCard;
