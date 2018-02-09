import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Baseball from '../assets/images/baseball.jpg';


function App(){
  return (
    <div className="container">
      <style jsx global>{`
        body {
          background-image: url(${Baseball});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover
        }
      `}</style>
      <Header />
      <NavBar />
    </div>
  );
}

export default App;
