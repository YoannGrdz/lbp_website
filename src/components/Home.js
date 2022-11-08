import React from "react";
import lbp_coffeeCup03 from "../pictures/lbp_coffeeCup03resized02.png";



export default function Home(){

    // intersection ovserver code ---
    const homeRef = React.useRef();
    const [homeVisible, setHomeVisible] = React.useState();
    
    React.useEffect(() => {

        const homeObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setHomeVisible(entry.isIntersecting);
        }, {
            threshold: 0.5
        })
        homeObserver.observe(homeRef.current);

    }, [])
    // ---

    return(
        <div className="home" id="home" ref={homeRef}>
            <div className="leftSpace"></div>
            <div className="home--content" style={{backgroundImage : `url(${lbp_coffeeCup03})`}}>
                <div className="home--content--headers">
                    <div className="home--header">
                        <div className="bigLetter">L</div>
                        <div className={homeVisible ? "smallLetters1 smallLetters--fold" : "smallLetters1"}>e&nbsp;</div>
                        <div className="bigLetter">B</div>
                        <div className={homeVisible ? "smallLetters2 smallLetters--fold" : "smallLetters2"}>onheur&nbsp;</div>
                        <div className="bigLetter">P</div>
                        <div className={homeVisible ? "smallLetters3 smallLetters--fold" : "smallLetters3"}>artagé&nbsp;</div>
                    </div>
                    <p className={homeVisible ? "home--subheader home--subheader--visible" : "home--subheader"}>Share happiness.</p>
                </div>
                <a href="#about"><div className={homeVisible ? "home--downArrow home--downArrow--visible" : "home--downArrow"}></div></a>
            </div>
        </div>
    )
}