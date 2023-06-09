import { useState } from "react";
import "./adminProducts.css";
import DataService from "../services/dataService";

function AdminProducts() {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    function textChanged(e){
        let text = e.target.value;
        let attr = e.target.name;

        let copy = {...product};
        copy[attr] = text;
        setProduct(copy);
    }

    function saveProduct() {
        let fixedProduct = {...product};
        fixedProduct.price = parseFloat(fixedProduct.price);

        let service = new DataService();
        service.saveProduct(fixedProduct);


        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }
    return (
        <div className="ad-products">
            <h3>Create New Product</h3>


            <div className="my-control">
                <label className="form-label">Title:</label>
                <input name="title" onChange={textChanged} className="form-control" type="text" />
            </div>

            <div className="my-control">
                <label className="form-label">Category:</label>
                <input name="category" onChange={textChanged} className="form-control" type="text" />
            </div>

            <div className="my-control">
                <label className="form-label">Image Name:</label>
                <input name="image" onChange={textChanged} className="form-control" type="text" />
            </div>

            <div className="my-control">
                <label className="form-label">Price:</label>
                <input name="price" onChange={textChanged} className="form-control" type="text" />
            </div>

            <div className="my-control">
                <button onClick={saveProduct} className="btn btn-sm btn-dark">Save Product</button>
            </div>

            <ul>
            {allProducts.map(prod => <li key={prod.title}>{prod.title}</li>)}
            </ul>
        </div>
    )
}

export default AdminProducts;