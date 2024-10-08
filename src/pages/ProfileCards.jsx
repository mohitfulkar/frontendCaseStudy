import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LowerUserNavbar from "../components/user/LowerUserNavbar";
import Card from "../components/user/Card";
import "../components/style.css";
import { loadProfiles } from "../redux/features/adminSlices";
import ProgressSpinner from "../components/ProgressSpinner";

const ProfileCards = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        await dispatch(loadProfiles());
      } catch (err) {
        setError("Failed to load profiles");
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [dispatch]);

  const profiles = useSelector((state) => state.admin.profiles);

  if (loading) {
    return (
      <div>
        <ProgressSpinner />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (profile.description &&
        profile.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (profile.interests &&
        profile.interests.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (profile.contact &&
        profile.contact.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (profile.location &&
        profile.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <LowerUserNavbar setSearchTerm={setSearchTerm} />
      <Card profiles={filteredProfiles} />
    </div>
  );
};

export default ProfileCards;
