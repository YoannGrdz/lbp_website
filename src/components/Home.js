import React from "react";
import lbp_coffeeCup03 from "../pictures/lbp_coffeeCup03resized02.png";



export default function Home(){


    return(
        <div className="home" id="home">
            <div className="leftSpace"></div>
            <div className="home--content" style={{backgroundImage : `url(${lbp_coffeeCup03})`}}>
                <div className="home--content--headers">
                    <h1 className="home--header">LBP</h1>
                    <p className="home--subheader">Share happiness.</p>
                </div>
                <div className="home--downArrow"></div>
            </div>
        </div>
    )
}