import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "./axiosConfig";

const TripInterface = () => {
  const { tripid } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [updatedTrip, setUpdatedTrip] = useState(null);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axiosInstance.get(`/trips/show/${tripid}`);
        setTrip(response.data);
        // Set default values for input fields with dates from the database
        setUpdatedTrip(response.data);
      } catch (error) {
        console.error("Error fetching trip:", error);
      }
    };

    fetchTrip();

    // Add event listener for beforeunload when component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [tripid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTrip({ ...updatedTrip, [name]: value });
    setIsDirty(true); // Mark changes as dirty
  };

  const handleUpdateTrip = async () => {
    try {
      await axiosInstance.put(`/trips/edit/${tripid}`, updatedTrip);
      // After successful update, navigate back to trips page or do any other action
      navigate("/app");
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  };

  const handleBeforeUnload = (e) => {
    if (isDirty) {
      // Cancel the default event (leaving the page)
      e.preventDefault();
      // Prompt user before leaving if changes are not saved
      e.returnValue = "";
    }
  };

  const handleLeavePage = () => {
    if (isDirty) {
      // Prompt user before leaving if changes are not saved
      const confirmLeave = window.confirm(
        "Are you sure you want to leave? Changes will not be saved."
      );
      if (!confirmLeave) {
        return; // Stay on the page if user cancels
      }
      // Save changes if user confirms to leave
      handleUpdateTrip();
    }
    // Navigate away if changes are saved or user confirms to leave
    navigate("/app");
  };

  return (
    <div>
      {trip ? (
        <div className="flex flex-col">
          <div className="w-[100vw] flex text-[2rem] justify-center items-center py-5">
            <div className="flex  items-center justify-start w-[30%]">
              <p className="text-[2rem]">Trip Name :</p>
              <input
                type="text"
                name="title"
                value={updatedTrip.title}
                onChange={handleChange}
                className="w-[30%]"
              />
            </div>
            <div className="flex items-center  justify-between mr-10">
              <div className="flex items-center">
                <p>Start Date:</p>
                <input
                  type="date"
                  name="startDate"
                  value={updatedTrip.startDate.split("T")[0]} // Extracting only the date part
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center">
                <p>End Date:</p>
                <input
                  type="date"
                  name="endDate"
                  value={updatedTrip.endDate.split("T")[0]} // Extracting only the date part
                  onChange={handleChange}
                />
              </div>
              <p>Duration: {updatedTrip.duration} Days</p>
            </div>
            <button
              onClick={handleUpdateTrip}
              className="bg-green-500 p-4 rounded-xl"
            >
              Update Trip
            </button>
          </div>

          <p>Location:</p>
          <input
            type="text"
            name="location"
            value={updatedTrip.location}
            onChange={handleChange}
          />
          <button onClick={handleLeavePage}>Leave Page</button>
        </div>
      ) : (
        <p>Loading trip data...</p>
      )}
    </div>
  );
};

export default TripInterface;
