import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <div className="section">
                <div className="left-section">
                    <img className="logo" src="logoWithText.png" />
                    <img className="toggle" src="bars-solid.svg" />
                </div>
                <div className="middle-section">
                    <p className="nl">Home</p>
                    <p className="n1">Travel Guides</p>
                    <p className="nl">Hotels</p>
                    <p className="nl">Deals</p>
                </div>

                <div className="right-section">
                    <Link to='login'><button className="button1">Log in</button></Link>
                    <button className="button2">Sign Up</button>
                </div>
            </div>
        </div>
    )
}