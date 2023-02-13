import React from "react";
import { images } from ".";

const Footer = () => {
    const d = new Date()
    let year = d.getFullYear();

    return (
        <div className="w-4/5 m-auto mt-8 md:w-1/2">
            <h5 className="text-center text-Balablue-blue font-black">Follow Us</h5>
            <div className="flex justify-center align-middle gap-14 mt-5 ">
                <a href="#">
                    <img src={images.twitter} alt="twitter link" className="w-7"/>
                </a>
                <a href="#">
                    <img src={images.instagram} alt="Instagram link"
                    className="w-7" />
                </a>
                <a href="#">
                    <img src={images.linkedin} alt="linkedin link" 
                    className="w-7"/>
                </a>
            </div>
            <p className="mt-6 text-center text-Balablue-blue font-bold md:mt-4" >{year} BALABLUE. ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer