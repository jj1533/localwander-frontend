import './Hero.css'
import bgVideo from '../assets/video/bagvid.mp4'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
export default function Hero() {
    return (
        <div>
            <div className="showcase">
                <header>
                    <Navbar />
                </header>
                <video src={bgVideo} muted loop autoPlay className="bgvid"></video>
                <div className="overlay"></div>
                <div className="text">
                    <h3>LocalWanderer</h3>
                    <h4>Your Personal Travel Partner</h4>
                    <h1 className='text-[22px] w-[50%] mb-5'>Your Passport to Effortless Travel. Seamlessly integrate
                        budgeting, planning, and exploration for stress-free journeys,
                        ensuring a seamless travel experience and the joy of discovery..</h1>
                    <Link to='/login'><a href="#" className='font-bold'>Start Planning</a></Link>
                </div>
            </div>
        </div>
    )
}