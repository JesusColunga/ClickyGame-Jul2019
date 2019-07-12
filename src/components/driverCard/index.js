/* src/components/driverCard/index.js */

import React from "react";
//import "../style.css"

function DriverCard(props) {
   return (
      <div>
         <div className="card-group">                       {/* row  */}
         
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

export default DriverCard;
