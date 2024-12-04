import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { green, red } from "@mui/material/colors";

import {
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { postSegmentData } from "../api";
import Navbar from "./Navbar";

const ModalSegmentMain = ({ setIsModalOpen, isModalOpen }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [segmentName, setSegmentName] = useState("");
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedSchemas, setSelectedSchemas] = useState([]);

  console.log(selectedOption)
  console.log(selectedSchemas, "selectedSchemas");
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const segmentList = [
    { label: "First name", value: "first_name" },
    { label: "Last name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account", value: "account" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];

  const handleSave = () => {
    const savedSegment = {
      segment_name: segmentName,
      schema: selectedSchemas,
    };
    dispatch(postSegmentData(savedSegment, setLoading));

    console.log(savedSegment);
    setSegmentName("");
    setSelectedOption({});
    setSelectedSchemas([]);
    setIsModalOpen(false);
  };

  const handleOptionSelect = (event) => {
    console.log(event);
    const { value } = event.target;
    const name = segmentList.find((c) => c.value === value).label;
    setSelectedOption({ [value]: name });
  };

  const handleOptionDelete = (schema) => {
    setSelectedSchemas((prevSchemas) =>
      prevSchemas.filter((s) => s !== schema)
    );
  };

  const handleAddSchema = () => {
    if (selectedOption && Object.keys(selectedOption).length > 0) {
      if (
        !selectedSchemas.some(
          (schema) => schema[Object.keys(selectedOption)[0]]
        )
      ) {
        setSelectedSchemas((prevSchemas) => [...prevSchemas, selectedOption]);
        setSelectedOption("");
      }
    }
  };

  return (
    <div>
      {/* //text */}

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        PaperProps={{
          style: {
            margin: 0,
            maxHeight: "100%",
            borderRadius: 0,
            width: "40%",

            right: "0 !important",
            top: 0,
            height: "100%",
            alignItems: "right",
          },
        }}
      >
        <Navbar
          title="Saving Segment"
          onclick={() => {
            handleCloseModal();
          }}
        />

        <DialogTitle>
          <h4>Enter the Name of the Segment</h4>
        </DialogTitle>
        <DialogContent>
          <div className="segment-name-input-form">
            <TextField
              label="Name of the segment"
              placeholder="Enter the Name of the Segment"
              variant="outlined"
              value={segmentName}
              sx={{
                padding: "0 !important",
              }}
              onChange={(e) => setSegmentName(e.target.value)}
              InputLabelProps={{
                shrink: false,
              }}
            />
          </div>
          <div className="segment-title">
            <Typography variant="h6">
              To save your segment, you need to add the schemas build the query
            </Typography>
            <div className="chip-wrapper">
              <div className="green-chip chip">
                <button
                  className="rounded-chip"
                  style={{
                    backgroundColor: "#5ddb78",
                    color: "white",
                  }}
                ></button>
                <h5>-User Traits</h5>
              </div>

              <div className="red-chip chip">
                <button
                  className="rounded-chip"
                  style={{ backgroundColor: "#d24572", color: "white" }}
                ></button>
                <h5>-Group Traits</h5>
              </div>
            </div>
          </div>
          <div className="chip-input-remove-wrapper">
            {/* <div className=" chip">
              <button className="rounded-chip"></button>
            </div> */}

            {selectedSchemas.length > 0 && selectedSchemas && (
              <div className="selected-values-wrapper">
                <div className="remove-segment">
                  {selectedSchemas.map((schema, index) => (
                    <div className="selected-seg">
                      <div className="chip">
                        <button
                          className="rounded-chip"
                          style={{
                            backgroundColor: green[500],
                            color: "white",
                            marginRight: "10px",
                          }}
                        ></button>
                      </div>
                      <Select
                        labelId="dropdown-menu-label"
                        value={Object.keys(schema)[0]}
                        onChange={handleOptionSelect}
                        className="selected-container"
                        InputLabelProps={{
                          shrink: false,
                        }}
                      >
                        <MenuItem value="">Add Schema to segment</MenuItem>
                        <br />
                        <br />
                        {segmentList?.map((item, index) => (
                          <MenuItem
                            key={index}
                            value={item.value}
                            name={item.label}
                          >
                            {item.label}
                          </MenuItem>
                        ))}
                      </Select>
                      <Button
                        variant="text"
                        startIcon={<RemoveIcon />}
                        // onClick={() => handleOptionDelete(Object.keys(schema)[0])}
                        onClick={() => handleOptionDelete(schema)}
                      ></Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <FormControl>
              <div className="select-segment-main-form">

              
              {/* <InputLabel id="dropdown-menu-label">
                Add Schema to segment
              </InputLabel> */}
              <div className="chip">
                <button
                  className="rounded-chip"
                  style={{
                    backgroundColor: "#e3e5e7",
                    color: "white",
                    marginRight: "10px",
                  }}
                ></button>
              </div>
              <Select
                labelId="dropdown-menu-label"
                value={Object.keys(selectedOption)[0]}
                onChange={handleOptionSelect}
                className="selected-container"
                InputLabelProps={{
                  shrink: false,
                }}
              >
                <MenuItem value="">Add Schema to segment</MenuItem>
                {segmentList?.map((item, index) => (
                  <MenuItem key={index} value={item.value} name={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
              </div>
            </FormControl>
          </div>
          <div className="add-schema-btn">
            <Button
              variant="text"
              startIcon={<AddIcon />}
              style={{
                borderColor: "#8BC34A",
                color: "#8BC34A",
                borderRadius: "10px",
              }}
              onClick={handleAddSchema}
            >
              Add new schema
            </Button>
          </div>
        </DialogContent>
        <DialogActions className="dialog-action">
          <div className="save-btn-wrapper">
            <div className="save-btn">
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save the Segment
              </Button>
            </div>
            <div className="close-btn">
              <Button onClick={handleCloseModal}>cancel</Button>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalSegmentMain;
