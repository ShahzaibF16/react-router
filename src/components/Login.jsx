import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    let { email, setemail } = useState()
    let { password, setpassword } = useState()
    let { btn, setbtn } = useState()

    let login = () => {
        if (email == undefined || email == "") {
            toast.error("Wrong Email")
            setTimeout(() => {
                setbtn(true)
            }, 1500);
        }
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                Login Page
            </h1>
            <input value={email} onChange={(e) => setemail(e.target.value)}
                style={{ margin: "0 auto", display: "block" }} type="email" name="email" id="email" placeholder="Email" />
            <input onChange={(e) => setpassword(e.target.value)}
                style={{ margin: "20px auto", display: "block" }} type="password" name="password" id="pass" placeholder="Password" />
            <br />

            {btn == true ?
                <button style={{ margin: "0 auto", display: "block" }}
                    onClick={() => login()}>
                    Login
                </button>
                :
                <button style={{ margin: "0 auto", display: "block" }} disabled
                    onClick={() => login()}>
                    Login
                </button>

            }
            
            <ToastContainer theme="colored" autoClose="100" />

        </div>
    )
}

export default Login