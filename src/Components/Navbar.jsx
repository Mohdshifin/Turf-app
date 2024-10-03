import React from "react";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src="/Images/ncas-a1.png" alt="NCAS Logo" /> {/* Correct path for public folder */}
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                        <a href="#about_us">About us</a>
                        <a href="#Booking">Book Now</a>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
