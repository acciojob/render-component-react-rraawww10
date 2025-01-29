import React, { Component, useState } from "react";
import '../styles/App.css';

const MyComponent = () => {
  return (
    <p>I am learning React. My life is getting better.</p>
  );
};

const App = () => {
  return (
    <div id="root"> 
      <MyComponent />
    </div>
  );
}

export default App;
