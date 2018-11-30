import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Landing from "./LandingContent/Landing";
import {Route, Switch} from 'react-router-dom';
import Catalog from "./CatalogContent/Catalog";
import Login from './Forms/Login';
import Signup from "./Forms/Signup";
import RestorePassword from "./Forms/RestorePassword";
import Profile from './Profile/Profile';
import CatalogByCategory from "./CatalogContent/CatalogByCategory";
import FlashMessage from "./Flash/Flash";
import {connect} from "react-redux";

class App extends Component {
    render() {
        console.log(this.props.auth); //TODO: provide profile only if auth true
        return (
            <div>
			    <FlashMessage/>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/catalog/:category' component={CatalogByCategory}/>
                    <Route path='/catalog' component={Catalog}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/progress' component={Profile}/>
                    <Route path='/wish' component={Profile}/>
                    <Route path='/archive' component={Profile}/>
                </Switch>
                <Login/>
                <Signup/>
                <RestorePassword/>
                <Footer/>
            </div>
        )}
}

function mapStateToProps({user}) {
	return user;
}

export default connect(mapStateToProps)(App);