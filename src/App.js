import React from 'react';
// import logo from './logo.svg';
import FunctionalComp from './Components/FunctionalComp';
import { ClassComp, ClassComp1 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

import './App.css';

function App() {
  return (
    <div>
      <h1>Hello Simplilearn</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FunctionalComp />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
      
    </div>
  
  )
}

export default App;
