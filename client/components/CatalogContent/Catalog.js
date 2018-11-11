import React from 'react';
import udacity from '../../udacity-courses.json'
import CourseItem from "./CourseItem";

const Catalog = () => {
  return (
   <main>
       <section id="catalog">
           <div className="wrapper">
               <div className="section-content">
                   <h2>Discover courses</h2>
                    <div className="flex-row courses-block">
                        {udacity.courses.map(item => (
                            <CourseItem key={item.key} course={item}/>
                        ))}
                    </div>
               </div>
           </div>
       </section>

   </main>
  );

}

export default Catalog;