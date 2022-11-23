import React from "react";
import lbp_customer02 from "../pictures/lbp_customer02_cropped.png";
import lbp_food05 from "../pictures/lbp_food05_cropped.png";


export default function Menu(){

    // intersection observer code ---
    const menuRef = React.useRef();
    const [menuVisible, setMenuVisible] = React.useState();

    React.useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setMenuVisible(entry.isIntersecting);
        },{
            threshold: 0.5,
        })
        observer.observe(menuRef.current);
    
    }, [])
    // ---
    

    return(
        <div className="menu" id="menu" ref={menuRef}>
            <div className="leftSpace"></div>
            <div className="menu--content">
                <div className="menu--content--pictures">
                    <div className={menuVisible ? "menu--picture1 menu--picture1--visible" : "menu--picture1"} style={{backgroundImage : `url(${lbp_customer02})`}}></div>
                    <div className={menuVisible ? "menu--picture2 menu--picture2--visible" : "menu--picture2"} style={{backgroundImage : `url(${lbp_food05})`}}></div>
                </div>
                <div className="menu--content--text">
                    <p className="overheader">Discover</p>
                    <h2 className="section--header">our menu</h2>
                    <p className="menu--content--text--p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="section--button">View full menu</button>
                </div>
            </div>
        </div>
    )
}