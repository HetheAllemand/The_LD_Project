import "./breadcrumbs.css";

import {Link} from 'react-router-dom';

function Breadcrumb (){
    return (
        <div className="breadcrumbmain">
        <nav aria-label="breadcrumbmain">
            <ol class="breadcrumb">
            <li className="breadcrumb-item home"><Link to="./home">Home</Link></li>
            <li class="breadcrumb-item active hours"><Link to="./Notfound">Store Hours</Link></li>
            <li class="breadcrumb-item active credit" aria-current="page"><Link to="./Notfound">Apply For Credit Card</Link></li>
            <li class="breadcrumb-item active orders" aria-current="page"><Link to="./Notfound">Order Status</Link></li>
            </ol>
        </nav>
      </div>
    );
}

export default Breadcrumb;