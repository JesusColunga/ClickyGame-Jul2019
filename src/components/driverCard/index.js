/* src/components/driverCard/index.js */

import React from "react";
//import "../style.css"

function DriverCard(props) {
   return (
      <div>
         <div className="card-group">                       {/* row  */}
            <div className="card" key={props.drvs[0]}>
               <button>
                  <img src={"./images/" + props.drvs[0]} className="card-img-top" alt={props.drvs[0]}></img>
               </button>    
            </div>

            <div className="card" key={props.drvs[1]}>
               <button>
                  <img src={"./images/" + props.drvs[1]} className="card-img-top" alt={props.drvs[1]}></img>
               </button>    
            </div>

            <div className="card" key={props.drvs[2]}>
               <button>
                  <img src={"./images/" + props.drvs[2]} className="card-img-top" alt={props.drvs[2]}></img>
               </button>    
            </div>

            <div className="card" key={props.drvs[3]}>
               <button>
                  <img src={"./images/" + props.drvs[3]} className="card-img-top" alt={props.drvs[3]}></img>
               </button>    
            </div>

            <div className="card" key={props.drvs[4]}>
               <button>
                  <img src={"./images/" + props.drvs[4]} className="card-img-top" alt={props.drvs[4]}></img>
               </button>    
            </div>
         </div>
      </div>
   );
}

export default DriverCard;
