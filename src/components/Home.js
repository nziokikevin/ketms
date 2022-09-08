import React from "react";

function Home() {
    return (
        <div>
            {/* carousel section */}
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.volvobuses.com/content/dam/volvo/volvo-buses/markets/global/en-en/news/2019/1860X1050-volvo-luxury-coaches.jpg" className="d-block w-100" height="400px" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.sustainable-bus.com/wp-content/uploads/2022/02/Volvo-Buses-7900-Electric-scaled.jpg" className="d-block w-100" height="400px" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* carousel section */}

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

            {/* services section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Our Services</h4>
                            <div className="underline mb-3"></div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Sacco Management</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>To help saccos manage their fleet expenses, activities and request orders.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow">
                                <div className="card-body">
                                <h6>Driver Management</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>To manage your driver and their activities</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Trip Management</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>To manage your fleet's trips and routes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Inventory Management</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>To keep track of all your tire and spare parts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )

}

export default Home;