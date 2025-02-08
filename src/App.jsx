import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [userData, setUserData] = useState({
    fName: "Unknown",
    lName: "Unknown",
    gender: "Prefer Not to Say",
    phone: "0101010101",
    email: "unknown@example.com",
    image: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-850.jpg?ga=GA1.1.2015252788.1738990088&semt=ais_incoming",
    location: {
      city: "Unknown",
      country: "Unknown"
    },
    dob: { age: 0 }
  });

  const { data, loading, error } = useFetch("https://randomuser.me/api/?page=1&results=1&seed=abc");

  useEffect(() => {
    if (data) {
      const user = data.results[0];
      setUserData({
        fName: user.name.first,
        lName: user.name.last,
        gender: user.gender,
        phone: user.phone,
        email: user.email,
        image: user.picture.large,
        location: {
          city: user.location.city,
          country: user.location.country
        },
        dob: user.dob
      });
    }
  }, [data]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-300 to-pink-300">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-300 to-pink-300">
      <div className="text-center font-bold text-2xl text-red-500 bg-white p-8 rounded-lg shadow-lg">
        Error: {error.message}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 flex justify-center items-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm w-full transform transition-transform duration-500 ease-in-out hover:rotate-y-15">
        <div className="relative h-64 bg-gradient-to-r from-purple-600 to-pink-500 flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <img
            src={userData.image}
            alt={`${userData.fName} ${userData.lName}`}
            className="relative z-10 w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
        <div className="pt-8 pb-6 px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{`${userData.fName} ${userData.lName}`}</h2>
          <p className="text-purple-500 text-sm mb-4 font-medium">{userData.email}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-purple-100 p-3 rounded-lg shadow-sm">
              <p className="text-purple-800 font-semibold">Gender</p>
              <p className="text-gray-700 capitalize">{userData.gender}</p>
            </div>
            <div className="bg-pink-100 p-3 rounded-lg shadow-sm">
              <p className="text-pink-800 font-semibold">Age</p>
              <p className="text-gray-700">{userData.dob.age} years</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg shadow-sm">
              <p className="text-yellow-800 font-semibold">Phone</p>
              <p className="text-gray-700">{userData.phone}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg shadow-sm">
              <p className="text-blue-800 font-semibold">Location</p>
              <p className="text-gray-700">{`${userData.location.city}, ${userData.location.country}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
