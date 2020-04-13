import React from 'react';

import './App.css';

import ListStudent from './components/ListStudent/ListStudent';

const App = () => {
  return (
    <div className="container student_wapper">
      <h2 className="stydent__title" >List Students</h2>
      
      <ListStudent />
    </div>
  );
};
export default App;
