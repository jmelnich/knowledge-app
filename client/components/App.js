import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Landing from "./LandingContent/Landing";
import {Route, Switch} from 'react-router-dom';
import Catalog from "./CatalogContent/Catalog";
import Login from './Forms/Login';
import Signup from "./Forms/Signup";
import RestorePassword from "./Forms/RestorePassword";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/catalog' component={Catalog}/>
                </Switch>
                <Login/>
                <Signup/>
                <RestorePassword/>
                <Footer/>
            </div>
        )}
}
export default App;