import React from 'react';
import QouteCard from '../../widgets/QuoteCard/quoteCard';

const AtDoim=()=>(
    <div>
        <h1 style={{marginLeft:'15px'}}>@GUFOM | DoIM</h1>
        <hr/>
        <div className='row' style={{width:'100%',margin:'0',padding:'0 5%'}}>
            <div className='col-sm-4' data-aos='fade-in' data-aos-duration='500' data-aos-delay='300'>
                <QouteCard title='Head of Department'/>
            </div>
            <div className='col-sm-4' data-aos='fade-in' data-aos-duration='500' data-aos-delay='600'>
                <QouteCard title='Assistant Head of Department'/>
            </div>
            <div className='col-sm-4' data-aos='fade-in' data-aos-duration='500' data-aos-delay='900'>
                <QouteCard title='Some other title'/>
            </div>
        </div>
    </div>
)

export default AtDoim;