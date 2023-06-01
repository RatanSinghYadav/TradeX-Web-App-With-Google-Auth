import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Signup from './component/signup';
import Login from './component/login';
import Profile from './component/Profile/profile';
import Home from './component/home';
import Navbar from './component/navbar';

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/profile' element = {<Profile/>}/>
      </Routes>
    </Router>      
    </div>
  );
}

export default App;
