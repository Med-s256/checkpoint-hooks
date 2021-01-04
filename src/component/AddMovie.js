import { Link } from "react-router-dom";
import React, { useState } from "react";
const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [id, setId] = useState("");
  const [posteUrl, setPosteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [triler, setTriler] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeRate = (e) => {
    setRate(e.target.value);
  };
  const changeId = (e) => {
    setId(e.target.value);
  };
  const changeUrl = (e) => {
    setPosteUrl(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const changeTriler = (e) => {
    setTriler(e.target.value);
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
            
            <span style={{ fontWeight: "bold" }}>id:</span>
            <input
              type="number"
              className="input"
              value={id}
              placeholder="enter the Id of your"
              onChange={changeId}
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
              <label style={{ fontWeight: "bold" }}>Trailer:</label>
            <textarea
              cols="1"
              rows="3"
              className="input"
              value={triler}
              placeholder="Trailer movie"
              onChange={changeTriler}
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
          <Link to={`/`}><button
            onClick={()=>addMovie(title, posteUrl, description, rate,id, triler)}
            style={{
              color: "white",
              backgroundColor: "green",
              borderRadius: "5px",
              height:'30px'
            }}
          >
            Add movie
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
