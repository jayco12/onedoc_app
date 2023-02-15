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

    const receiveUserFullname = (event) => {
        setUserData((prevData) => {
            return {
                ...prevData,
                fullName: event.target.value
            }
        })
    }

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
            setValue(false)
            // let config = async () => {
            //     await axios.post('https://waitlist.cyclic.app/api', {
            //         name: userData.fullName,
            //         email: userData.email,
            //     }).then((response) => {
            //         toast(response.data.fullName + ' ' + "thank you for joining our waitlist")
            //         setValue(true)
            //         setUserData({
            //             fullName: '',
            //             email: ''
            //         })
            //     }).catch(err => {
            //         toast('REGISTRATION FAILED')
            //         console.log(err)
            //         setValue(true)
            //         setUserData({
            //             fullName: '',
            //             email: ''
            //         })
            //     })
            // }
            let config = {
                method : "POST",
                url: 'https://waitlist.cyclic.app/api',
                header : {
                    "Content-Type" : "application/json"
                },
                data : userData
            }
            axios(config).then(response =>{
                toast(response.data.fullName + ' ' + "thank you for joining our waitlist")
                setValue(true)
                setUserData({
                    fullName: '',
                    email: ''
                })
            }).catch(err =>{
                toast('REGISTRATION FAILED')
                console.log(err)
                setValue(true)
                setUserData({
                    fullName: '',
                    email: ''
                })
            })

        }

    }

    return (
        <div className="w-4/5 m-auto md:w-1/2 md:mt-20">
            <form className=" mt-8 flex flex-col  md:mt-10">
                <input type="name" name="Full-name" id="full-name" className="bg-gray-300 h-16 w-full p-4 m-auto mb-5" placeholder="ENTER YOUR FULL NAME" onChange={receiveUserFullname} value={userData.fullName || ''} />
                {checkBlankField && userData.email.length == 0 ?
                    <label className="text-red-600 font-Montserrat">Name cant be blank</label> : " "
                }
                <input type="email" name="Email" id="Email" className="bg-gray-300 h-16 w-full p-4 m-auto mb-5" placeholder="ENTER YOUR EMAIL" onChange={receiveUserEmail} value={userData.email || ''} />
                {checkBlankField && userData.email.length == 0 ?
                    <label className="text-red-600 font-Montserrat">Email cant be blank</label> : " "
                }
                {initialValue ?
                    <input type="submit" value="Notify Me" className="bg-Balablue-blue  w-full h-16 m-auto  text-white font-Gothic font-normal text-xs sm:text-xl " placeholder="ENTER YOUR EMAIL" onClick={receiveUserInput} /> :
                    <div className="bg-Balablue-blue w-full h-16 flex justify-center align-middle pt-4 m-auto">
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