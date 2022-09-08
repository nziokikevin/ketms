import React from "react";

function About() {
    return (
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">About Us</h1>
            </section>

            {/* our company section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Our Company</h4>
                            <div className="underline mb-3"></div>
                            <p>KeNTMS is a logistics and shipping management software that helps businesses streamline operations related to dispatching, accounting, commissions, asset management, and more on a centralized platform. The automated workflow engine uses an IFTTT algorithm to update load details and statuses.</p>
                            <p>AscendTMS is a logistics and shipping management software that helps businesses streamline operations related to dispatching, accounting, commissions, asset management, and more on a centralized platform. The automated workflow engine uses an IFTTT algorithm to update load details and statuses.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* our company section */}

            {/* mission and vision section */}
            <section className="mv py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Our Vision</h4>
                            <div className="sub-underline mb-3"></div>
                            <p>
                                The broader goals of using a TMS are to improve shipping efficiency, reduce costs, gain real-time supply chain visibility and ensure customer satisfaction.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h4>Our Mission</h4>
                            <div className="sub-underline mb-3"></div>
                            <p>
                                The broader goals of using a TMS are to improve shipping efficiency, reduce costs, gain real-time supply chain visibility and ensure customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* mission and vision section */}

        </div>
    )

}

export default About;