import React from 'react';
import NewsCard from '../../widgets/NewsCard/newsCard';

const News=()=>(
    <div>
        <h1 style={{marginLeft:'15px'}}>News & Research</h1>
        <hr/>
        <div className="row" style={{width:'100%',margin:'0'}}>
            <div className='col-sm-3'>
                <p>
                    Most recent updates on reseach studies and latest news in and around the department
                </p>
            </div>
            <div className='col-sm-3' data-aos='fade-left'>
                <NewsCard/>
            </div>
            <div className='col-sm-3' data-aos='fade-left' data-aos-delay='300'>
                <NewsCard/>
            </div>
            <div className='col-sm-3' data-aos='fade-left' data-aos-delay='600'>
                <NewsCard/>
            </div>
        </div>
    </div>
)

export default News;