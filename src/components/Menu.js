import React from "react";
import lbp_customer02 from "../pictures/lbp_customer02_cropped.png";
import lbp_food05 from "../pictures/lbp_food05_cropped.png";


export default function Menu(){


    return(
        <div className="menu" id="menu">
            <div className="leftSpace"></div>
            <div className="menu--content">
                <div className="menu--content--pictures">
                    <div className="menu--picture1" style={{backgroundImage : `url(${lbp_customer02})`}}></div>
                    <div className="menu--picture2" style={{backgroundImage : `url(${lbp_food05})`}}></div>
                </div>
                <div className="menu--content--text">
                    <p className="overheader">Discover</p>
                    <h2 className="section--header">our menu</h2>
                    <p className="menu--content--text--p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}