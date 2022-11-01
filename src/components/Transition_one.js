import React from "react";
import lbp_crepes02 from "../pictures/lbp_crepes02_cropped.png";
import lbp_coffeeCup05 from "../pictures/lbp_coffeeCup05.png";
import lbp_food04 from "../pictures/lbp_food04.png";

export default function TransitionOne(){
    return(
        <div className="transition">
            <div className="leftSpace"></div>
            <div className="transition--content">
                <div className="transition--headers">
                    <p className="transition--overheader">Delicious</p>
                    <h2 className="transition--header">recipes</h2>
                </div>
                <div className="transitionOne--picture01" style={{backgroundImage : `url(${lbp_coffeeCup05})`}}></div>
                <div className="transitionOne--picture02" style={{backgroundImage : `url(${lbp_food04})`}}></div>
                <div className="transitionOne--picture03" style={{backgroundImage : `url(${lbp_crepes02})`}}></div>
            </div>
        </div>
    )
}