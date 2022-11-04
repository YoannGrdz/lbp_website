import React from "react";
import lbp_logo from "../pictures/lbp_logo.jpg";
import lbp_map01 from "../pictures/lbp_map01.png";

export default function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="leftSpace"></div>
            <div className="contact--content">
                <div className="info--side">
                    <div className="map" style={{backgroundImage: `url(${lbp_map01})`}}></div>
                    <div className="info--side--text">
                        <div className="address">
                            <p className="info--title">ADDRESS:</p>
                            <p className="info--text">23 lorem ipusm 2000 Iwaki, Japan</p>
                        </div>
                        <div className="phone">
                            <p className="info--title">PHONE:</p>
                            <p className="info==text">+33-4579231</p>
                        </div>
                        <div className="hours">
                            <p className="info--title">HOURS:</p>
                            <p className="info--text">MON/THU - 11:30AM - 9PM</p>
                            <p className="info--text">FRI/SAT - 11:30AM - 10PM</p>
                            <p className="info--text">SUN - CLOSED</p>
                        </div>
                    </div>
                </div>
                <div className="form--side">
                    <form className="contact--form">
                        <img className="contact--form--logo" src={lbp_logo} alt="lbp logo"/>
                        <input type="text" className="text--input" placeholder="Name"/>
                        <input type="email" className="text--input" placeholder="Email"/>
                        <input type="text" className="text--input" placeholder="Phone number"/>
                        <input type="text" className="text--input" placeholder="Message"/>
                        <button type="submit" className="submit--button">SUBMIT</button>
                    </form>

                </div>
            </div>
        </div>
    )
}