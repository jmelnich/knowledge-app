import React, {Component} from 'react'
import Welcome from './Welcome'
import Header from './Header'
import Footer from './Footer'
import Landing from "./Landing";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Welcome/>
                <Landing/>
                <Footer/>
            </div>
        )}
}
export default App;