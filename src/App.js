import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import HeaderText from './components/headerText';
import Advantage from './components/advantageComp';
import ResultBox from './components/resultBox'
function App() {
  return (
    <div className='App'>
     <Navigation/><br/>
     <HeaderText/><br/>
     <Advantage/><br/><br/><br/>
     <ResultBox/>
    </div>
  );
}

export default App;
