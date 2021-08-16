import React from 'react';
import './App.css';
import Quote from './Components/Quote';

const Footer = "footer";

function App() {
  return (
    <div>
      <Quote/>
      <Footer className="footer">
        <a href="https://github.com/rameshpvr" target="_blank" rel="noopener noreferrer">-By Ramesh <span><i class="fab fa-github fa-2x"></i></span></a>
      </Footer>
    </div>
  )
}

export default App
