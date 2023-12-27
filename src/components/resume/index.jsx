import React from "react";
import Card from "./card";
import "./resume.css";

const Resume = () => {
  return (
    <section className="resume__section section">
      {/* Header */}
      <div className="section__header container">
        <h3>My Resume</h3>
        <h2>My Journey</h2>
        <div className="resume__filter-buttons flex">
          <a className="btn btn-filter active">Education.</a>
          <a className="btn btn-filter">Experience.</a>
        </div>
      </div>
      <div className="resume__container container flex">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Resume;
