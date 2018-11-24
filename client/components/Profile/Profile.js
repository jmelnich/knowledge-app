import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import User from './ProfileUser';
import Progress from './ProfileProgress';
import Wish from './ProfileWish';
import Archive from './ProfileArchive';

const Profile = (props) => {
    return (
        <main>
            <BrowserRouter>
                <section id="profile">
                <nav>
                    <ul>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/progress'>Courses in progress</Link></li>
                        <li><Link to='/wish'>Want to learn</Link></li>
                        <li><Link to='/archive'>Completed</Link></li>
                    </ul>
                </nav>
                <Route path='/profile' component={User}/>
                <Route path='/progress' component={Progress}/>
                <Route path='/wish' component={Wish}/>
                <Route path='/archive' component={Archive}/>
                </section>
            </BrowserRouter>
        </main>
    );
};

export default Profile;
