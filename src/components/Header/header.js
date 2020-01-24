import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './sideNav';

const Header=()=>(
    <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
            <Link to='/' style={{margin:'20px 10px 0 10px'}}>
                <img style={{height:'80px'}} className='img img-responsive' alt='icon' src='/images/logo.jpg'/>
            </Link>
            <div>
                <h2 style={{marginBottom:'5px',fontSize:'25px'}}>GULU UNIVERSITY</h2>
                <h3 style={{marginTop:'0',fontSize:'20px'}}>FACULTY OF MEDICINE</h3>
            </div>
            
        </div>
        
        <nav className='navbar text-white' style={{position:'relative'}}>
            <div className='container'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                        <span className='icon-bar'/>
                        <span className='icon-bar'/>
                        <span className='icon-bar'/>
                    </button>
                </div>
                <Nav/>
            </div>
        </nav>
    </div>
    
);

export default Header;