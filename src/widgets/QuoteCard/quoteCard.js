import React from 'react';

const QouteCard=(props)=>(
    <div className='card' style={{display:'flex',alignItems:'center',flexDirection:'column',padding:'5%'}}>
        <img style={{
            height:'200px',
            width:'200px',
            borderRadius:'50%',
            border:'#03a9f0 solid 2px'}}
             className='card-image img img-responsive' 
             alt='avatar' 
             src='/images/images.png'
        />
        <h1 className='card-title' style={{margin:'0',background:'#fff',color:'#3b3b3b'}}>Name</h1>
        <h2 className='card-head' style={{margin:'0',background:'#fff',color:'#3b3b3b'}}>{props.title}</h2>
        <p className='card-body' style={{textAlign:'center',padding:'5%'}}>
           "Our educational programs advance Faculty of Medicine's core mission to 
            alleviate human..."
        </p>
    </div>
);

export default QouteCard;