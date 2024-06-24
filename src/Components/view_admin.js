import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";



function View_Admin() {

    let [user, setUser] = useState([]);

    useEffect(() => {

        getData();
    }, setUser);
    let getData = () => {
        fetch("http://localhost:3000/data", {
            method: "get",
        })
            .then(async (res) => {
                let sd = await res.json();
                console.log(sd);
                setUser(sd);
            })
            .catch(err => {
                alert("something Wrong");
            })
    }

    let deleteData = (id) => {
        fetch("http://localhost:3000/data/" + id, {
            method: "delete"
        })
            .then((res) => {
                getData();
            })
            .catch(err => {
                alert("something Wrong");
            })
    }

    let updateData = () => {

    }

    return (
        <>
            <div className="page-wrapper">

                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Tables</h4>
                            <div className="ml-auto text-right">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title m-b-0">Static Table</h5>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Message</th>
                                            <th scope="col">Delete</th>
                                            <th scope="col">Update</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.map((v, i) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{++i}</th>
                                                    <td>{v.fname}</td>
                                                    <td>{v.lname}</td>
                                                    <td>{v.mail}</td>
                                                    <td>{v.pass}</td>
                                                    <td>{v.contact}</td>
                                                    <td>{v.message}</td>
                                                    <td>
                                                        <i className="fa fa-trash" onClick={() => deleteData(v.id)}></i>
                                                    </td>
                                                    <td>
                                                        <Link to={"/editData/" + v.id} ><i className="fa fa-edit"></i></Link>
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer text-center">
                    All Rights Reserved by Matrix-admin. Designed and Developed by <a href="https://wrappixel.com">WrapPixel</a>.
                </footer>

            </div>


        </>
    )
}

export default View_Admin;