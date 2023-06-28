import { useEffect, useState } from 'react';
import Product from '../components/product';
import DataService from '../services/dataService';
import './catalog.css';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);

    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    }, []);

    async function loadCatalog() {
        let service = new DataService();
        let prods =await service.getProducts();
        setProducts(prods);
        setProdsToDisplay(prods);

        let cats = ["Electric Range", "Washing Machines", "Refrigerators"];
        setCategories(cats);
    }

    function filter(category){
        let list = [];
        for (let i=0; i< products.length; i++) {
            let prod = products[i];
            if(prod.category === category) {
                list.push(prod);
            }
        }

        setProdsToDisplay(list);
    }

    function clearFilter() {
        setProdsToDisplay(products);
    }
    
    return (
        <div className='catalog'>
            <h1>Low Depot</h1>
            {/* <h5>We have {products.length} products ready for you!</h5> */}

            <button onClick={clearFilter} className='btn btn-sm btn-dark btn-filter'>All</button>
            {categories.map(c => <button onClick={ () => filter(c) } className='btn btn-sm btn-dark btn-filter'>{c}</button>)}
            <br />

            {prodsToDisplay.map( p => <Product key={p._id} data={p}></Product> )}
        </div>
    );
}

export default Catalog;

