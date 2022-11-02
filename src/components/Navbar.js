import React from "react";
import lbp_logo from "../pictures/lbp_logo.jpg";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar--logo">
                <img className="navbar--logo--picture" src={lbp_logo} alt="lbp logo"/>
            </div>
            <ul className="navList">
                <li>
                    <p>Home</p>
                    <div className="navList--item--bar">
                        <div className="navList--item--bar--shiny"></div>
                    </div>
                    <div className="navList--item--arrow">
                        <div className="arrow--tail"></div>
                        <div className="arrow--head"></div>
                    </div>
                </li>
                <li>
                    <p>Our story</p>
                    <div className="navList--item--bar">
                        <div className="navList--item--bar--shiny"></div>
                    </div>
                    <div className="navList--item--arrow">
                        <div className="arrow--tail"></div>
                        <div className="arrow--head"></div>
                    </div>
                </li>
                <li>
                    <p>Menu</p>
                    <div className="navList--item--bar">
                        <div className="navList--item--bar--shiny"></div>
                    </div>
                    <div className="navList--item--arrow">
                        <div className="arrow--tail"></div>
                        <div className="arrow--head"></div>
                    </div>
                </li>
                <li>
                    <p>Shop</p>
                    <div className="navList--item--bar">
                        <div className="navList--item--bar--shiny"></div>
                    </div>
                    <div className="navList--item--arrow">
                        <div className="arrow--tail"></div>
                        <div className="arrow--head"></div>
                    </div>
                </li>
                <li>
                    <p>News</p>
                    <div className="navList--item--bar">
                        <div className="navList--item--bar--shiny"></div>
                    </div>
                    <div className="navList--item--arrow">
                        <div className="arrow--tail"></div>
                        <div className="arrow--head"></div>
                    </div>
                </li>
                <li>
                    <p>Contact</p>
                    <div className="navList--item--bar">
                        <div className="navList--item--bar--shiny"></div>
                    </div>
                    <div className="navList--item--arrow">
                        <div className="arrow--tail"></div>
                        <div className="arrow--head"></div>
                    </div>
                </li>
            </ul>
            <div className="navbar--socials">
                <div className="navbar--socials--social">fb</div>
                <div className="navbar--socials--social">i</div>
                <div className="navbar--socials--social">t</div>
            </div>
        </div>
    )
}