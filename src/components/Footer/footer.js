import React from 'react';
import { Link } from 'react-router-dom';

const Footer=()=>(
    <div style={{borderTop:'5px solid black',margin:'2% 5% 0 5%'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
            <Link to='/' style={{margin:'20px 10px 0 10px'}}>
                <img style={{height:'80px'}} className='img img-responsive' alt='icon' src='/images/logo.jpg'/>
            </Link>
            <div>
                <h2 style={{marginBottom:'5px',fontSize:'25px'}}>GULU UNIVERSITY</h2>
                <h3 style={{marginTop:'0',fontSize:'20px'}}>FACULTY OF MEDICINE</h3>
            </div>
            
        </div>
        <hr/>
        <div style={{position:'relative'}}>
            <ul className='nav navbar-nav' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
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
        <hr/>
        <div>
            Address Lines
        </div>
    </div>
);

export default Footer;