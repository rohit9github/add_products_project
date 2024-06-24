import { useState } from "react";
import { json } from "react-router-dom";

function Add_book() {

    let [user, setUser] = useState({});
    let [type,setType] = useState([]);
    let getValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name == "booktype"){
          if(type.includes(value)){
            let index = type.findIndex((item)=>{
                return(
                    item==type.includes(value)
                )
            })
            type.splice(index,1)
          }
          else{
            type.push(value)
          }

        }
        setUser({ ...user, [name]: value,booktype: type});
    }

    let submitData = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/data", {

            method: "post",
            body: JSON.stringify(user)
        })
            .then((res) => {
                alert("Data is added");
            })

    }
    console.log(type);
    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Books Basic</h4>
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
                                    <h4 className="card-title">Add-Books</h4>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Book Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="bname" className="form-control" id="fname" placeholder="Enter Book Name Here" onChange={(e) => getValue(e)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="lname" className="col-sm-3 text-right control-label col-form-label">Enter Price</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="price" className="form-control" id="lname" placeholder="Enter Price Here" onChange={(e) => getValue(e)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="email1" className="col-sm-3 text-right control-label col-form-label">Author</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="author" className="form-control" id="email1" placeholder="Author Here" onChange={(e) => getValue(e)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="lname" className="col-sm-3 text-right control-label col-form-label">Type</label>
                                        <div className="col-sm-9">
                                            <label>Horror</label>
                                            <input type="checkbox" name="booktype" value="Horror" id="Horror"  onChange={(e) => getValue(e)} />
                                            <label>Horror</label>
                                            <input type="checkbox" name="booktype" value="Comic" id="Comic"  onChange={(e) => getValue(e)} />
                                            <label>Horror</label>
                                            <input type="checkbox" name="booktype" value="Action" id="lname"  onChange={(e) => getValue(e)} />
                                            <label>Horror</label>
                                            <input type="checkbox" name="booktype" value="Drama" id="lname"  onChange={(e) => getValue(e)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="cono1" className="col-sm-3 text-right control-label col-form-label">Pages</label>
                                        <div className="col-sm-9">
                                            <select type="text" name="pages" className="form-control" id="cono1" placeholder="Contact No Here" onChange={(e) => getValue(e)} >
                                                <option>--select---</option>
                                                <option>0-200</option>
                                                <option>--select---</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="cono1" className="col-sm-3 text-right control-label col-form-label">Message</label>
                                        <div className="col-sm-9">
                                            <textarea className="form-control" name="message" defaultValue={""} onChange={(e) => getValue(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top">
                                    <div className="card-body">
                                        <button type="submit" className="btn btn-primary">Add Admin</button>
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
    )
}

export default Add_book;