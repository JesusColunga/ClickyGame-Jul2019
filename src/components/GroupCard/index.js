/* src/components/GroupCard/index.js */

import React from "react";
//import "../style.css"
import DriverCard from "../DriverCard";

function GroupCard(props) {
   return (
      <div>
         {/* <DriverCard driv={props.drvs[0]} /> */}


         <div className="card-group">                       {/* row  */}
         
            {props.drvs.map( driver => 
               <DriverCard driv={driver} />
            )}

         </div>
      </div>
   );
}

export default GroupCard;

/*
function GroupCard(props) {
   return (
      <div>
         <DriverCard driv={props.drvs[0]} />


         <div className="card-group">                       {/* row  * /}
         
         {props.drvs.map( driver => 
            <div className="card" key={driver}>
               <button>
                  <img src={"./images/" + driver} className="card-img-top" alt={driver}></img>
               </button>    
            </div>
         )}

      </div>
   </div>
);
}

*/