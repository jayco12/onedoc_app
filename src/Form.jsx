import React from "react";

const Form = () => {
    return (
        <div className="w-4/5 m-auto">
            <form className=" mt-20 flex ">
                <input type="email" name="Email" id="Email" className="bg-gray-300 h-16 w-2/3 p-11" />
                <input type="submit" value="Notify Me" className="bg-Balablue-blue h-20 w-1/3 m-auto p text-white font-Gothic font-extrabold text-2xl" />
            </form>
            <h3 className="text-center mt-6 text-Balablue-blue font-semibold">Notify Me When the App is lauched</h3>
        </div>

    )
}

export default Form