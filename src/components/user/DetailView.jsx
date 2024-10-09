import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useParams } from "react-router-dom";
import "../style.css";
import PicCard from "./detailView/PicCard";
import AboutMe from "./detailView/AboutMe";
import MapComponent from "./MapComponent";
import UserNavbar from "./UserNavbar";
import { loadProfiles } from "../../redux/features/adminSlices";
import NoProfileFound from "../NoProfileFound";

const DetailView = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.admin.profiles);
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadProfiles());
  }, [dispatch]);
  const [showMap, setShowMap] = useState(false);
  const [animateMap, setAnimateMap] = useState(false);

  const handleSummaryClick = () => {
    if (showMap) {
      setAnimateMap(false);
      setTimeout(() => setShowMap(false), 300);
    } else {
      setShowMap(true);
      setAnimateMap(true);
    }
  };

  const profile = profiles.find((profile) => profile.id === Number(id));
  console.log(profile);

  return (
    <>
      <UserNavbar profile={profile} />
      <div className="detail-view bg-green-300">
        {profile ? (
          <div>
            <div className="heading h-16 w-full text-center text-white text-3xl pt-4">
              Profile Details
            </div>

            <div
              className={`details flex justify-center p-2 ${
                showMap ? "space-x-4" : ""
              }`}
            >
              <div className="flex space-x-4">
                <PicCard profile={profile} />
                <AboutMe
                  profile={profile}
                  onSummaryClick={handleSummaryClick}
                />
              </div>

              {showMap && (
                <div
                  className={`mapComponent flex-1 ${
                    animateMap ? "map-animate" : ""
                  }`}
                  style={{ height: "400px", width: "100%" }}
                >
                  <MapComponent
                    longitude={profile.coordinates.longitude}
                    latitude={profile.coordinates.latitude}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>
            <NoProfileFound />
          </p>
        )}
      </div>
    </>
  );
};

export default DetailView;
