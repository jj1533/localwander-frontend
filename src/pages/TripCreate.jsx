import { useState } from 'react';
import axios from 'axios';
import './TripCreate.css';
const CreateTrip = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset error state
        setError('');
        setLoading(true);

        try {
            // Make API request to create a new trip
            const response = await axios.post('http://localhost:3000/trips/create', {
                title,
                location,
                startDate,
                endDate
            }, { withCredentials: true });

            // Handle success
            console.log('Trip created:', response.data);
            alert('Trip created successfully');

            // Reset form fields
            setTitle('');
            setLocation('');
            setStartDate('');
            setEndDate('');
        } catch (error) {
            // Handle error
            console.error('Error creating trip:', error);
            setError('Failed to create trip. Please try again.');
        }

        setLoading(false);
    };

    return (
        <div className='container flex justify-center'>

            <form onSubmit={handleSubmit}>
                <h2 className='text-[20px] underline underline-offset-8 pb-5'>Create a
                    New Trip</h2>
                <div className="form-group">
                    <label>Trip Name:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <br />
                <label>
                    Location:
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </label>
                <br />
                <label>
                    Start Date:
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </label>
                <br />
                <label>
                    End Date:
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                </label>
                <br />
                <button className="bg-green-400 p-5 rounded-lg" type="submit" disabled={loading}>Create Trip</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default CreateTrip;
