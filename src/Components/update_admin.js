


import { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";



function Update() {

    let [user, setUser] = useState({});
    let navigate = useNavigate();
    let userId = useParams();

    useEffect(()=>{
        let singleData = ()=>{
            fetch("http://localhost:3000/data/"+userId.id,{
                method:"get"
            })
            .then(async (res)=>{
                let data = await res.json();
                console.log(data);
                setUser(data)
            })
        }
        singleData();
    },setUser)


    let getValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    let submitData = (e) => {
        
        e.preventDefault();

        fetch("http://localhost:3000/data/"+userId.id,{
            method : "put",
            body : JSON.stringify(user)
        })
        .then(async (res)=>{
            navigate('/viewAdmin');
        })
        .catch(err=>{
            alert(err);
        })
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Form Basic</h4>
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
                        <div className="col-md-6">
                            <div className="card">
                                <form className="form-horizontal" method="post" onSubmit={(e) => submitData(e)}>
                                    <div className="card-body">
                                        <h4 className="card-title">Edit-Admin</h4>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">First Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="fname" value={user.fname ? user.fname : ""} className="form-control" id="fname" placeholder="First Name Here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="lname" className="col-sm-3 text-right control-label col-form-label">Last Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="lname" value={user.lname ? user.lname : ""} className="form-control" id="lname" placeholder="Last Name Here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="email1" className="col-sm-3 text-right control-label col-form-label">Enater Email</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="mail" value={user.mail ? user.mail : ""} className="form-control" id="email1" placeholder="Enatre Email Here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="lname" className="col-sm-3 text-right control-label col-form-label">Password</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="pass" value={user.pass ? user.pass : ""} className="form-control" id="lname" placeholder="Password Here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="cono1" className="col-sm-3 text-right control-label col-form-label">Contact No</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="contact" value={user.contact ? user.contact : ""} className="form-control" id="cono1" placeholder="Contact No Here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="cono1" className="col-sm-3 text-right control-label col-form-label">Message</label>
                                            <div className="col-sm-9">
                                                <textarea className="form-control" name="message" defaultValue={user.message ? user.message : ""} onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top">
                                        <div className="card-body">
                                            <button type="submit" className="btn btn-primary">Edit Admin</button>
                                        </div>
                                    </div>
                                </form>
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

export default Update