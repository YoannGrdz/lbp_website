import React from "react";
import lbp_staff01 from "../pictures/lbp_staff01_cropped.png";
import lbp_interior03 from "../pictures/lbp_interior03__cropped.png"

export default function About(){


    return(
        <div className="about" id="about">
            <div className="leftSpace"></div>
            <div className="about--content">
                <div className="about--content--text">
                    <p className="overheader">Find out</p>
                    <h2 className="section--header">our story</h2>
                    <p className="about--content--text--p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="about--content--pictures">
                    <div className="about--picture1" style={{backgroundImage : `url(${lbp_staff01})`}}></div>
                    <div className="about--picture2" style={{backgroundImage : `url(${lbp_interior03})`}}></div>
                </div>
            </div>
        </div>
    )
}