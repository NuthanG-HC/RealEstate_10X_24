import React, { useEffect } from 'react';
import { json } from 'react-router-dom';

import "./display.css"
import Sidebar from '../dashboard/sidebar';
import Navbar from '../dashboard/navbar';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../dashboard/progressBar';
import BasicInfo from '../dashboard/basicPage';
import GeneralInfo from '../dashboard/generalPage';

const Display2 = () => {
    // const navigate = useNavigate()
    // const token = localStorage.getItem("token")

    // useEffect(() => {
    //     if (!token) {
    //         navigate("/login")
    //     }
    //     console.log(token)
    // }, [])
    return (
        <div className="home">
            <div className="side-nav">
                <Sidebar />
            </div>
            <div className="display">
                <Navbar />
                <div className='dashboard'>
                <ProgressBar/>
                <GeneralInfo/>
                </div>
            </div>

        </div>

    )
}
export default Display2;