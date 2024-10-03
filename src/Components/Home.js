import React from 'react';
// import {useNavigate} from "react-router-dom";git 
import { Link } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate();
    return ( 
        <div className="home-content">
            <h2>Welcome To Ncas TURF</h2>
            <Link to="/booking" className='btn'>Book now</Link>
            {/* <button className='btn' onClick={()=> navigate('/Booking')} >
               Book Now
            </button> */}
        </div>
    );
}
 
export default Home;
