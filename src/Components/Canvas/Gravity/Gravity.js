import React, {Component} from "react";
import * as logic from "./gravityAnnimation";

class Gravity extends Component{

    componentDidMount(){
        const canvas = this.refs.canvas;
        const c = canvas.getContext('2d')

        logic.setCanvas(canvas, c);
        logic.init();
        logic.animate();
    }
    

    render(){

        window.addEventListener('resize', () => {
            const canvas = this.refs.canvas;
            const c = canvas.getContext('2d')
    
            logic.setCanvas(canvas, c);
            logic.init();
            logic.animate();
        })

        return <canvas 
                    className="gravity" 
                    ref="canvas"
                > 
                
                </canvas>
    }
}

export default Gravity;