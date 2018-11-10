import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Landing from "./LandingContent/Landing";
import {Route, Switch} from 'react-router-dom';
import Catalog from "./CatalogContent/Catalog";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/catalog' component={Catalog}/>
                </Switch>
                <Footer/>
            </div>
        )}
}
export default App;