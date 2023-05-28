import { useEffect } from 'react';
import './product.css'
import QuantityPicker from './quantityPicker';


function Product(props) {

    useEffect(function(){
        console.log("hello, Im a product!");
    }, []);
    return (
        <div className="product">
            <img src={"/images/" + props.data.image} alt=''></img>
            <h5>{props.data.title}</h5>

            <div className="prices">
            <label>${props.data.price.toFixed(2)}</label>
            <label>${props.data.price.toFixed(2)}</label>
            </div>


            <QuantityPicker></QuantityPicker>
            <button className='btn btn-sm btn-dark'>Add To Cart</button>
        </div>
    );
}

export default Product;