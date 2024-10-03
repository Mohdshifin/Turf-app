const Contact = () => {
    return ( 
        <div className="Contact">
            <h2>Contact Info</h2>
            <form action="">
                <input type="text" placeholder="Enter your name..." /><br />
                <input type="email" placeholder="Enter your mail..."/><br />
                <textarea name="" id="" cols={30} rows={10} placeholder="Enter your Message ..."></textarea>
            </form>
        </div>
     );
}
 
export default Contact;
