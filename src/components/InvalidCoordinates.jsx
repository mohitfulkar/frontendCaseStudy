import React from "react";

const InvalidCoordinates = () => {
  return (
    <div className="invalid-coordinates bg-red-100 text-red-600 border border-red-500 p-4 rounded-md text-center">
      <p className="text-lg font-semibold">Invalid Coordinates</p>
      <p>Please check the location data and try again.</p>
    </div>
  );
};

export default InvalidCoordinates;
