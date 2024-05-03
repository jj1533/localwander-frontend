import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import logo from '../assets/images/logo.jpg'
import taj from '../assets/images/tajmahal.jpg'
import map from '../assets/images/map.jpg'
import user from '../assets/images/user.jpg'
import redfort from '../assets/images/redfort.jpg'
import backwater from '../assets/images/backwater.jpg'
import axios from 'axios';
const App = () => {
    const navigate = useNavigate();
    const [trips, setTrips] = useState([]);
    const handleLogout = async () => {
        try {
            const response = await axios.get('http://localhost:3000/auth/logout');

            if (response.status === 200) {
                navigate('/home'); // Redirect to the home page after successful logout
            } else {
                alert('Logout failed'); // Handle other response statuses (e.g., 401)
            }
        } catch (error) {
            console.error('Error during logout:', error);
            alert('Logout failed');
        }
    };
    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await axios.get('http://localhost:3000/trips/show', {
                    withCredentials: true,
                });

                if (response.data) {
                    setTrips(response.data);
                }
            } catch (error) {
                console.error('Error fetching trips:', error);
            }
        };
        fetchTrips();
    }, []);

    const handleNewTripClick = () => {
        navigate('createTrip'); // Navigate to the '/createTrip' route
    };
    return (<div>
        <div className='h-[10vh] w-[100%] flex justify-between items-center p-10'>
            <div className="box-image">
                <div className="logo-image">
                    <img src={logo} width="90" height="100" />
                </div>
            </div>
            <h1 className='text-[20px]'>Welcome Back!</h1>
        </div>
        <div className="flex justify-center">

            <div className='flex items-center gap-[3rem]'>
                <div className="n1 mr-10 rounded-2xl">
                    Home
                </div>
                <div className="n1 mr-10 rounded-2xl">
                    About us
                </div>
                <div className="n1 rounded-2xl" onClick={handleLogout}>
                    Logout
                </div >
            </div>
        </div>

        <div className="middle-section">
            <div className="first-section">
                <div className="user-image">
                    <img src={user} width="130" height="140" />
                </div>
                <div className="user-details">
                    <div className="ud">
                        Travel Badge:
                    </div>
                    <div className="ud">
                        Trips Planned:
                    </div>
                    <div className="ud1">
                        Ongoing trips:
                    </div>
                </div>
            </div>

            <div className="second-section flex gap-[5rem] p-[5rem]">
                <div className="map-section">
                    <img src={map} width="200" height="180" />
                </div>
                <div className='flex'>
                    <div>
                        <div className="your-trip flex flex-col justify-center items-center">
                            <h1 className="t1">Your trips</h1>
                            {trips.map((trip) => (
                                <p className="t2">{trip.title}</p>
                            ))}

                        </div>
                        <div className="new-trip">
                            <button className="b1" onClick={handleNewTripClick}>+new trip</button>
                        </div>
                    </div>

                </div>


                <div className="your-guides">
                    <h1 className="t1">Your guides</h1>
                    <p className="t2">You don't have any guides yet.<span>Find a guide</span></p>
                </div>

                <div className="new-guide">
                    <button className="b1">+new guide</button>
                </div>

            </div>
        </div>
        <div className="explore-section">
            <div className="explore2">
                Explore
                <div className="explore-image flex">
                    <img src={backwater} className="ii" width="200" height="180" />
                    <img src={taj} className="ii" width="200" height="180" />
                    <img src={redfort} className="ii" width="200" height="180" />
                </div>
                <div className="caption">
                    <div className="c1">
                        Backwaters of kerala
                    </div>
                    <div className="c2">
                        Taj Mahal in Agra
                    </div>
                    <div className="c3">
                        Red Fort in Delhi
                    </div>
                </div>
            </div>
        </div>

        <div className="last-section">
            view popular experiences
            <div className="find">
                <button className="b1">Find Travellers</button>
            </div>
        </div>
    </div>


    );
};

export default App;
