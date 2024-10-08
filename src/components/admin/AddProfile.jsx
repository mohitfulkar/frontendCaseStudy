import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addProfile } from "../../redux/features/adminSlices";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import AdminNavbar from "./AdminNavbar";
import "../../components/style.css";

const AddProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileDetails, setProfileDetails] = useState({
    id: 0,
    name: "",
    description: "",
    photo: "",
    contact: "",
    interests: "",
    socialMedia: {
      linkedin: "",
      twitter: "",
      github: "",
    },
    coordinates: {
      latitude: "",
      longitude: "",
    },
    location: "",
    aboutMe: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      socialMedia: ["linkedin", "twitter", "github"].includes(name)
        ? { ...prevDetails.socialMedia, [name]: value }
        : prevDetails.socialMedia,
      coordinates: ["latitude", "longitude"].includes(name)
        ? { ...prevDetails.coordinates, [name]: value }
        : prevDetails.coordinates,
      [name]: ![
        "linkedin",
        "twitter",
        "github",
        "latitude",
        "longitude",
      ].includes(name)
        ? name === "id"
          ? parseInt(value, 10)
          : value
        : prevDetails[name],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting profile: ", profileDetails);

    dispatch(addProfile(profileDetails));

    setProfileDetails({
      id: 0,
      name: "",
      description: "",
      photo: "",
      contact: "",
      interests: "",
      socialMedia: {
        linkedin: "",
        twitter: "",
        github: "",
      },
      coordinates: {
        latitude: "",
        longitude: "",
      },
      location: "",
      aboutMe: "",
    });
    navigate("/admin");
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-green-200">
        <form
          onSubmit={handleSubmit}
          className="add-profile max-w-3xl mx-auto bg-green-200 p-6  shadow-lg rounded-lg overflow-y-auto"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Add Profile
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">ID:</label>
            <input
              type="number"
              name="id"
              value={profileDetails.id}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={profileDetails.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description:
            </label>
            <textarea
              name="description"
              value={profileDetails.description}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Photo URL:
            </label>
            <input
              type="url"
              name="photo"
              value={profileDetails.photo}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Contact:
            </label>
            <input
              type="email"
              name="contact"
              value={profileDetails.contact}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Interests:
            </label>
            <input
              type="text"
              name="interests"
              value={profileDetails.interests}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                LinkedIn:
              </label>
              <input
                type="url"
                name="linkedin"
                value={profileDetails.socialMedia.linkedin}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Twitter:
              </label>
              <input
                type="url"
                name="twitter"
                value={profileDetails.socialMedia.twitter}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                GitHub:
              </label>
              <input
                type="url"
                name="github"
                value={profileDetails.socialMedia.github}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Latitude:
              </label>
              <input
                type="number"
                name="latitude"
                value={profileDetails.coordinates.latitude}
                onChange={handleInputChange}
                step="any"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Longitude:
              </label>
              <input
                type="number"
                name="longitude"
                value={profileDetails.coordinates.longitude}
                onChange={handleInputChange}
                step="any"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Location:
            </label>
            <input
              type="text"
              name="location"
              value={profileDetails.location}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              About Me:
            </label>
            <textarea
              name="aboutMe"
              value={profileDetails.aboutMe}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
          >
            Add Profile
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProfile;
