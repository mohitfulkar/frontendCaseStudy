import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../style.css";

import NoProfileFound from "../NoProfileFound";

const CardAdmin = ({ profiles }) => {


  return (
    <div className="flex flex-wrap justify-center">
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <div key={profile.id} className="card text-center m-4 p-4  ">
            <Link to={`/admin/profile/${profile.id}`}>
              <img
                src={profile.photo}
                alt={profile.name}
                className="card-img h-24 w-24 ml-12 mb-6"
              />
              <label className="font-bold">{profile.name}</label>
              <p className="mb-4">{profile.description}</p>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center">
          <NoProfileFound />
        </p>
      )}
    </div>
  );
};

export default CardAdmin;
