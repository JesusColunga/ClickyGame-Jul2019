/* src/App.js */

import React, {Component}  from 'react';
import Header from "./components/Header";
import Body   from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
   state = {
      score: 0,
      topScore: 0
   }

   addScore = () => {
      let newState = { ...this.state };
      newState.score = newState.score + 1;
      if (newState.score > newState.topScore) 
         newState.topScore = newState.score;
      this.setState( newState );
   }

   resetScore = () => {
      this.setState ( {score: 0} );
   }

   render() {
      return (
         <div>
            <Header />
            <Body addScore={this.addScore} resetScore={this.resetScore} />
            <Footer score={this.state.score} topScore={this.state.topScore} />
         </div>    
      );
   }
}

export default App;
