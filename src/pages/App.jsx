import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import logo from "../assets/images/logo.jpg";
import taj from "../assets/images/tajmahal.jpg";
import user from "../assets/images/user.jpg";
import redfort from "../assets/images/redfort.jpg";
import backwater from "../assets/images/backwater.jpg";
import axios from "axios";
import axiosInstance from "./axiosConfig";
const App = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const handleLogout = async () => {
    try {
      const response = await axiosInstance.get(
        "http://localhost:3000/auth/logout"
      );

      if (response.status === 200) {
        navigate("/home"); // Redirect to the home page after successful logout
      } else {
        alert("Logout failed"); // Handle other response statuses (e.g., 401)
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed");
    }
  };
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get("http://localhost:3000/trips/show", {
          withCredentials: true,
        });

        if (response.data) {
          setTrips(response.data);
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };
    fetchTrips();
  }, []);

  const handleNewTripClick = () => {
    navigate("createTrip"); // Navigate to the '/createTrip' route
  };
  return (
    <div>
      <div className="h-[15vh] w-[100%] flex justify-between items-center p-10">
        <img src={logo} width="90" height="100" />
        <h1 className="text-[3rem] font-semibold">Local Wanderer</h1>

        <p
          className="rounded-2xl  hover:underline underline-offset-8 text-[1.5rem] cursor-pointer"
          onClick={handleLogout}
        >
          Logout 👋
        </p>
      </div>
      <div className="flex width-[100vw] justify-center py-[2rem]">
        <p className="text-[2rem]">Welcome Back! Fellow Traveller 😎</p>
      </div>

      <div className="flex justify-center w-[100vw]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[3rem] font-semibold underline underline-offset-4">
            Your Trips ✈️
          </p>
          <div className="flex flex-col">
            {trips.map((trip) => (
              <div>
                <p>{trip.key}</p>
                <p className="text-[2rem]">{trip.title}</p>
              </div>
            ))}
          </div>

          <button className="b1" onClick={handleNewTripClick}>
            +new trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
