import React from "react";
import lbp_staff01 from "../pictures/lbp_staff01_cropped.png";
import lbp_interior03 from "../pictures/lbp_interior03__cropped.png"

export default function About(){

    // intersection observer code ---
    const aboutRef = React.useRef();
    const [aboutVisible, setAboutVisible] = React.useState();

    React.useEffect(() => {

        const aboutObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setAboutVisible(entry.isIntersecting);
        },{
            threshold: 0.5,
        })
        aboutObserver.observe(aboutRef.current);
        
    }, [])
    // ---

    return(
        <div className="about" id="about" ref={aboutRef}>
            <div className="leftSpace"></div>
            <div className="about--content">
                <div className="about--content--text">
                    <p className="overheader">Find out</p>
                    <h2 className="section--header">our story</h2>
                    <p className="about--content--text--p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="section--button">Our Story</button>
                </div>
                <div className="about--content--pictures">
                    <div className={aboutVisible ? "about--picture1 about--picture1--visible" : "about--picture1"} style={{backgroundImage : `url(${lbp_staff01})`}}></div>
                    <div className={aboutVisible ? "about--picture2 about--picture2--visible" : "about--picture2"} style={{backgroundImage : `url(${lbp_interior03})`}}></div>
                </div>
            </div>
        </div>
    )
}