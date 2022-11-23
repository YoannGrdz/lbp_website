import React from "react";
import NewsCard from "./NewsCard";

export default function News(){
    return(
        <div className="news" id="news">
            <div className="leftSpace"></div>
            <div className="news--content">
                <div className="news--content--text">
                    <p className="overheader">Follow</p>
                    <h2 className="section--header">our news</h2>
                    <p className="news--content--text--p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="section--button">All our news</button>
                </div>
                <div className="news--content--exampleSide">
                    <NewsCard />
                </div>
            </div>
        </div>
    )
}