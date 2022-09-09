import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Saccos() {
    const [saccos, setSaccos] = useState([]);
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        fetch("http://localhost:9292/saccos")
            .then((r) => r.json())
            .then((saccos) => setSaccos(saccos));
    }, [])

    function handleDelete(id) {
        fetch(`http://localhost:9292/saccos/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => {
                const updateSacco = saccos.filter((sacco) => sacco.id !== id)
                setSaccos(updateSacco)
            })

    }

    const [formData, setFormData] = useState({
        name: '',
        description: ''
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/saccos`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((data) => registerSacco(data))
        setFormData(
            {
                name: '',
                description: ''
            }
        )
    }

    function handleChange(e){
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    function registerSacco(data){
        setSaccos([...saccos, data])
    }


    return (
        <div>
             <form className="row g-3 m-3" onSubmit={handleSubmit}>
                <h2>Register a new sacco with us:</h2>
                <div className="col-md-6 m-3">
                    <label className="form-label">Name of Sacco</label>
                    <input type="text" className="form-control" id="name" onChange={handleChange} value={formData.name} required/>
                </div>
                <div className="col-md-6 m-3">
                    <label className="form-label">Enter description of sacco:</label>
                    <textarea type="text" className="form-control" id="description" onChange={handleChange} value={formData.description} requiredrows="10"></textarea>
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
                                        onChange={(e) => {setSearch(e.target.value)}}
                                        type="text"className="form-control" placeholder="Search Names" />
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


            {/* displaying of saccos form backend */}

            <section>
                {
                    saccos.length > 0 && saccos.filter((sacco) => {
                        return(
                            sacco.name.toLowerCase().includes(search.toLowerCase())
                        )
                    }).map((sacco) => {
                        return(
                            <table className="table table-striped table-hover m-3 align-middle" key={sacco.id} >
                            <thead>
                                <tr>
                                <th scope="col">Sacco_id</th>
                                <th scope="col">Name of sacco</th>
                                <th scope="col">Description</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                <td>{sacco.id}</td>
                                <td>{sacco.name}</td>
                                <td>{sacco.description}</td>
                                <td><Link to={`/saccos/${sacco.id}`}>
                                    <button type="button" className="btn btn-info">VIEW</button>
                                    </Link>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(sacco.id)}>DELETE</button>
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

export default Saccos;