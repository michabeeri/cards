import React from 'react';
import _ from 'lodash';
import {Banner, States, Footer} from './cardComponents.jsx';
import cardMetaData from './cardMetaData.json';

const HeroCard = props => (
    <div className='cardContainer'>
        <Banner {...cardMetaData.heroClass[props.heroClass]} name={props.name}/>
        <States {...props}/>
        <Footer {...cardMetaData.terrain[props.terrain]}/>
    </div>)

export default HeroCard;
