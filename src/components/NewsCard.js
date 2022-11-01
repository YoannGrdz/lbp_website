import React from "react";
import croissants01 from "../pictures/croissants01.jpg";

export default function NewsCard(){
    return (
        <div className="newsCard">
            <div className="newsCard--header">LPB's traditinal bakery project on the way !</div>
            <div className="newsCard--picture" style={{backgroundImage: `url(${croissants01})`}}></div>
        </div>
    )
}