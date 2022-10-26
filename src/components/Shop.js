import React from "react";

export default function Shop(){
    return(
        <div className="shop">
            <div className="leftSpace"></div>
            <div className="shop--content">
                <p className="shop--content--overheader">Purchase</p>
                <h2>Our quality products</h2>
                <div className="products">
                    <div className="product">
                        <div className="product--picture"></div>
                        <p className="product--name">lorem ipsum</p>
                    </div>
                    <div className="product">
                        <div className="product--picture"></div>
                        <p className="product--name">dolor sit amet</p>
                    </div>
                    <div className="product">
                        <div className="product--picture"></div>
                        <p className="product--name">consectetur adipiscing</p>
                    </div>
                </div>
            </div>
        </div>
    );
}