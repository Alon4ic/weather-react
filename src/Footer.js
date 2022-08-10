import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <div className="source-code">
      <a
        className="source-code__link"
        href="https://github.com/Alon4ic/weather-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Application source code,
      </a>
      <a
        className="source-code__creator"
        href="https://www.linkedin.com/in/olena-redko-673903146/"
        target="_blank"
        rel="noopener noreferrer"
      >
        by <span className="my-name">Olena Redko</span>
      </a>
    </div>
  );
}