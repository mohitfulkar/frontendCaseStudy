import React from "react";
import "../../components/style.css";
import { useDispatch } from "react-redux";
import { deleteProfile } from "../../redux/features/adminSlices";
import { useNavigate } from "react-router-dom";

const UpdateAboutMe = ({ profile, onUpdateClick }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      dispatch(deleteProfile(id));
      navigate("/admin");
    }
  };
  return (
    <div className="about-me h-screen p-6 pt-24 bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded-lg">
      <h1 className="text-4xl text-white text-center font-bold mb-8 text-shadow-lg">
        About Me
      </h1>
      <div className="about-me-details space-y-6 text-xl">
        <p className="text-white">
          <span className="font-semibold">
            Contact:
            <br />
          </span>{" "}
          {profile.contact}
        </p>
        <p className="text-white">
          <span className="font-semibold">Hobbies:</span> <br />
          {profile.interests}
        </p>
        <p className="text-white">
          <span className="font-semibold">Address:</span> <br />
          {profile.location}
        </p>

        <div className=" flex justify-center items-center space-x-3">
          <button className="sum-btn  " onClick={onUpdateClick}>
            Update
          </button>
          <button
            className="delete-btn"
            onClick={() => handleDelete(profile.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAboutMe;
