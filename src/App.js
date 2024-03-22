import React, { useEffect, useState } from 'react';
import './App.css';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import Template3 from './Templates/Template3';
import Template4 from './Templates/Template4';


const App = () => {
  let currentUrl = window.location.pathname;
  console.log(currentUrl);
  return (
    <>
    <Template1/>
    </>
  );
};

export default App;
