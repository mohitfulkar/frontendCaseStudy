import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/features/adminSlices"; // Import the updateProfile action from your Redux slice
import "../../components/style.css";

const UpdateCard = ({ existingProfile }) => {
  const dispatch = useDispatch();

  // Initialize form state with existing profile data
  const [profileDetails, setProfileDetails] = useState({
    id: existingProfile.id,
    name: "",
    description: "",
    photo: "",
    contact: "",
    interests: "",
    linkedin: "",
    twitter: "",
    github: "",
    latitude: "",
    longitude: "",
    location: "",
    aboutMe: "",
  });

  // Populate form with existing data
  useEffect(() => {
    if (existingProfile) {
      const {
        id,
        name,
        description,
        photo,
        contact,
        interests,
        socialMedia,
        coordinates,
        location,
        aboutMe,
      } = existingProfile;

      setProfileDetails({
        id,
        name,
        description,
        photo,
        contact,
        interests,
        linkedin: socialMedia.linkedin,
        twitter: socialMedia.twitter,
        github: socialMedia.github,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        location,
      });
    }
  }, [existingProfile]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails({ ...profileDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfileData = {
      name: profileDetails.name,
      description: profileDetails.description,
      photo: profileDetails.photo,
      contact: profileDetails.contact,
      interests: profileDetails.interests,
      socialMedia: {
        linkedin: profileDetails.linkedin,
        twitter: profileDetails.twitter,
        github: profileDetails.github,
      },
      coordinates: {
        latitude: parseFloat(profileDetails.latitude),
        longitude: parseFloat(profileDetails.longitude),
      },
      location: profileDetails.location,
      aboutMe: {
        text: profileDetails.aboutMe,
      },
    };

    // Dispatch the updateProfile action
    dispatch(
      updateProfile({ id: profileDetails.id, updatedData: updatedProfileData })
    );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" update-card-form max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg  overflow-y-auto"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Update Profile
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name:</label>
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
              value={profileDetails.linkedin}
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
              value={profileDetails.twitter}
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
              value={profileDetails.github}
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
              value={profileDetails.latitude}
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
              value={profileDetails.longitude}
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

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Hobbies (comma separated):
          </label>
          <input
            type="text"
            name="hobbies"
            value={profileDetails.hobbies}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateCard;
