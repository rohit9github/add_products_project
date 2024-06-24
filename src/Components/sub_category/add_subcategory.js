import { useEffect, useState } from "react";



function Add_subcategory() {

    let [cate, setCate] = useState([]);
    let [subcategory, setSubcategory] = useState({});

    useEffect(() => {

        getData()
    }, []);

    let getData = () => {
        fetch("http://localhost:3000/category",
            {
                method: "get"
            }).then(async (res) => {
                let data = await res.json();
                setCate(data);
            })
    }

    let getValue = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setSubcategory({ ...subcategory, [name]: value });
    }

    let submitData = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/subcategory", {
            method: "post",
            body: JSON.stringify(subcategory)
        }).then((res) => {
            setSubcategory({});
            alert("subcategory is added");
            getData()
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
                                        <h4 className="card-title">Add-Sub-Category</h4>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Select Category</label>
                                            <div className="col-sm-9">

                                                <select className="form-control" name="category_name" value={subcategory.category_name?subcategory.category_name:""} onChange={(e) => getValue(e)}>
                                                    <option>Select Category</option>
                                                    {cate.map((v, i) => {
                                                        return (
                                                            <option value={v.category_name}>{v.category_name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Sub-Category</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="subcategory" value={subcategory.subcategory?subcategory.subcategory:""} className="form-control" id="fname" placeholder="Sub-Category Name Here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top">
                                        <div className="card-body">
                                            <button type="submit" className="btn btn-primary">Add Sub Category</button>
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

export default Add_subcategory;