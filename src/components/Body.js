/* src/components/Body.js */

import React, {Component} from "react";
import "../styles/Body.css"
import drivers from "./Drivers";
import GroupCard from "./GroupCard";
let shuffle = require('shuffle-array');

class Body extends Component {
   state = {
      drivers
   }

   shuffleDriversArr = () => {
      shuffle (this.state.drivers);
      this.setState(drivers);
   }

   render() {
      return (
         <div>
            <p>
               Click on an image to earn points, but don't click on any more than once!
            </p>
            
            <GroupCard drvs={this.state.drivers.slice(0, 5)}   shuffleDriversArr={this.shuffleDriversArr} />
            <GroupCard drvs={this.state.drivers.slice(5, 10)}  shuffleDriversArr={this.shuffleDriversArr} />
            <GroupCard drvs={this.state.drivers.slice(10, 15)} shuffleDriversArr={this.shuffleDriversArr} />
            <GroupCard drvs={this.state.drivers.slice(15, 20)} shuffleDriversArr={this.shuffleDriversArr} />
         </div>
      );
   }
}

export default Body;
