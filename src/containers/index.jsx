import React from "react";
import Navbar from "../components/Navbar";
import SegmentPageMain from "../components/SegmentPage";

const MainLayout = () => {
  return (
    <div className="section-wrapper">
      <Navbar title="View Audience" />
      <div className="main">
        <SegmentPageMain />
      </div>
    </div>
  );
};

export default MainLayout;
