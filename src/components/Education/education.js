import React from 'react';
import {Link} from 'react-router-dom';

const Education=()=>(
    <div>
        <h1 style={{marginLeft:'15px'}}>Education</h1>
        <hr/>
        <div className='row' style={{width:'100%',margin:'0'}}>
            <div className='col-sm-8'>
                <div className='col-xs-6'>
                    <Link data-aos='fade-in' to='/' style={{color:'black',textDecoration:'none'}}>
                        <h2 style={{borderBottom:'2px #939393 solid',width:'40%'}}>Admissions</h2>
                        <p>Our educational programs advance Faculty of Medicine's core mission to 
                        alleviate human suffering by nurturing a diverse group of leaders and future 
                        leaders in both clinical care and biomedical inquiry</p>
                    </Link>
                    <Link data-aos='fade-in' data-aos-delay='400' to='/' style={{color:'black',textDecoration:'none'}}>
                        <h2 style={{borderBottom:'2px #939393 solid',width:'15%'}}>Staff</h2>
                        <p>Our educational programs advance Faculty of Medicine's core mission to 
                        alleviate human suffering by nurturing a diverse group of leaders and future 
                        leaders in both clinical care and biomedical inquiry</p>
                    </Link>
                </div>
                <div className='col-xs-6'>
                    <Link data-aos='fade-up' data-aos-delay='200' to='/' style={{color:'black',textDecoration:'none'}}>
                        <h2 style={{borderBottom:'2px #939393 solid',width:'50%'}}>Tests & Exams</h2>
                        <p>Our educational programs advance Faculty of Medicine's core mission to 
                        alleviate human suffering by nurturing a diverse group of leaders and future 
                        leaders in both clinical care and biomedical inquiry</p>
                    </Link>
                    <Link data-aos='fade-up' data-aos-delay='600' to='/' style={{color:'black',textDecoration:'none'}}>
                        <h2 style={{borderBottom:'2px #939393 solid',width:'30%'}}>Lectures</h2>
                        <p>Our educational programs advance Faculty of Medicine's core mission to 
                        alleviate human suffering by nurturing a diverse group of leaders and future 
                        leaders in both clinical care and biomedical inquiry</p>
                    </Link>
                </div>
            </div>
            <div className='col-sm-4' data-aos='fade-in' data-aos-duration='1000' style={{backgroundImage:'url("/images/drawing.svg")',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
                <h2 style={{borderBottom:'2px black solid',width:'30%'}}>Mission</h2>
                <p style={{fontSize:'20px',lineHeight:'26px',fontWeight:'600',padding:'20px'}}>
                    Our educational programs advance Faculty of Medicine's core mission to 
                    alleviate human suffering by nurturing a diverse group of leaders and future 
                    leaders in both clinical care and biomedical inquiry. These individuals are 
                    on the front lines of medicine and science serving individuals and populations 
                    locally, nationally, and globally
                </p>
            </div>
        </div>
    </div>
);

export default Education;