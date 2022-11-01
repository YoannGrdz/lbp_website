import React from "react";
import lbp_salad02 from "../pictures/lbp_salad02_cropped.png";


export default function TransitionTwo(){
    return(
        <div className="transition">
            <div className="leftSpace"></div>
            <div className="transitionTwo--content" style={{backgroundImage : `url(${lbp_salad02})`}}>
                <p className="transition--overheader">Fresh healthy</p>
                <h2 className="transition--header">ingredients</h2>
            </div>
        </div>
    )
}