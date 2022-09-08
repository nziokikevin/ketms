import React from "react";
import { Link } from "react-router-dom";

function Saccos() {
    return (
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">Saccos</h1>
            </section>

            <section>
                <div className="col-md-3">
                    <div className="card shadow m-4">
                        <div className="card-body">
                            <h6>Embassava Sacco</h6>
                            <div className="sub-underline mb-3"></div>
                            <p>Embassa Sacco operates in the embakasi region of Nairobi city.</p>
                            <Link to="/saccos">
                                <button type="submit" className="btn btn-primary w-40">To see Saccos</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Saccos;