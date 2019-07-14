/* src/components/Footer.js */

import React from "react";
import "../styles/Footer.css"

function Footer(props) {
  return (
    <div className="foot">
       <table className="table m-0 p-0">
          <tbody>
             <tr>
               <td className=" m-0 p-0"> Score: {props.score} </td>
               <td className=" m-0 p-0">  </td>
               <td className=" m-0 p-0"> Top Score: {props.topScore} </td>
             </tr>
          </tbody>
       </table>

    </div>
  );
}

export default Footer;
