import React, {Component} from "react";
import * as logic from "./floatingAnnimation";

class Floating extends Component{

    componentDidMount(){
        const canvas = this.refs.canvas;
        const c = canvas.getContext('2d')

        logic.setCanvas(canvas, c);
        logic.buildShapes();
        logic.constructorAnnimation();
    }
    
    mouseMoveCB = (event) =>{
        logic.mouseMove(event);
    }

    render(){

        window.addEventListener('resize', () => {
            const canvas = this.refs.canvas;
            const c = canvas.getContext('2d')

            logic.setCanvas(canvas, c);
            logic.buildShapes();
            logic.constructorAnnimation();
        })

        return <canvas 
                    className="floating" 
                    ref="canvas"
                    onMouseMove={(event)=>this.mouseMoveCB(event)}
                > 
                
                </canvas>
    }
}

export default Floating;