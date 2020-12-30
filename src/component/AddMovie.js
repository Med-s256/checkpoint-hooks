
import React, { useState } from "react";
const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [posteUrl, setPosteUrl] = useState("");
  const [description, setDescription] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeRate = (e) => {
    setRate(e.target.value);
  };
  const changeUrl = (e) => {
    setPosteUrl(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  return (
    <div>
      <div className="content">
        <h1 style={{ textAlign: "center" }}>New movie</h1>
        <div className="list">
          <div className="sous-list">
            <span style={{ fontWeight: "bold" }}>Tiltle:</span>
            <input
              className="input"
              type="text"
              value={title}
              placeholder="enter a title of your new movie"
              onChange={changeTitle}
            />
          </div>
          <div className="sous-list">
            <span style={{ fontWeight: "bold" }}>Rate:</span>
            <input
              type="Number"
              className="input"
              value={rate}
              placeholder="enter the Rate of your"
              onChange={changeRate}
            />
          </div>
          <div className="sous-list">
            <label style={{ fontWeight: "bold" }}>posteURL:</label>
            <textarea
              cols="1"
              rows="3"
              className="input"
              value={posteUrl}
              placeholder="enter the URL of your new movie"
              onChange={changeUrl}
            />
          </div>
          <div className="sous-list">
            <label style={{ fontWeight: "bold" }}>Description:</label>
            <textarea
              cols="1"
              rows="6"
              className="input"
              value={description}
              placeholder="Describe your new movie"
              onChange={changeDescription}
            />
          </div>
        </div>
        <div style={{ textAlign: "center", paddingBottom: "5mm" }}>
          <button
            onClick={()=>addMovie(title, posteUrl, description, rate)}
            style={{
              color: "white",
              backgroundColor: "green",
              borderRadius: "5px",
            }}
          >
            Add movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
