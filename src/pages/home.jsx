import "./home.css";
import {Link} from 'react-router-dom'

function Home(){
    return (
    <div className="home">
        <h1>Welcome to The Low Depot</h1>

        <Link className='btn btn-dark' to="/catalog">Our New items for the week</Link>
    </div>
    );
}

export default Home;