import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <div className="section">
                <div className="left-section">
                    <h1 className='font-bold text-[25px] pl-10'>LocalWanderer</h1>
                    <img className="toggle" src="bars-solid.svg" />
                </div>
                {/* <div className="middle-section gap-10">
                    <p className="nl">Home</p>
                    <p className="n1">Travel Guides</p>
                    <p className="nl">Hotels</p>
                    <p className="nl">Deals</p>
                </div> */}

                <div className="right-section">
                    <Link to='login'><button className="button1 font-bold text-[18px]">Log in</button></Link>
                    <Link to='register'><button className="button2 font-bold text-[18px]">Sign Up</button></Link>
                </div>
            </div>
        </div>
    )
}