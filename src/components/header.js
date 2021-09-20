import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = () => {
    
  return(
    <>
      <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <NavLink 
                className="p-2" to="/"
                activeStyle={{color:'red'}}
                activeClassName="selected"
                exact
                >Home</NavLink> -
              <NavLink 
                className="p-2" to="/posts"
                activeStyle={{color:'red'}}
                activeClassName="selected"
                exact
                >Posts</NavLink> -
              <NavLink 
                className="p-2" to="/profile"
                activeStyle={{color:'red'}}
                activeClassName="selected"
                exact
              >Profile</NavLink>
            </nav>
          </div>
        </header>
    </>
  )
}

export default Header;
