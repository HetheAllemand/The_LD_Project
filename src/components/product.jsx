import { useEffect, useState } from 'react';
import './product.css'
import QuantityPicker from './quantityPicker';



function Product(props) {
    const [quantity, setQuantity] = useState(1);
    
    useEffect(function(){
        console.log("hello, Im a product!");
    }, []);

    function onQuantityChange(qty){
        console.log("new value" + qty);
        setQuantity(qty);

    }
    
    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function addProduct(){
        console.log("Adding" + quantity + " " + props.data.title);
    }

    return (
        <div className="product">
            <img src={"/images/" + props.data.image} alt=''></img>
            <h5>{props.data.title}</h5>

            <div className="prices">
            <label>$ { getTotal() }</label>
            {/* <label>${ props.data.price.toFixed(2)}</label> */}
            </div>


            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button onClick={addProduct} className='btn btn-sm btn-dark'>Add To Cart</button>
        </div>
    );
}

export default Product;