import { useState } from "react";
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BeatLoader from "react-spinners/BeatLoader"

const Form = () => {

    const [initialValue, setValue] = useState(true)
    const [checkBlankField, setCheckBlankField] = useState(false)

    const [userData, setUserData] = useState({
        fullName: '',
        email: ''
    })

    const receiveUserEmail = (event) => {
        setUserData((prevData) => {
            return {
                ...prevData,
                email: event.target.value
            }
        })
    }

    const receiveUserInput = (e) => {

        e.preventDefault()

        if (userData.email.length <= 0) {
            setCheckBlankField(true)
        } else {
            let config = {
                method : "POST",
                url: import.meta.env.VITE_ACCESS_URL,
                header : {
                    "Content-Type" : "application/json"
                },
                data : userData
            }
            axios(config).then(response =>{
                console.log(response.data)
                toast("wow")
            console.log(userData.email)
            setValue(false)
            }).catch(err =>{
                console.log(err)
                setValue(true)
            })
            
        }

    }

    return (
        <div className="w-4/5 m-auto md:w-1/2 md:mt-20">
            <form className=" mt-8 flex  md:mt-10">
                <input type="name" name="Full-name" id="full-name" className="bg-gray-300 h-16 w-2/3 p-4" placeholder="ENTER YOUR Full Name" onChange={receiveUserEmail} />
                <input type="email" name="Email" id="Email" className="bg-gray-300 h-16 w-2/3 p-4" placeholder="ENTER YOUR EMAIL" onChange={receiveUserEmail} />
                {checkBlankField && userData.email.length == 0 ?
                <label className="text-red-600 font-Montserrat">Name cant be blank</label>: " "
                }
                {initialValue ?
                    <input type="submit" value="Notify Me" className="bg-Balablue-blue  w-1/3  text-white font-Gothic font-normal text-xs sm:text-xl " placeholder="ENTER YOUR EMAIL" onClick={receiveUserInput} /> :
                    <div className="bg-Balablue-blue w-1/3 flex justify-center align-middle pt-4">
                        <BeatLoader />
                    </div>
                }
            </form>
            <ToastContainer />
            <h3 className="text-center mt-6 font-light text-Balablue-blue md:mt-3">Notify Me When the App is lauched</h3>
        </div>

    )
}

export default Form