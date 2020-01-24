import React from 'react';

const Jumbotron=()=>(
    <div className='jumbotron fluid' style={{
        backgroundImage:'url("/images/hero.jpg")',
        backgroundAttachment:'fixed',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        padding:'0',
        height:'70vh'
    }}>
        <div className='container' style={{
            background:'rgba(3, 39, 91, 0.56) none repeat scroll 0% 0%',
            margin:'0',
            width:'100%',
            padding:'1% 5%',
            height:'70vh'
        }}>
            <div style={{position:'absolute',bottom:'9%'}}>
                <h1 style={{color:'white',marginBottom:'0px'}} data-aos='fade-up' data-aos-delay='300'>Department of</h1>
                <h1 style={{color:'white',margin:'0px',fontWeight:'300'}} data-aos='fade-up' data-aos-delay='300'>Internal Medicine</h1>
                <hr style={{width:'60%',marginTop:'0',float:'left'}} data-aos='fade-right'/>
            </div>
        </div>
    </div>
);

export default Jumbotron;