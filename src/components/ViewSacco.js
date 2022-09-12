import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ViewSacco() {
    const [saccos, setSaccos] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/saccos/${id}`)
            .then((r) => r.json())
            .then((saccoData) => setSaccos(saccoData))
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id])

    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">View Sacco</h1>
            </section>
            {/* displaying of saccos form backend */}

            <section>
                <div>
                    {
                        Object.keys(saccos).length > 0 &&
                        <div className="col-md-3 m-3">
                            <div className="card shadow">
                                <div className="card-body m-3">
                                    <h4>{saccos.name} Sacco</h4>
                                    <div className="sub-underline mb-6"></div>

                                    {saccos.vehicles.map((vehicle, index) => {
                                        return (
                                            <div className="card-body m-3" key={index}>
                                                <h5>Plate_no: {vehicle.plate_no}</h5>

                                                {vehicle.routes.map((route, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <h6>Route: {route.name}</h6>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default ViewSacco;