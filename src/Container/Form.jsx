import React from "react";

const Form = () => {
    return (
        <div className="w-4/5 m-auto md:w-1/2 md:mt-20">
            <form className=" mt-5 flex md:mt-10">
                <input type="email" name="Email" id="Email" className="bg-gray-300 h-16 w-2/3 p-4" placeholder="ENTER YOUR EMAIL" />
                <input type="submit" value="Notify Me" className="bg-Balablue-blue h-14 w-1/3 m-auto  text-white font-Gothic font-normal text-xs sm:text-xl " placeholder="ENTER YOUR EMAIL"/>
            </form>
            <h3 className="text-center mt-6 font-light text-Balablue-blue md:mt-3">Notify Me When the App is lauched</h3>
        </div>

    )
}

export default Form