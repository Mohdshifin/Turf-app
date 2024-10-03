const Booking = () => {
    return ( 
        <div className="booking">
            <div className="turfs">
                <div className="football">
                    <h3>Football Turf</h3>
                    <img src="/Images/TURF a.jpg" alt="" />
                    <p>This is football turf that can be booked by any one</p><br />
                    <button className="btn"> Book Now</button>
                </div>
                <div className="cricket">
                    <h3>Cricket Turf</h3>
                    <img src="/Images/CRICKET NETS a.jpg" alt="" />
                    <p>This is cricket turf that can be booked by any one</p><br />
                    <button className="btn"> Book Now</button>
                </div>
            </div>
        </div>
     );
}
 
export default Booking;