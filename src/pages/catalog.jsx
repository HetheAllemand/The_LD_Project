import { useEffect, useState } from 'react';
import Product from '../components/product';
import DataService from '../services/dataService';
import './catalog.css';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    }, []);

    function loadCatalog() {
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);

        let cats = ["Electric Range", "Wahing machines", "Bathroom", "Electric Range", "Kitchen", "Pluming", "Flooring"];
        setCategories(cats);
    }

    function majicTest() {
        console.log("Behold, the magic!!");
    }
    
    return (
        <div className='catalog'>
            <h1>Check out the Catalog</h1>
            <h5>We have {products.length} products ready for you!</h5>

            <button onClick={majicTest} className='btn btn-sm btn-dark'>Magic</button>
            <br />

            {categories.map(c => <button className='btn btn-sm btn-dark buttons'>{c}</button>)}
            <br />

            {products.map(p => <Product key={p._id} data={p}></Product> )}
        </div>
    );
}

export default Catalog;

