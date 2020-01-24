import React from 'react'

const NewsCard=()=>{

    const newDate=()=>{
        const dtime=new Date();
        return `${dtime.getDate()}.${dtime.getMonth()}.${dtime.getFullYear()}`;
    }

    return (
        <div className='card' style={{margin:'5px'}}>
            <img className='img img-responsive' alt='card' src='/images/card.jpg'/>
            <div className='card-head' style={{position:'absolute',bottom:'0',paddingLeft:'5px',width:'50%'}}>
                <h4 style={{margin:'0',fontWeight:'300'}}>{newDate()}</h4>
                <h2 style={{margin:'0'}}>Title</h2>
            </div>
        </div>
    )
    
};

export default NewsCard;