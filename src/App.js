import React from 'react';
/*import './App.css';*/
import Ap from './Components/Ap/Ap';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import SubContent from './Components/SubContents/SubContent';
import Advertisement from './Components/Advertisement/Advertisement';

function App() {
  return (
    <div className="app">
      <Ap>
        <Header />
        <Navigation />
        <Main>
          <SubContent/>
          <SubContent/>
          <SubContent/>
          <Advertisement />
        </Main>
      </Ap>
    </div>
  );
}
                
export default App;


