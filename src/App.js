import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import {connect} from 'react-redux';
import {fetchPosts} from './redux/actions/postAction';
import {fetchUsers} from './redux/actions/userAction';
import './App.css';



class App extends React.Component {
    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchPosts();
    }
    render(){
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='*' component={Page404}/>
                </Switch>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
      fetchUsers: () => {dispatch(fetchUsers())},
      fetchPosts: () => {dispatch(fetchPosts())}
    }
  }

export default connect(null, mapDispatchToProps)(App);
