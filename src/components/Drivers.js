import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Drivers() {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(false)

    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch("http://localhost:9292/drivers")
            .then((r) => r.json())
            .then((drivers) => setDrivers(drivers))
            .catch((err) => {
                console.log(err);
              })
              .finally(() => {
                setLoading(false);
              });
    }, [])

    function handleDelete(id) {
        fetch(`http://localhost:9292/drivers/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => {
                const updateDriver = drivers.filter((driver) => driver.id !== id)
                setDrivers(updateDriver)
            })
    }

    const [formData, setFormData] = useState({
        name: '',
        license_no: '',
        identity_card_no: '',
        vehicle_id: '',
        route_id: '',
        sacco_id: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/drivers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((data) => registerDriver(data))
        setFormData(
            {
                name: '',
                license_no: '',
                identity_card_no: '',
                vehicle_id: '',
                route_id: '',
                sacco_id: ''
            }
        )
    }

    function handleChange(e){
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    function registerDriver(data){
        setDrivers([...drivers, data])
    }

    if (loading) {
        return <p>Data is loading...</p>;
      }

    return (
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">Drivers</h1>
            </section>
            <form className="row g-3 m-3" onSubmit={handleSubmit}>
                <h2>Register a new driver with us:</h2>
                <div className="col-md-6 m-3">
                    <label className="form-label">Name of driver</label>
                    <input type="text" className="form-control" id="name" onChange={handleChange} value={formData.name} required />
                </div>
                <div className="col-md-6 m-3">
                    <label className="form-label">License Number</label>
                    <input type="text" className="form-control" id="license_no" onChange={handleChange} value={formData.license_no} required />
                </div>
                <div className="col-md-6 m-3">
                    <label className="form-label">Identity Card number</label>
                    <input type="text" className="form-control" id="identity_card_no" onChange={handleChange} value={formData.identity_card_no} required />
                </div>
                <div className="col-md-6 m-3">
                    <label className="form-label">Vehicle</label>
                    <input type="text" className="form-control" id="vehicle_id" onChange={handleChange} value={formData.vehicle_id} required />
                </div>
                <div className="col-md-6 m-3">
                    <label className="form-label">Route</label>
                    <input type="text" className="form-control" id="route_id" onChange={handleChange} value={formData.route_id} required />
                </div>
                <div className="col-md-6 m-3">
                    <label className="form-label">Sacco</label>
                    <input type="text" className="form-control" id="sacco_id" onChange={handleChange} value={formData.sacco_id} required />
                </div>
                <div className="col-12 m-3">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
            {/* // registering of a new sacco. */}

            {/* searching section */}
            <div className="row">
                <div className="col-md-6">
                    <form className="row" >
                        <div className="col">
                            <div className="mb-2 m-3">
                                <input
                                    name="text"
                                    value={search.text}
                                    onChange={(e) => { setSearch(e.target.value) }}
                                    type="text" className="form-control" placeholder="Search Names" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-2 m-3">
                                <input type="submit" className="btn btn-outline-dark" value="Search" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* searching section */}


            {/* displaying of saccos from backend */}

            <section>
                {
                   drivers.map((driver) => {
                        return (
                            <table className="table table-striped table-hover m-3 align-middle" key={driver.id} >
                                <thead>
                                    <tr>
                                        <th scope="col">driver_id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">License</th>
                                        <th scope="col">ID card</th>
                                        <th scope="col">Vehicle</th>
                                        <th scope="col">Route</th>
                                        <th scope="col">Sacco</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{driver.id}</td>
                                        <td>{driver.name}</td>
                                        <td>{driver.license_no}</td>
                                        <td>{driver.identity_card_no}</td>
                                        <td>{driver.vehicle_id}</td>
                                        <td>{driver.route}</td>
                                        <td>{driver.sacco}</td>
                                        <td><Link to={`/drivers/${driver.id}`}>
                                            <button type="button" className="btn btn-info">VIEW</button>
                                        </Link>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(driver.id)}>DELETE</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })
                }
            </section>
        </div>
    )



}

export default Drivers;