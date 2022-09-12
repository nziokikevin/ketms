import React from "react";

function ContactUs() {
    return (
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">Contact Us</h1>
            </section>
            
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {/* google map section */}
                        <div className="col-md-8">
                         {/* eslint-disable-next-line */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8170062407335!2d36.81640611415834!3d-1.2836756990637177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11efc0b203dd%3A0x5376f1de78cf155a!2sNairobi%20C%20B%20D!5e0!3m2!1sen!2ske!4v1662629697028!5m2!1sen!2ske" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="googleMaps">Google maps Location</iframe>
                        </div>
                        {/* the reviews section */}
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4>You can give us your feeback and reviews through:</h4>
                                    <div className="mb-3"></div>
                                    <form action="">
                                        <label>Name</label>
                                        <input type="text" className="form-control mb-3" placeholder="Enter your name" />
                                        <label>Contact</label>
                                        <input type="text" className="form-control mb-3" placeholder="Enter your contact" />
                                        <label>Reviews</label>
                                        <textarea name="" className="form-control mb-3" rows="5"></textarea>
                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </div>
    )

}

export default ContactUs;