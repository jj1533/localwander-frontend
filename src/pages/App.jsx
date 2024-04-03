import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const App = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const response = await axios.get('http://localhost:3000/logout');
            if (response.data.message === 'Logged out') {
                // Redirect to the login page upon successful logout
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
            alert("Logout failed");
        }
    };
    return (
        <div className='h-[100vh] w-[100%] flex justify-center items-center'>
            <h1 className='text-[50px]'>Welcome Back!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default App;
