import './App.css';
import React, { Component, Fragment } from 'react'
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import About from './components/layout/About';

class App extends Component {
  state={
    users:[],
    loading:false 
  };
  async componentDidMount(){
    this.setState({loading:true});
    const res= await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CIENT_SECRET}');
    this.setState({users:res.data , loading:false });
  }
  searchUsers = async (text) =>{
    console.log(text);
    // this.setState({loading:true})

    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CIENT_SECRET}`);

    this.setState({users:res.data.items , loading:false });
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route exact path='/about' element={<About/>}/>
          </Routes>

          <Search searchUsers = {this.searchUsers}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
      </Router>
    )
  }
}

export default App
