import React from "react";

function Home() {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.volvobuses.com/content/dam/volvo/volvo-buses/markets/global/en-en/news/2019/1860X1050-volvo-luxury-coaches.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.sustainable-bus.com/wp-content/uploads/2022/02/Volvo-Buses-7900-Electric-scaled.jpg" className="d-block w-100" alt="..." />
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

        </div>
    )

}

export default Home;