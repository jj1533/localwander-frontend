import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginBg from '../assets/images/login.png'
import { Link } from 'react-router-dom';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password,
            });
            if (response.data.message === 'Logged in') {
                // Redirect to the app page upon successful login
                navigate('/app');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex'>
            <div >
                <img className='h-[100vh] w-[80vw]' src={loginBg} />
            </div>
            <div className='flex justify-center items-center w-full'>
                <div className='flex flex-col items-center gap-[3rem]'>
                    <div className='flex flex-col gap-2 items-center'>
                        <h2 className='text-[35px] font-semibold border-b-2 border-blue-500 px-5'>Login</h2>
                        <h2 className='font-semibold text-[20px]'>Welcome back you've been missed!</h2>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-5'>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className=' py-4 pl-5 pr-[10rem] rounded-xl bg-gray-100 text-[20px]'
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className=' py-4 pl-5 pr-10 rounded-xl bg-gray-100 text-[20px]'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-3'>
                            <Link to='/register'><h1 className='underline underline-offset-4 font-semibold text-gray-500 hover:text-black'>Create a new Account ?</h1></Link>
                            <button onClick={handleLogin} className='text-[20px] font-bold bg-red-500 rounded-xl text-white py-2 px-12 hover:text-red-500 hover:bg-white border-red-500 border-2'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
