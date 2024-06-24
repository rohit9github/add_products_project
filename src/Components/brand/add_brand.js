import { useEffect, useState } from "react";



function Brand() {
    let [cate, setCate] = useState([]);
    let [subcate, setSubcate] = useState([]);
    let [brand, setBrand] = useState({});


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
        let data = { ...brand, [name]: value }
        console.log(data);
        if (name == "category_name") {
            fetch("http://localhost:3000/subcategory/?category_name=" + value, {
                method: "get"
            }).then(async (res) => {
                let data = await res.json();
                setSubcate(data);
            })
        } 
            setBrand(data);
        
    }

    let submitData = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/brand", {
            method: "post",
            body: JSON.stringify(brand)
        }).then((res) => {
            alert("brand is added");
            setBrand({});
            getData();
        })
    }
    console.log(brand);
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
                                        <h4 className="card-title">Add-Brand</h4>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Select Category</label>
                                            <div className="col-sm-9">

                                                <select className="form-control" name="category_name" value={brand.category_name?brand.category_name:""} onChange={(e) => getValue(e)}>
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
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Select Sub-Category</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" name="subcategory" value={brand.subcategory?brand.subcategory:""} onChange={(e) => getValue(e)}>
                                                    <option>Select Sub-Category</option>
                                                    {subcate.map((v, i) => {
                                                        return (
                                                            <option value={v.subcategory}>{v.subcategory}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Brand</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="brand" value={brand.brand?brand.brand:""} className="form-control" id="fname" placeholder="Brand Name Here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top">
                                        <div className="card-body">
                                            <button type="submit" className="btn btn-primary">Add Brand</button>
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

export default Brand;