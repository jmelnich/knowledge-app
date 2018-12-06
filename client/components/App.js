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
import NotFound from './NotFound';
import {getUserCourses} from '../actions/courseActions';

class App extends Component {
    componentDidMount() {
        //if user is logged, get all courses
        if (this.props.auth) {
            this.props.getUserCourses({id: this.props.details.id});
        }
    }
    render() {
        const {auth} = this.props;
        return (
            <div>
			    <FlashMessage/>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/catalog/:category' component={CatalogByCategory}/>
                    <Route path='/catalog' component={Catalog}/>
                    <Route path='/profile' component={auth ? Profile : NotFound}/>
                    <Route path='/progress' component={Profile}/>
                    <Route path='/wish' component={Profile}/>
                    <Route path='/archive' component={Profile}/>
                    <Route component={NotFound}/>
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
};

function mapDispatchToProps(dispatch) {
    return {
        getUserCourses: (id) => dispatch(getUserCourses(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);