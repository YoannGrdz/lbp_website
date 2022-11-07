import React from "react";
import lbp_customer01_bw from "../pictures/lbp_customer01_bw.png";

export default function Testimonials(){

    // intersection observer code ---
    const testimonialsRef = React.useRef();
    const [testimonialsVisible, setTestimonialsVisible] = React.useState();

    React.useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setTestimonialsVisible(entry.isIntersecting);
        },{
            threshold: 0.5,
        })
        observer.observe(testimonialsRef.current);
    
    }, [])
    // ---

    return (
        <div className="testimonials" ref={testimonialsRef}>
            <div className="leftSpace"></div>
            <div className="testimonials--content" style={{backgroundImage: `url(${lbp_customer01_bw})`}}>
                <p className="transition--overheader">What our clients say</p>
                <h2 className="transition--header">about us</h2>
                <div className={testimonialsVisible ? "review review--visible" : "review"}>
                    <p className="review--text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    <p className="review--author">- JANE DOE SAN</p>
                </div>
            </div>

        </div>
    )
}