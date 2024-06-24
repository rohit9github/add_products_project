import { useEffect, useState } from "react";
import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider";
import { json } from "react-router-dom";


function AddProducts() {
    let [cate, setCate] = useState([]);
    let [subcate, setSubcate] = useState([]);
    let [brand, setBrand] = useState([]);
    let [products, setProducts] = useState({});
    let [prSize, setPrsize] = useState([]);
    let [checked,setChecked] = useState();

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
        let data = { ...products, [name]: value }
        // console.log(data);
        let newData;
        if (name == "category_name") {
            fetch("http://localhost:3000/subcategory/?category_name=" + value, {
                method: "get"
            }).then(async (res) => {
                let data = await res.json();
                setSubcate(data);
            })
        }
        else if (name == "subcategory") {
            fetch("http://localhost:3000/brand/?subcategory=" + value, {
                method: "get"
            }).then(async (res) => {
                let data = await res.json();
                setBrand(data);
            })
        }

        else if (name == "size") {
            let productSize = e.target.checked ? [...prSize, value] : prSize.filter(item => item !== value)
            // prSize.filter();
            setPrsize(productSize);
            newData = { ...products, [name]: productSize }
            // console.log(newData);

        }

        setProducts({ ...data, ...newData });
        console.log(products);
    }
    console.log(products);

    let submitData = (e) => {
        e.preventDefault();
        console.log(products);
        fetch("http://localhost:3000/product", {
            method: "post",
            body: JSON.stringify(products)
        }).then((res) => {
            setProducts({});
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
                                        <h4 className="card-title">Add-Products</h4>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Select Category</label>
                                            <div className="col-sm-9">

                                                <select className="form-control" name="category_name" value={products.category_name ? products.category_name : ""} onChange={(e) => getValue(e)}>
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
                                                <select className="form-control" name="subcategory" value={products.subcategory ? products.subcategory : ""} onChange={(e) => getValue(e)}>
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
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Select Brand</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" name="brand" value={products.brand ? products.brand : ""} onChange={(e) => getValue(e)}>
                                                    <option>Select Brand</option>
                                                    {brand.map((v, i) => {
                                                        return (
                                                            <option value={v.brand}>{v.brand}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Product Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="title" value={products.title ? products.title : ""} className="form-control" id="fname" placeholder="Products Title Here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Description</label>
                                            <div className="col-sm-9">
                                                <textarea type="text" name="decs" value={products.decs ? products.decs : ""} className="form-control" id="fname" placeholder="Description " onChange={(e) => getValue(e)} > </textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Price</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="price" value={products.price ? products.price : ""} className="form-control" id="fname" placeholder="price here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Old-Price</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="oprice" value={products.oprice ? products.oprice : ""} className="form-control" id="fname" placeholder="old price here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Stocks</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="stocks" value={products.stocks ? products.stocks : ""} className="form-control" id="fname" placeholder="Stocks here" onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Size</label>
                                            <div className="col-sm-9">
                                                <input type="checkbox" name="size" value="8" onChange={(e) => getValue(e)} /><span>8</span>
                                                <input type="checkbox" name="size" value="9" onChange={(e) => getValue(e)} /><span>9</span>
                                                <input type="checkbox" name="size" value="10" onChange={(e) => getValue(e)} /><span>10</span>
                                                <input type="checkbox" name="size" value="11" onChange={(e) => getValue(e)} /><span>11</span>
                                                <input type="checkbox" name="size" value="12" onChange={(e) => getValue(e)} /><span>12</span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Rating</label>
                                            <div className="col-sm-9">
                                                <select name="rating" onChange={(e) => getValue(e)} className="form-control" value={products.rating ? products.rating : ""}>
                                                    <option value={"1"}>1</option>
                                                    <option value={"2"}>2</option>
                                                    <option value={"3"}>3</option>
                                                    <option value={"4"}>4</option>
                                                    <option value={"5"}>5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Image</label>
                                            <div className="col-sm-9">
                                                <input type="text" name="path" value={products.path ? products.path : ""} className="form-control" id="fname" placeholder="Image Path " onChange={(e) => getValue(e)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top">
                                        <div className="card-body">
                                            <button type="submit" className="btn btn-primary">Add Products</button>
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

export default AddProducts;