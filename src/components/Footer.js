import React from "react";
import {Link} from "react-router-dom"

function Footer(){
    return(
        <section className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Info</h6>
                        <hr />
                        <p>
                        The broader goals of using a TMS are to improve shipping efficiency, reduce costs, 
                        gain real-time supply chain visibility and ensure customer satisfaction.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/" className="text-decoration-none">Home</Link></div>
                        <div><Link to="/about" className="text-decoration-none">About Us</Link></div>
                        <div><Link to="/saccos" className="text-decoration-none">Saccos</Link></div>
                        <div><Link to="/contact-us" className="text-decoration-none">Contact Us</Link></div>
                    </div>

                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p>Address: Nairobi, Kenya</p></div>
                        <div><p>Phone number: 0735120449</p></div>
                        <div><p>Email: kevinnzioki10@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;