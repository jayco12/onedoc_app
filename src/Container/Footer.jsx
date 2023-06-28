import React from "react";
import { images } from ".";

const Footer = () => {
    const d = new Date()
    let year = d.getFullYear();

    return (
        <div className="w-4/5 m-auto mt-20 md:w-1/2 md:mt-28">
            <h5 className="text-center text-Onedoc-blue font-black">Follow Us</h5>
            <div className="flex justify-center align-middle gap-3 mt-5">
                <a href="mailto:qwickdocapp@gmail.com">
                    <img src={images.gmail} alt="gmailtwitter link" className="w-7"/>
                </a>
                <a href="">
                    <img src={images.twitter} alt="twitter link" className="w-7"/>
                </a>
                <a href="https://instagram.com/_onedoc_?igshid=NTc4MTIwNjQ2YQ==">
                    <img src={images.instagram} alt="Instagram link"
                    className="w-7" />
                </a>
                <a href="#">
                    <img src={images.linkedin} alt="https://www.linkedin.com/company/qwickdoc/" 
                    className="w-7"/>
                </a>
            </div>
            <p className="mt-6 text-center text-Onedoc font-thin text-xs md:mt-4 font-Montserrat " >{year} Onedoc. ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer