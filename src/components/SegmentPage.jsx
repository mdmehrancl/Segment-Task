import React, { useState } from "react";
import { Button } from "@mui/material";
import ModalSegmentMain from "./Modal";
import SegmentTableMain from "./SegmentTable";
const SegmentPageMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <div className="container">
        <div className="button-wrapper " style={{ marginTop: "10px" }}>
          <Button onClick={handleOpenModal} variant="outlined">
            Save Segment
          </Button>
        </div>
        <div className="segment-table-wrapper">
          <h3 >Segment Table</h3>
          <br />
          <SegmentTableMain />
        </div>

        <ModalSegmentMain
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      </div>
    </div>
  );
};

export default SegmentPageMain;
