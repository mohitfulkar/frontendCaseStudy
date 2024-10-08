import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../style.css";

const Card = ({ profiles }) => {
  console.log(profiles);

  return (
    <div className="flex flex-wrap justify-center">
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <Link key={profile.id} to={`/profile/${profile.id}`}>
            <div className="card text-center m-4 p-4  ">
              <img
                src={profile.photo}
                alt={profile.name}
                className="card-img h-24 w-24 ml-12 mb-6"
              />
              <label className="font-bold">{profile.name}</label>
              <p className="mb-8">{profile.description}</p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center">No profiles found.</p>
      )}
    </div>
  );
};

export default Card;
