import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';

import './stylesheet/styles.scss';

const App = (props) => {
  console.log('HI FROMm APP.JSX');
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default App;
