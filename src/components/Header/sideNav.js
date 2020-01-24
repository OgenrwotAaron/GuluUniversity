import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>(
    <div className="collapse navbar-collapse" id="myNavbar" >
            <ul className="nav navbar-nav">
                {/* <li>
                <div className="dropdown-toggle" style={{color:'white',fontWeight:'600',padding:'15px',cursor:'pointer'}} data-toggle="dropdown">CATEGORIES
                <span className="caret"></span></div>
                <ul className="dropdown-menu" style={{background:'#00000095'}}>
                    <li><a href="/">CONSUMER SURVEYS</a></li>
                    <li><a href="/">AGRICULTURE</a></li>
                    <li><a href="/">BUSINESS</a></li>
                    <li><a href="/">HEALTH</a></li>
                    <li><a href="/">ACADEMICS</a></li>
                    <li><a href="/">POPULATION</a></li>
                </ul>
                </li> */}
                <li>
                    <Link to='/'>Education & Admission</Link>
                </li>
                <li>
                    <Link to='/'>Research</Link>
                </li>
                <li>
                    <Link to='/'>News & Events</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Annual Roadmap</Link>
                </li>
            </ul>
        </div>
)

export default Nav;