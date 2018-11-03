import React from 'react'

const Header = (props) => {
 return (
     <header>
         <div className="wrapper flex-row-between">
             <div className="flex-row">
                 <div className="logo">
                     <svg overflow="visible" width="50" height="35">
                         <path fill="none" stroke="#339966" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                               d="M5,50 Q17.5,45 30,50 V25 Q17.5,20 5,25 V50 H30 Q42.5,45 55,50 V25 52.5, 23.75 52.5,25 M30,25 V50 H55 M30,50 Q47.5,37.5 52.5,47.5 V22.5 Q47.5,12.5 30,25 M55,50 Q37.5,47.5 30,50 17.5,47.5 5,50" />
                     </svg>
                 </div>
                 <div className="naming">
                    <p>Knowledge</p>
                    <span>Data</span><span>base</span>
                </div>
             </div>
             <label htmlFor="menu" className="toggle-menu">☰ Menu</label>
             <input type="checkbox" name="toggle" id="menu"/>
             <nav id="nav">
                 <ul className="flex-row">
                     <li><a href="#">catalog</a></li>
                     <li><a href="#about">about us</a></li>
                     <li><a href="#contacts">contacts</a></li>
                     <li><a href="#loginForm">log in</a></li>
                 </ul>
             </nav>
         </div>
     </header>
 )
};

export default Header;
