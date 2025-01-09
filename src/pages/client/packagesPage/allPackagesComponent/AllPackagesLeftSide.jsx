import React, { useState } from "react";

const AllPackagesLeftSide = () => {
  const [selectedOption, setSelectedOption] = useState("All Courses");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getLabelStyle = (option) =>
    selectedOption === option ? "text-blue-500 font-bold" : "text-black";

  return (
    <div className=" w-2/12 text-xl">
      <div className="m-2">
        <button className="p-2 w-full text-center border border-main-color">
          Share
        </button>
      </div>
      <div className="mx-4">
      <label className={getLabelStyle("All Courses")}>
        <input
          type="radio"
          value="All Courses"
          checked={selectedOption === "All Courses"}
          onChange={handleOptionChange}
          className="mr-2"
        />
        All Courses
      </label>
      <br />
      <label className={getLabelStyle("Online")}>
        <input
          type="radio"
          value="Online"
          checked={selectedOption === "Online"}
          onChange={handleOptionChange}
          className="mr-2"
        />
        Online
      </label>
      <br />
      <label className={getLabelStyle("Offline")}>
        <input
          type="radio"
          value="Offline"
          checked={selectedOption === "Offline"}
          onChange={handleOptionChange}
          className="mr-2"
        />
        Offline
      </label>
      <br />
      <label className={getLabelStyle("Corporate")}>
        <input
          type="radio"
          value="Corporate"
          checked={selectedOption === "Corporate"}
          onChange={handleOptionChange}
          className="mr-2"
        />
        Corporate
      </label>
      </div>
    </div>
  );
};

export default AllPackagesLeftSide;
