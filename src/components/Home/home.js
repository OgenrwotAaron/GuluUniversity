import React from 'react';
import Jumbotron from '../Jumbotron/jumbotron';
import News from '../NewsResearch/newsResearch';
import Education from '../Education/education';
import AtDoim from '../AtDoIM/atDoim';

const Home=()=>(
    <div>
        <Jumbotron/>
        <News/>
        <Education/>
        <AtDoim/>
    </div>
);

export default Home;