import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import logo from '../logo.png';


class Header extends Component {

  state = {
    activeButton: null,
  };

  activeClass = (event) => {
    console.log(this.props)
    this.setState({
      activeButton: event
    })
  }

  render = () => {
    return (
    <div className="container-fluid navbar-dark">  
      <div className="container">
        <nav className="navbar navbar-expand-sm">
          <div className="col-6 pl-0">
            {/* <img src={logo} className="App-logoTop" /> */}
          </div>  
          <div className="col-8">
            <nav className="fill">
              <ul>
                <li className={"nav-item" + this.state.activeButton === 'active' ? "active" : ""}>
                  <Link to="/" onClick={() => this.activeClass.bind(this, 'active')} className="nav-link"  >Home</Link>
                  </li>
                <li className={"nav-item" + this.state.activeButton === 'viewList' ? "active" : ""}>
                  <Link to="/viewList" onClick={this.activeClass.bind(this, 'viewList')} className="nav-link" >View List</Link>
                </li>
                <li className={"nav-item" + this.state.activeButton === 'add' ? "active" : ""}>
                  <Link to="/add" onClick={this.activeClass.bind(this, 'add')} className="nav-link" >Add</Link>
                </li>
                <li className={"nav-item" + this.state.activeButton === 'update' ? "active" : ""}>
                  <Link to="/update" onClick={this.activeClass.bind(this, 'update')} className="nav-link" >Update</Link>
                </li>
              </ul>
            </nav>
          </div>  
        </nav>
      </div>
    </div>  
    );
  }
}

export default Header;
