import React from "react";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar--logo"></div>
            <ul className="navbar--list">
                <li>Home</li>
                <li>Our story</li>
                <li>Menu</li>
                <li>Shop</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
            <div className="navbar--socials">
                <div className="navbar--socials--social">fb</div>
                <div className="navbar--socials--social">i</div>
                <div className="navbar--socials--social">t</div>
            </div>
        </div>
    )
}