import React from "react";
import lbp_logo from "../pictures/lbp_logo.jpg";
import facebook_logo from "../icons/facebook.png";
import instagram_logo from "../icons/instagram.png";
import twitter_logo from "../icons/twitter.png";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar--logo">
                <img className="navbar--logo--picture" src={lbp_logo} alt="lbp logo"/>
            </div>
            <ul className="navList">
                <li>
                    <a href="#home">
                        <p>Home</p>
                        <div className="navList--item--bar">
                            <div className="navList--item--bar--shiny"></div>
                        </div>
                        <div className="navList--item--arrow">
                            <div className="arrow--tail"></div>
                            <div className="arrow--head"></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <p>Our story</p>
                        <div className="navList--item--bar">
                            <div className="navList--item--bar--shiny"></div>
                        </div>
                        <div className="navList--item--arrow">
                            <div className="arrow--tail"></div>
                            <div className="arrow--head"></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#menu">
                        <p>Menu</p>
                        <div className="navList--item--bar">
                            <div className="navList--item--bar--shiny"></div>
                        </div>
                        <div className="navList--item--arrow">
                            <div className="arrow--tail"></div>
                            <div className="arrow--head"></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#shop">
                        <p>Shop</p>
                        <div className="navList--item--bar">
                            <div className="navList--item--bar--shiny"></div>
                        </div>
                        <div className="navList--item--arrow">
                            <div className="arrow--tail"></div>
                            <div className="arrow--head"></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#news">
                        <p>News</p>
                        <div className="navList--item--bar">
                            <div className="navList--item--bar--shiny"></div>
                        </div>
                        <div className="navList--item--arrow">
                            <div className="arrow--tail"></div>
                            <div className="arrow--head"></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <p>Contact</p>
                        <div className="navList--item--bar">
                            <div className="navList--item--bar--shiny"></div>
                        </div>
                        <div className="navList--item--arrow">
                            <div className="arrow--tail"></div>
                            <div className="arrow--head"></div>
                        </div>
                    </a>
                </li>
            </ul>
            <div className="navbar--socials">
                <div className="navbar--socials--social"><img className="social--img" src={instagram_logo} alt="instagram logo"/></div>
                <div className="navbar--socials--social"><img className="social--img" src={facebook_logo} alt="facebook logo"/></div>
                <div className="navbar--socials--social"><img className="social--img" src={twitter_logo} alt="twitter logo"/></div>
            </div>
        </div>
    )
}


/* <ul className="navList">
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
            </ul> */