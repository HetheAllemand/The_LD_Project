import "./about.css";
import { useState } from 'react';

function About() {
    const [visible, setVisible] = useState(false);

    function getEmail() {
        if (visible) {
            return "LowDepot14@gmail.com";
        }
        else {
            return "";
        }
    }

    function toggleEmail() {
        setVisible(!visible);
    }

    return (
        <div className="about">
            <h2>About Us</h2>
            <h2>Edgar & Hethe</h2>
            <h2>1-800-585-8545</h2>
            <h6>{getEmail()}</h6>
            <button className="btn btn-sm btn-dark" onClick={toggleEmail}>Click to see Email</button>

            <hr />

        </div>
    );
}

export default About;