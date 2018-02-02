import React from 'react';
import _ from 'lodash';
import {Banner, States, Footer, XPIndicator} from './cardComponents.jsx';
import cardMetaData from './cardMetaData.json';

const HeroCard = props => (
    <div className='cardContainer'>
        <Banner {...cardMetaData.heroClass[props.heroClass]} name={props.name}/>
        <States {...props}/>
        <Footer {...cardMetaData.terrain[props.terrain]}/>
    </div>)

const ObstacleCard = props => (
    <div className='cardContainer'>
        <Banner icon={'fa-exclamation-triangle'} name={props.name}/>
        <States {...props}/>
        <Footer {...cardMetaData.terrain[props.terrain]}/>
    </div>)

const MonsterCard = props => (
    <div className='cardContainer'>
        <Banner icon={'fa-arrows-alt'} name={props.name}/>
        <XPIndicator xp={props.xp}/>
        <States {...props}/>
        <Footer {...cardMetaData.terrain[props.terrain]}/>
    </div>)

const MineralCard = props => (
    <div className='cardContainer'>
        <Banner icon={'fa-pagelines'} name={props.name}/>
        <XPIndicator xp={props.xp}/>
        <States {...props}/>
        <Footer {...cardMetaData.terrain[props.terrain]}/>
    </div>)

export {
    HeroCard,
    ObstacleCard,
    MonsterCard,
    MineralCard
}

