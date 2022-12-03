import './App.css';
import {Switch,Route} from 'react-router-dom';
///Routes
import Private from './routes/Private';
import Public from './routes/Public';
///////
import Home from './components/Home/Home';
import UserPosts from './components/UserPost/userPosts'
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
function App() {
  return (
  <div className='app'>
      <Switch>
        <Public path='/' component={Home} exact/>
        <Private  path="/profile" component={Profile} />
        <Public path="/login" component={Login}></Public>
        <Route path="/users/:id" component={UserPosts} />
      </Switch>
   </div>
  );
}

export default App;
