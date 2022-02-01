import React from 'react';
import PostList from '../components/Post/PostList';
import UserAddForm from '../components/UserAddForm/UserAddForm';
import UserList from '../components/User/UserList';
import {connect} from 'react-redux';
import {viewChange} from '../redux/actions/viewAction';
import {changeColor} from '../redux/actions/colorAction';
import './Home.css'

class Home extends React.Component {
  render(){
    const{ posts, view, changeView, changeColor, color, users } = this.props
    return (
      <div className="Home d-flex flex-column justify-content-between pt-4" style={{background: color.background, color: color.text}} >
        <h1 className="pb-4">~Admin Panel~</h1>
        <UserAddForm/>
        {
          view === 'users'
          ?<UserList users={users}/>
          :<PostList posts={posts}/>
        }
        <div className="footer">
          <div className="d-flex flex-column align-items-center actions-container py-2">
            <div className="d-flex justify-content-between w-100 align-items-center pb-1">
              <p className="mb-0">Schimba culoarea fundalului:</p>
              <input name="background"type="color" onChange={(event) => changeColor(event.target.name, event.target.value)}/>
            </div>
            <div className="d-flex justify-content-between w-100 align-items-center pb-1">
              <p className="mb-0">Schimba culoarea textului:</p>
              <input name="text" type="color" onChange={(event) => changeColor(event.target.name, event.target.value)}/>
            </div>
            <div className='btn-home w-100 d-flex justify-content-between'>
              <button className="btn btn-secondary" name="users" onClick={(event)=>changeView(event.target.name)}>Useri</button>
              <button className="btn btn-secondary" name="posts" onClick={(event)=>changeView(event.target.name)}>Postari</button>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    changeView: (payload) => {dispatch(viewChange(payload))},
    changeColor: (name,color) =>{dispatch(changeColor(name,color))}
  }
}
function mapStateToProps(state) {
  return {
    users: state.users.users,
    posts: state.posts.posts,
    view: state.view.view,
    color: state.color
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
