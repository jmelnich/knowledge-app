import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <main>
            <section>
                <div className="wrapper">
                    <div className="section-content flex-col">
                        <h1>404</h1>
                        <h2>Oops, the page you're looking for does not exist.</h2>
                        <button><Link to='/'> RETURN HOME</Link></button>
                    </div>
                </div>
            </section>
        </main>
    );

};
export default NotFound;