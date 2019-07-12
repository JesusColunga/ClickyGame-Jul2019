/* src/components/Body.js */

import React from "react";
import "../styles/Body.css"
import Drivers from "./Drivers";

function Body() {
   return (
      <div>
         <h1>Body</h1>
         <div className="card-group">                       {/* row 1 */}
            <div className="card" key={Drivers[0]}>
               <button>
                  <img src={"./images/" + Drivers[0]} className="card-img-top" alt={Drivers[0]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[1]}>
               <button>
                  <img src={"./images/" + Drivers[1]} className="card-img-top" alt={Drivers[1]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[2]}>
               <button>
                  <img src={"./images/" + Drivers[2]} className="card-img-top" alt={Drivers[2]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[3]}>
               <button>
                  <img src={"./images/" + Drivers[3]} className="card-img-top" alt={Drivers[3]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[4]}>
               <button>
                  <img src={"./images/" + Drivers[4]} className="card-img-top" alt={Drivers[4]}></img>
               </button>    
            </div>
         </div>

         <div className="card-group">                       {/* row 2 */}
            <div className="card" key={Drivers[5]}>
               <button>
                  <img src={"./images/" + Drivers[5]} className="card-img-top" alt={Drivers[5]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[6]}>
               <button>
                  <img src={"./images/" + Drivers[6]} className="card-img-top" alt={Drivers[6]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[7]}>
               <button>
                  <img src={"./images/" + Drivers[7]} className="card-img-top" alt={Drivers[7]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[8]}>
               <button>
                  <img src={"./images/" + Drivers[8]} className="card-img-top" alt={Drivers[8]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[9]}>
               <button>
                  <img src={"./images/" + Drivers[9]} className="card-img-top" alt={Drivers[9]}></img>
               </button>    
            </div>
         </div>

         <div className="card-group">                       {/* row 3 */}
            <div className="card" key={Drivers[10]}>
               <button>
                  <img src={"./images/" + Drivers[10]} className="card-img-top" alt={Drivers[10]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[11]}>
               <button>
                  <img src={"./images/" + Drivers[11]} className="card-img-top" alt={Drivers[11]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[12]}>
               <button>
                  <img src={"./images/" + Drivers[12]} className="card-img-top" alt={Drivers[12]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[3]}>
               <button>
                  <img src={"./images/" + Drivers[13]} className="card-img-top" alt={Drivers[13]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[14]}>
               <button>
                  <img src={"./images/" + Drivers[14]} className="card-img-top" alt={Drivers[14]}></img>
               </button>    
            </div>
         </div>

         <div className="card-group">                       {/* row 4 */}
            <div className="card" key={Drivers[15]}>
               <button>
                  <img src={"./images/" + Drivers[15]} className="card-img-top" alt={Drivers[15]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[16]}>
               <button>
                  <img src={"./images/" + Drivers[16]} className="card-img-top" alt={Drivers[16]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[17]}>
               <button>
                  <img src={"./images/" + Drivers[17]} className="card-img-top" alt={Drivers[17]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[18]}>
               <button>
                  <img src={"./images/" + Drivers[18]} className="card-img-top" alt={Drivers[18]}></img>
               </button>    
            </div>

            <div className="card" key={Drivers[9]}>
               <button>
                  <img src={"./images/" + Drivers[19]} className="card-img-top" alt={Drivers[19]}></img>
               </button>    
            </div>
         </div>

      </div>
   );
}

export default Body;

/*
            <p>
                {Drivers.map(
                    driver => {return(<p> {driver} </p>)}
                )}
            </p>
            ---------------------------------------
            <p>
                {Drivers.map(
                    driver => <p> {driver} </p>
                )}
            </p>
            ---------------------------------------
  import logo from './logo.svg';
            ---------------------------------------
function Body() {
    return (
        <div>
            <h1>Body</h1>
              <div className="card-group">
                {Drivers.map(
                    (driver, index) => 
                        <div className="card" key={driver}>
                          <button>
                            {(index+1) % 4}
                            <img src={"./images/" + driver} className="card-img-top" alt={driver}></img>
                            {index % 4}
                          </button>    
                        </div>
                )}
              </div>
        </div>
    );
}

            ---------------------------------------

*/