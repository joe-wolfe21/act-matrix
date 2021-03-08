import React from "react";
import emptyMatrix from "../images/act-matrix-blank.png";

const CompletedMatrix = ({ bottomRight, bottomLeft, topLeft, topRight }) => (
  <div className="result">
    <img className="act-matrix" src={emptyMatrix} alt="completed act matrix" />
    <div className="bottom-right">{bottomRight}</div>
    <div className="bottom-left">{bottomLeft}</div>
    <div className="top-left">{topLeft}</div>
    <div className="top-right">{topRight}</div>
  </div>
);

export default CompletedMatrix;
