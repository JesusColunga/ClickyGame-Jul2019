/* src/components/Body.js */

import React, {Component} from "react";
import "../styles/Body.css"
import arrDrivers from "./Drivers";
import GroupCard from "./GroupCard";
let shuffle = require('shuffle-array');

class Body extends Component {
   constructor(props) {
      let arrObjDrivers = arrDrivers.map (
         drv => {
            return {name: drv, selected: false}
         }
      );
      super(props);
      this.state = {
         arrObjDrivers
      };
   }

   shuffleDriversArr = () => {
      shuffle (this.state.arrObjDrivers);
      this.setState(this.state.arrObjDrivers);
   }

   changeDriverState = (driverId) => {
      let reset = false;
      let newArr = 
         this.state.arrObjDrivers.map (
            driver => {
               if (driver.name === driverId) {
                  if (driver.selected) {
                     reset = true;
                  } else {
                     driver.selected = true;
                     this.props.addScore ();
                  }
               }
               return driver;
            }
         );

      if (reset) {
         alert("You clicked the image twice ! ! ! ");
         newArr = 
            this.state.arrObjDrivers.map (
               driver => {
                  driver.selected = false;
                  return driver;
               }
            );
         this.props.resetScore ();
      };

      this.setState (newArr);
      this.shuffleDriversArr ();
   }

   render() {
      return (
         <div className="body">
            <p>
               Click on an image to earn points, but don't click on any more than once!
            </p>
            
            <GroupCard drvs={this.state.arrObjDrivers.slice(0, 5)}   shuffleDriversArr={this.shuffleDriversArr} addScore={this.props.addScore} resetScore={this.props.resetScore} changeDriverState={this.changeDriverState} />
            <GroupCard drvs={this.state.arrObjDrivers.slice(5, 10)}  shuffleDriversArr={this.shuffleDriversArr} addScore={this.props.addScore} resetScore={this.props.resetScore} changeDriverState={this.changeDriverState} />
            <GroupCard drvs={this.state.arrObjDrivers.slice(10, 15)} shuffleDriversArr={this.shuffleDriversArr} addScore={this.props.addScore} resetScore={this.props.resetScore} changeDriverState={this.changeDriverState} />
            <GroupCard drvs={this.state.arrObjDrivers.slice(15, 20)} shuffleDriversArr={this.shuffleDriversArr} addScore={this.props.addScore} resetScore={this.props.resetScore} changeDriverState={this.changeDriverState} />
         </div>
      );
   }
}

export default Body;
