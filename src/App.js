
import React from "react";
import "./index.css";
import Show from "./Show";

import Footer from "./Footer";

export default function App() {
  
  return (
    <div className="App">
      <div className="wraper">
        <div className="container">
          <Show defaultCity="Rivne" />
          <Footer />
        </div>
      </div>
    </div>
  );
}