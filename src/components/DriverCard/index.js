/* src/components/DriverCard/index.js */

import React, { Component } from "react";

class DriverCard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selected: false
      };
   }

   changeState = () => {
      this.props.changeDriverState (this.props.driv);
   };

   render() {
      return (
         <div className="card" key={this.props.driv}>
            <button onClick={this.changeState} >
               <img src={"./images/" + this.props.driv} className="card-img-top" alt={this.props.driv}></img>
            </button>
         </div>
      );
   }
}

export default DriverCard;
