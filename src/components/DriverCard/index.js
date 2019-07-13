/* src/components/DriverCard/index.js */

import React, {Component} from "react";
//import "../style.css"

class DriverCard extends Component {
   constructor (props) {
      super (props);
   }

   render() {
      return (
         <div className="card" key={this.props.driv}>
            <button>
               <img src={"./images/" + this.props.driv} className="card-img-top" alt={this.props.driv}></img>
            </button>    
         </div>
      );
   }
}

export default DriverCard;


/*
function DriverCard(props) {
   return (
      <div>
         <div className="card-group">                     
         
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