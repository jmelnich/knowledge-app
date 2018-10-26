import React from 'react'

const Header = (props) => {
 return (
     <header>
         <div className="wrapper">
             <div className="logo">
                 <svg overflow="visible" width="50" height="35">
                     <path fill="none" stroke="#f0c75e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                           d="M5,50 Q17.5,45 30,50 V25 Q17.5,20 5,25 V50 H30 Q42.5,45 55,50 V25 52.5, 23.75 52.5,25 M30,25 V50 H55 M30,50 Q47.5,37.5 52.5,47.5 V22.5 Q47.5,12.5 30,25 M55,50 Q37.5,47.5 30,50 17.5,47.5 5,50" />
                 </svg>
             </div>
             <nav>
                 <ul>
                     <li><a href="#">catalog</a></li>
                     <li><a href="#">about us</a></li>
                     <li><a href="#">contacts</a></li>
                     <li><a href="#">log in</a></li>
                 </ul>
             </nav>
         </div>
     </header>
 )
};

export default Header;
