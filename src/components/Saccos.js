import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Saccos() {
    const [saccos, setSaccos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/saccos")
            .then((r) => r.json())
            .then((saccos) => setSaccos(saccos));
    }, [])
    return (
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">Saccos</h1>
            </section>
            {/* registering a new sacco */}
            <form className="row g-3 m-3">
                <h2>Register a new sacco with us:</h2>
                <div className="col-md-8 m-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <label className="form-label">Sacco name</label>
                            <input type="name" className="form-control" placeholder="Enter Sacco name..." />
                        </div>
                        <div className="col-md-8 m-3">
                            <label className="form-label">Enter a description about the sacco: </label>
                            <textarea className="form-control" rows="3"></textarea>
                            <button className="btn btn-primary m-3">Register</button>
                        </div>
                    </div>
                </div>

            </form>


            {
                saccos.map(sacco => {
                    return (
                        <section key={sacco.id}>
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                <h6>{sacco.name} Sacco</h6>
                                                <div className="sub-underline mb-3"></div>
                                                <p>{sacco.name} Sacco operates in the {sacco.route} region of Nairobi city.</p>
                                                <Link to="/saccos">
                                                    <button type="submit" className="btn btn-primary w-40">To see Sacco</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    )
                })
            }





        </div>
    )

}

export default Saccos;