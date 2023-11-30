import React from "react";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Russell
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Taiwan, specializing in front-end UI
          development through hands-on learning and building applications.
        </p>
      </div>
    </section>
  );
};

export default About;
