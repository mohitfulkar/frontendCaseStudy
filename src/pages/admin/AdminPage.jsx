import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../components/style.css";
import AdminNavbar from "../../components/admin/AdminNavbar";
import CardAdmin from "../../components/admin/CardAdmin";
import { loadProfiles } from "../../redux/features/adminSlices";
import AdminLowerUserNavbar from "../../components/admin/AdminLowerNavbar.jsx";

const AdminPage = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const profiles = useSelector((state) => state.admin.profiles);
  
  useEffect(() => {
    dispatch(loadProfiles());
  }, [dispatch]);

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
      <AdminNavbar />
      <AdminLowerUserNavbar setSearchTerm={setSearchTerm} />
      <CardAdmin profiles={filteredProfiles} />
    </div>
  );
};

export default AdminPage;
