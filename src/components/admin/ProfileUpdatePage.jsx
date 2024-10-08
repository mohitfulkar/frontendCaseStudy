import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "./AdminNavbar";
import UpdateCard from "./UpdateCard";
import { useParams } from "react-router-dom";
import PicCard from "../user/detailView/PicCard";
import UpdateAboutMe from "./UpdateAboutMe";
import { loadProfiles } from "../../redux/features/adminSlices";
import NoProfileFound from "../NoProfileFound";
import AdminLowerUserNavbar from "./AdminLowerNavbar.jsx";

const ProfileUpdatePage = () => {
  const profiles = useSelector((state) => state.admin.profiles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProfiles());
  }, [dispatch]);

  const [showUpdateCard, setShowUpdateCard] = useState(false);
  const [animateUpdateCard, setAnimateUpdateCard] = useState(false);
  const { id } = useParams();
  const profile = profiles.find((profile) => profile.id === Number(id));

  const handleUpdateClick = () => {
    if (showUpdateCard) {
      setAnimateUpdateCard(false);
      setTimeout(() => setShowUpdateCard(false), 300);
    } else {
      setShowUpdateCard(true);
      setAnimateUpdateCard(true);
    }
  };

  return (
    <>
      <AdminNavbar />
      <AdminLowerUserNavbar />
      <div className="detail-view bg-green-300 p-4 md:p-8 lg:p-10">
        {profile ? (
          <div>
            <div className="heading h-16 w-full text-center text-3xl pt-4">
              Profile Details
            </div>

            <div
              className={`details flex flex-col md:flex-row justify-center p-2 ${
                showUpdateCard ? "space-x-0 md:space-x-4" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <PicCard profile={profile} />
                <UpdateAboutMe
                  profile={profile}
                  onUpdateClick={handleUpdateClick}
                />
              </div>

              {showUpdateCard && (
                <div
                  className={`updateCard flex-1 ${
                    animateUpdateCard ? "updatecard-animate" : ""
                  } transition-all duration-300 h-96 w-full sm:w-80 md:w-96`} // Adjusted width for mobile
                >
                  <UpdateCard existingProfile={profile} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <NoProfileFound />
        )}
      </div>
    </>
  );
};

export default ProfileUpdatePage;
