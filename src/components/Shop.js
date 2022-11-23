import React from "react";
import lbp_products03 from "../pictures/lbp_products03_cropped.png";
import lbp_products04 from "../pictures/lbp_products04_cropped.png";
import lbp_products06 from "../pictures/lbp_products06_cropped.png";

export default function Shop(){
    return(
        <div className="shop" id="shop">
            <div className="leftSpace"></div>
            <div className="shop--content">
                <p className="overheader">Purchase</p>
                <h2 className="section--header">our quality products</h2>
                <div className="products">
                    <div className="product">
                        <div className="product--picture" style={{backgroundImage : `url(${lbp_products03})`}}></div>
                        <p className="product--name">lorem ipsum</p>
                    </div>
                    <div className="product">
                        <div className="product--picture" style={{backgroundImage : `url(${lbp_products04})`}}></div>
                        <p className="product--name">dolor sit amet</p>
                    </div>
                    <div className="product">
                        <div className="product--picture" style={{backgroundImage : `url(${lbp_products06})`}}></div>
                        <p className="product--name">consectetur adipiscing</p>
                    </div>
                </div>
                <button className="section--button">View all our products</button>
            </div>
        </div>
    );
}