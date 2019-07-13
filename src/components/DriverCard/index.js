/* src/components/DriverCard/index.js */

import React, { Component } from "react";
//import "../style.css"

class DriverCard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selected: false
      };
   }

   changeState = () => {
      this.state.selected ?
         this.props.shuffleDriversArr() :
         this.setState({ selected: true });
   };

   render() {
      return (
         <div className="card" key={this.props.driv}>
            {this.state.selected ? "Seleccionado" : "No seleccionado"}
            <button onClick={this.changeState} >
               <img src={"./images/" + this.props.driv} className="card-img-top" alt={this.props.driv}></img>
            </button>
         </div>
      );
   }
}

export default DriverCard;
