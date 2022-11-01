import React from "react";
import lbp_customer01_bw from "../pictures/lbp_customer01_bw.png";

export default function Testimonials(){
    return (
        <div className="testimonials">
            <div className="leftSpace"></div>
            <div className="testimonials--content" style={{backgroundImage: `url(${lbp_customer01_bw})`}}>
                <p className="transition--overheader">What our clients say</p>
                <h2 className="transition--header">about us</h2>
                <div className="review">
                    <p className="review--text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    <p className="review--author">- JANE DOE SAN</p>
                </div>
            </div>

        </div>
    )
}