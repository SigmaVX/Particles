import React, { Component } from 'react';
import Collision from "./Components/Canvas/Collision/Collision";
import Floating from "./Components/Canvas/Floating/Floating";
import Gravity from "./Components/Canvas/Gravity/Gravity";
import './App.css';

class App extends Component {

  state = {canvas: "collision"}

  render() {
    
    let canvasType = <div>Hi</div>;

    const switchCanvas = (type) => {
      this.setState({canvas: type});
    }

    switch(this.state.canvas){
      case ("gravity"): 
        // console.log("Gravity");
        canvasType = <Gravity/>;
        break; 
      case ("floating"): 
        // console.log("Floating");
        canvasType = <Floating/>;
        break;
      case ("collision"): 
        // console.log("Collision");
        canvasType = <Collision/>;
        break;
    }


    return (
      <div className="App">
          <header>
            <button onClick={()=>switchCanvas("gravity")}>Gravity</button>
            <button onClick={()=>switchCanvas("floating")}>Floating</button>
            <button onClick={()=>switchCanvas("collision")}>Collision</button>
          </header>
          {canvasType}
      </div>
    );
  }
}

export default App;
