import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


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
            {/* <form className="row g-3 m-3" onSubmit={handleSubmit}>
                <h2>Register a new vehicle with us:</h2>
                <div className="col-md-6 m-3">
                    <label className="form-label">Model of Vehicle</label>
                    <input type="text" className="form-control" id="name" onChange={handleChange} value={formData.model} required/>
                </div>
                <div className="col-md-6 m-3">
                    <label className="form-label">Model of Vehicle</label>
                    <input type="text" className="form-control" id="name" onChange={handleChange} value={formData.model} required/>
                </div>
                <div className="col-md-6 m-3">
                    <label className="form-label">Model of Vehicle</label>
                    <input type="text" className="form-control" id="name" onChange={handleChange} value={formData.model} required/>
                </div>
                <div className="col-md-6 m-3">
                    <label className="form-label">Enter description of sacco:</label>
                    <textarea type="text" className="form-control" id="description" onChange={handleChange} value={formData.description} requiredrows="10"></textarea>
                </div>
                <div className="col-12 m-3">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form> */}
            {/* // registering of a new sacco. */}

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